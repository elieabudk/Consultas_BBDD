console.log("hola buscar")

document.getElementById("Buscar").addEventListener("click", function(){
    
    const enlace = "https://retoolapi.dev/EgtuRt/data";
    fetch(enlace)
    .then(response =>{
        if(!response.ok){
            throw new Error("error en la api")
        }
        return response.json()
    })
    .then(info => {
        console.log(info)
        const nombre = document.getElementById("search").value
        const encontrado = info.find(item => item.nombre === nombre); // Verifica si el nombre está en la API
        
        if (encontrado) {
            console.log("Nombre encontrado:", encontrado);
            const resultsTableBody = document.querySelector('#resultsTable tbody');
            resultsTableBody.innerHTML = ''; // Limpiar cualquier contenido previo
        
           
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${encontrado.id}</td>
                    <td>${encontrado.nombre}</td>
                    <td>${encontrado.apellido}</td>
                    <td>${encontrado.correo}</td>
                `;

                    resultsTableBody.appendChild(row);
                    document.getElementById("modifyId").value = encontrado.id
                    document.getElementById("modifyNombre").value = encontrado.nombre
                    document.getElementById("modifyApellido").value = encontrado.apellido
                    document.getElementById("modifyCorreo").value = encontrado.correo
                    
          
        } else {
            alert("Nombre no encontrado");
        }
    })
    .catch(error => {
        console.error("error en la api", error)
    })
})
