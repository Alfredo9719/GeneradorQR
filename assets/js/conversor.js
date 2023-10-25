console.log("Entro conversor.js");

let inputOrigen = document.getElementById("inputOrigen");
let inputDestino = document.getElementById("inputDestino");
let inputValor = document.getElementById("inputValor");
let inputResultado = document.getElementById("inputResultado");

let convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener("click", ()=> {
    if (inputOrigen.value === inputDestino.value){
        alert("La unidad de origen no puede ser igual a la destino");
        return;
    }
    const datosPeticion = {
        "valor": inputValor.value,
        "unidad_origen": inputOrigen.value,
        "unidad_destino": inputDestino.value
    }
    fetch("https://dev4humans.com.mx/api/clases/conversor_medidas", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(datosPeticion)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        inputResultado.value = data.data.toFixed(2);
        
    }).catch(error => console.log(error))


    console.log(datosPeticion);
    console.log("Entro al click!!!");
});