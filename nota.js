
function evaluarNota() {

    let nota = parseInt(document.getElementById("nota").value);

    if (nota >= 13) {
        document.getElementById("resultado").textContent = "APROBADO";
    } else {
        document.getElementById("resultado").textContent = "DESAPROBADO";
    }

}