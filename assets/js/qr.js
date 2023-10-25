console.log("Entro qr.js");

let imageqr = document.getElementById("imageqr");
let txtContenido = document.getElementById("txtContenido");
let descargarCodigo = document.getElementById("descargarCodigo");

const size = "150x200";
const qrtext = "Example";


function cargarQR(size, qrtext){
    fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${qrtext}`, {method: "GET"})
        .then(data => {
            console.log(data);
            imageqr.src = data.url;
            descargarCodigo.href = data.url;
        }).catch(error => console.log(error))
}

    txtContenido.addEventListener("keypress", (event)=>{
        if (event.key === "Enter"){
            cargarQR("150x200",txtContenido.value);
        }
    })
    cargarQR(size, qrtext);