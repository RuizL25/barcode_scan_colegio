const divEstudiante = document.getElementById("estudiante");
const pNombre = document.getElementById("nombre");
const pCodigo = document.getElementById("codigo");
const pRuta = document.getElementById("ruta");
const pFecha = document.getElementById("fecha");

import {studends} from "/estudiantes_por_ruta.js";

console.log(studends['PATIOS']);


let estudiante = students.find(student => student.Código === "2016140")

function showcodes(code, ruta) {
    var timestamp = new Date();
    var formattedDate = timestamp.toLocaleDateString("es-CO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "America/Bogota"
    });

    let estudiante = students.find(student => student.Código === code && student.Ruta === ruta);
    if (!estudiante) {
        alert("No se encontró el estudiante con el código proporcionado y la ruta " + ruta);
        window.location.href = "index.html"; // Redirigir a la página de inicio
        return;
    }

    // Actualizar el contenido en el HTML
    pNombre.innerText = `Nombre: ${estudiante.Estudiante}`;
    pCodigo.innerText = `Código: ${estudiante.Código}`;
    pRuta.innerText = `Ruta: ${estudiante.Ruta}`;
    pFecha.innerText = `Fecha: ${formattedDate}`;

    // Hacer visible el div del estudiante
    divEstudiante.style.display = "block";
    estudiante_registrado = {
        "Nombre": estudiante.Estudiante,
        "Código": estudiante.Código,
        "Ruta": estudiante.Ruta,
        "Fecha": formattedDate
    };

    informes.push(estudiante_registrado);

    // Actualizar el archivo Excel
    exportToExcel(estudiante_registrado);

    alert(informes.length);
}


// console.log(informes.length)
// let table = document.getElementById("table-registrados");
// let tbody = table.querySelector("tbody");
// tbody.innerHTML = ""; // Limpiar el contenido existente
// informes.forEach(informe => {
//     let row = document.createElement("tr");
//     row.innerHTML = `
//         <td>${informe.Nombre}</td>
//         <td>${informe.Código}</td>
//         <td>${informe.Ruta}</td>
//         <td>${informe.Fecha}</td>
//     `;
//     tbody.appendChild(row);
// });
// // Mostrar la tabla

function exportToExcel(data) {
    const fileName = "informe.xlsx";
    let workbook, worksheet;

    try {
        // Intentar cargar el archivo existente
        const file = localStorage.getItem(fileName);
        if (file) {
            const workbookBlob = new Blob([Uint8Array.from(atob(file), c => c.charCodeAt(0))], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            workbook = XLSX.read(workbookBlob, { type: 'binary' });
            worksheet = workbook.Sheets["Informe"];
        } else {
            // Crear un nuevo libro y hoja si no existe
            workbook = XLSX.utils.book_new();
            worksheet = XLSX.utils.json_to_sheet([]);
            XLSX.utils.book_append_sheet(workbook, worksheet, "Informe");

            // Agregar encabezados si es un archivo nuevo
            worksheet["A1"] = { v: "Nombre" };
            worksheet["B1"] = { v: "Código" };
            worksheet["C1"] = { v: "Ruta" };
            worksheet["D1"] = { v: "Fecha" };
        }

        // Obtener el número de filas existentes
        const rowCount = XLSX.utils.sheet_to_json(worksheet).length + 1;

        // Agregar la nueva fila de datos
        worksheet[`A${rowCount}`] = { v: data.Nombre };
        worksheet[`B${rowCount}`] = { v: data.Código };
        worksheet[`C${rowCount}`] = { v: data.Ruta };
        worksheet[`D${rowCount}`] = { v: data.Fecha };

        // Actualizar el archivo Excel en el almacenamiento local
        const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
        const fileContent = btoa(Array.from(new Uint8Array(wbout.split("").map(c => c.charCodeAt(0)))).map(byte => String.fromCharCode(byte)).join(""));
        localStorage.setItem(fileName, fileContent);

        alert("Archivo Excel actualizado correctamente");
    } catch (error) {
        console.error("Error al crear o actualizar el archivo Excel:", error);
    }
}

function renderTable() {
    let table = document.getElementById("table-registrados");
    let tbody = table.querySelector("tbody");
    tbody.innerHTML = ""; // Limpiar el contenido existente

    informes.forEach(informe => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${informe.Nombre}</td>
            <td>${informe.Código}</td>
            <td>${informe.Ruta}</td>
            <td>${informe.Fecha}</td>
        `;
        tbody.appendChild(row);
    });
}
