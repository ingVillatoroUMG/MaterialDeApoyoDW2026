import Sexo, {getDPI as DPI} from './db.js'

console.log(DPI())

let mensaje = "Hola mundo"
console.log(mensaje)

function getUsuario(callback) {
    setTimeout(() => {
    const error = null
    const usuario = {
        nombre: "Juan",
        apellido: "Perez",
        carnet: 123456
    }
    callback(error, usuario)
    }, 1000)
}

function getRol(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = "Timeout"
            const rol = "Administrador"
            if (error) {
                reject(error)
            } else {
                resolve(rol)
            }
        }, 1000)
    })
}

async function getPermisos(){
    setTimeout(() => {
        try{
            return "readonly"
        }catch(error){
            console.log(error)
        }
    },200)
}

 console.log("Inicia proceso de obtención de usuario" )
 console.log(getUsuario(function(error, usuario){
     console.log(error)
     console.log(usuario)
 }))

  getRol().then((rol) => {
    console.log("Rol del usuario: ", rol)
  }).catch((error) => {
    console.log("Error al obtener el rol: ", error)
  })

  let permiso = await getPermisos()

console.log(permiso)
 console.log("Finaliza proceso de obtención de usuario")