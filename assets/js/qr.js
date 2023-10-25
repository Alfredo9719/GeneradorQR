console.log("Entro qr.js");

let imageqr = document.getElementById("imageqr");

const size = "300x300";
const qrtext = "Jesus";

fetch(`https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${qrtext}`, {method: "GET"})
    .then(data => {
        console.log(data);
        imageqr.src = data.url;
    }).catch(error => console.log(error))