const express = require('express');
const app = express()
const port = 3001
app.use(express.json());
let estudiantes = [];

function existeEstudiante(carnet){
    return estudiantes.find(function(estudiante){
        return estudiante.carnet == carnet
    })
}

app.get('/estudiantes',function(request, response){
    response.json(estudiantes);
})

app.post('/estudiante',function(request, response){
    const estudiante = request.body;
    if(!estudiante.carnet || !estudiante.nombre){
        return response.status(400).json({error: 'El estudiante debe tener un carnet y un nombre'});
    }

    if(existeEstudiante(estudiante.carnet))
        return response.status(409).json({error: 'El estudiante ya existe'});

    estudiantes.push(estudiante);
    return response.status(201).json({message:"Estudiante creado exitosamente"});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})