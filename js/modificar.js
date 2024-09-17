

console.log("hola modificar")

document.getElementById("Modificar").addEventListener("click", function(){
    const id = document.getElementById("modifyId").value
    const nombre = document.getElementById("modifyNombre").value
    const apellido = document.getElementById("modifyApellido").value
    const correo = document.getElementById("modifyCorreo").value
    console.log("boton modificar")



    const enlace = "https://retoolapi.dev/EgtuRt/data/"+id
    fetch(enlace, {
        method: "PATCH",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            "nombre" : nombre,
            "apellido" : apellido,
            "correo" : correo
    
        })
    
    })
    
        .then(response=>{
            if(!response.ok){
                throw new Error("errpr en la conexion")
            }
            return response.json()
    
        })
        .then(info=>{
            console.log("datos recibidos:" , info)
        })
        .catch(error=>{
            console.error("error", error)
        })

})