const express = require('express');
const app = express()
const port = 3001
const jwt = require('jsonwebtoken');

const firma = 'dw'

app.use(express.json());
let estudiantes = [];

function existeEstudiante(carnet){
    return estudiantes.find(function(estudiante){
        return estudiante.carnet == carnet
    })
}

function login(carnet, clave){
    return estudiantes.find(function(estudiante){
        return estudiante.carnet == carnet && estudiante.clave == clave
    })
}

function validaToken(request, response, next){
    let token = request.headers.authorization;
    if(!token){
        return response.status(401).json({error: 'No se proporcionó un token'});
    }
    token = token.split(' ')[1];
    console.log(token)
    jwt.verify(token, firma, function(err, decoded){
        if(err){
            return response.status(401).json({error: 'token invalido'});
        }
        request.carnet = decoded.carnet;
        next()
    })
    next();
}

app.get('/estudiantes', validaToken, function(request, response){
    return response.json(estudiantes);
})

app.post('/estudiante',function(request, response){
    const estudiante = request.body;
    if(!estudiante.carnet || !estudiante.nombre || !estudiante.clave){
        return response.status(400).json({error: 'El estudiante debe tener un carnet, un nombre y una clave'});
    }

    if(existeEstudiante(estudiante.carnet))
        return response.status(409).json({error: 'El estudiante ya existe'});

    estudiantes.push(estudiante);
    return response.status(201).json({message:"Estudiante creado exitosamente"});
})

app.get('/estudiante',validaToken, function(request, response){
    const carnet = request.carnet
    const estudiante = existeEstudiante(carnet);
    if(!estudiante)
        return response.status(404).json({error: 'El estudiante no existe'});
    return response.json(estudiante);
})

app.post('/login',function(request, response){
    const {carnet, clave} = request.body;
    if(!carnet || !clave){
        return response.status(400).json({error: 'Debe proporcionar un carnet y una clave'});
    }
    
    const estudiante = login(carnet, clave);
    if(!estudiante){
        return response.status(401).json({error: 'Carnet o clave incorrectos'});
    }

    const token = jwt.sign({carnet: estudiante.carnet}, firma, {expiresIn: '30s'});
    return response.json({token});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})