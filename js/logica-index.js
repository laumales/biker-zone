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