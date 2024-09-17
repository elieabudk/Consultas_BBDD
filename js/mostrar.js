console.log("hola mostrar")
document.getElementById("showAllButton").addEventListener("click", function(){
const enlace = "https://retoolapi.dev/EgtuRt/data";
fetch(enlace)
.then(response =>{
    if(!response.ok){
        throw new Error("error en la api")
    }
    return response.json()
})

.then(info => {
    console.log(info);
    const resultsTableBody = document.querySelector('#resultsTable tbody');
    resultsTableBody.innerHTML = ''; // Limpiar cualquier contenido previo

    info.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.apellido}</td>
            <td>${item.correo}</td>
        `;
        resultsTableBody.appendChild(row);
        
    });
})
.catch(error => {
    console.error("error en la api", error)
}) 

}) 











