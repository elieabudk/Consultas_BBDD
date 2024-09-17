document.getElementById("deleteButton").addEventListener("click", function(){
    const id = document.getElementById("modifyId").value
    
    const enlace = "https://retoolapi.dev/EgtuRt/data/"+id;
    fetch(enlace, {
        method: "DELETE"
        
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