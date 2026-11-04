//Funciones para interactuar con el DOM

export function mostrarDatoEnId(idElemento, valor) {
    let elemento = document.getElementById(idElemento)
    elemento.textContent = valor
}

export function mostrarGastoWeb(idElemento, gasto) {
    let contenedor = document.getElementById(idElemento)

    let divGasto = document.createElement("div")
    divGasto.classList.add("gasto")

    let divDescripcion = document.createElement("div")
    divDescripcion.classList.add("gasto-descripcion")

    let divFecha = document.createElement("div")
    divFecha.classList.add("gasto-fecha")

    let divValor = document.createElement("div")
    divValor.classList.add("gasto-valor")

    let divEtiquetas = document.createElement("div")
    divEtiquetas.classList.add("gasto-etiquetas")

    for (let index = 0; index < gasto.etiquetas.length; index++) {
        let spanEtiqueta = document.createElement("span")
        spanEtiqueta.classList.add("gasto-etiquetas-etiqueta")
        spanEtiqueta.textContent = gasto.etiquetas[index]

        divEtiquetas.append(spanEtiqueta)
    }

    divGasto.append(divDescripcion, divFecha, divValor, divEtiquetas)
}

export function mostrarGastosAgrupadosWeb(params) {
    
}