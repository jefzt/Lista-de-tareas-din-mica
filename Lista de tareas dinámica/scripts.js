function agregar() {
    const texto = document.getElementById("texto").value;
    const estado = document.getElementById("estado").value;
    const lista = document.getElementById("lista");

    if (texto === "") {
        return;
    }

    const div = document.createElement("div");
    div.classList.add("tarea");

    if (estado === "PENDIENTE") {
        div.classList.add("rojo");
    } else if (estado === "EN PROCESO") {
        div.classList.add("amarillo");
    } else {
        div.classList.add("verde");
    }

    div.textContent = texto;
    lista.appendChild(div);

    document.getElementById("texto").value = "";
}
