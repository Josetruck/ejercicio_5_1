function esMayuscula(palabra) {
    return palabra[0] === palabra[0].toUpperCase();
}

function emailOk(email1, email2) {
    return email1 === email2;
}


var direccion = "calle/ Galicia, 5, Serranillos del Valle, Madrid, 28979, España";
var direccionSeparad = [];
var aux = "";
for (let i = 0; i < direccion.length; i++) {
    aux += direccion[i];
    if (direccion[i] == "/" || direccion[i] == ',' || i == direccion.length) {
        aux = "";
    }
}
console.log(direccionSeparad);
console.log(document.getElementById("direccion"))

function pasaDatos() {
    var email = document.getElementById("email").value;
    var email2 = document.getElementById("email2").value;
    console.log(email);
    console.log(email2);
    console.log(document.getElementById("direccion").value);
}

var dni = "76630800K";
console.log(dni.length);
console.log("A" > 9);

for (let i = 0; i < dni.length; i++) {
    console.log(dni[i] > 9 || dni[i] < 0)
    if (dni[i] > 9 || dni[i] < 0) {
        alert("Dni no valido")
    }
}
if (dni.length !== 9) {
    alert("Dni No valido.")
} else {
    if (dni[dni.length - 1] > "Z" && dni[dni.length - 1] < "A") {
        alert("La letra no es correcta o no está en mayúscula.")
    }}


    // email
    // que tenga un @ que no sea el primer caracter ni el ultimo
    // un . despues del @
    // puede admitir puntos y guiones bajos
    // que el primer caracter no empiece por . ni el ultimo

    var arrobaOk = false;
    var puntodespuesOk = false;
    var email = "veradelmar@gmail.com";
    for (let i = 0; i < email.length; i++) {
        if() {
            if (email[i] == '@' && (i != 0 || i < (email.length - 3))) {
                arrobaOk = true;
            }
            if (email[i] == '.' && arrobaOk && i != (email.length - 1)) {
                puntodespuesOk = true;
            }
        }
            
    }
        
    }

    // 
    email.charCodeAt(0) //64 - 90, 95, 46, 97-122
