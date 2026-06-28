 // Lógica para mostrar los registros en la tabla
fetch("../data/registro.json")
    .then(respuesta => respuesta.json())
    .then(registros => {

        const tabla = document.querySelector(".table-container");

        registros.forEach(registro => {
            const filatabla = document.createElement("tr");
            filatabla.innerHTML = `
            <td>${registro.placa}</td>
            <td>${registro.cascos}</td>
            <td>${registro.horaEntrada}</td>
            <td></td>

        `
            tabla.appendChild(filatabla);
        });

    })






























// lógica para la mostrar la modal o esconderla
const btnBarcode = document.getElementById("btn-barcode");
const modal = document.getElementById("IDmodal"); 

btnBarcode.addEventListener("click", () => {
    modal.style.display = "flex";
})
