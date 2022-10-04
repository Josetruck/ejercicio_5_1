function empiezaMayuscula(palabra) {
  return palabra.charAt(0) == palabra.charAt(0).toUpperCase();
}
function separarNombre(nombre) {
  var nombreSeparado = [];
  var aux = "";
  for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] != " ") {
      aux += nombre[i];
    }
    if (nombre[i] == " " || i == nombre.length - 1) {
      nombreSeparado.push(aux);
      aux = "";
    }
  }
  return nombreSeparado;
}

function esMayuscula(letra) {
  return letra == letra.toUpperCase();
}
function esMinuscula(letra) {
  return letra == letra.toLowerCase();
}
// ascii = del 32 al 47, del 58 al 64, 91 a 96, del 123 al 254;
function esSimbolo(letra) {
  return ((letra.charCodeAt() >= 32 && letra.charCodeAt() <= 47) ||
    (letra.charCodeAt() >= 58 && letra.charCodeAt() <= 64) ||
    (letra.charCodeAt() >= 91 && letra.charCodeAt() <= 96) ||
    (letra.charCodeAt() >= 123 && letra.charCodeAt() <= 254));
}
function esUnNum(num) {
  return num.charCodeAt() >= 48 && num.charCodeAt() <= 57;
}

function soloLetras(palabra) {
  var sololetrasOK = true;
  for (let i = 0; i < palabra.length; i++) {
    if (!((palabra.charCodeAt(i) > 64 && palabra.charCodeAt(i) < 91) || (palabra.charCodeAt(i) > 96 && palabra.charCodeAt(i) < 123))) {
      sololetrasOK = falso; //si no pasa esto, se queda verdadera
    }
  }
  return sololetrasOK;
}

function esNumero(numero) {
  var num_ok = true;
  for (let i = 0; i < numero.length; i++) {
    if (!(numero.charCodeAt(i) > 48 || numero.charCodeAt(i) < 56)) {
      // si no es numero --> es falso
      num_ok = false;
    }
    return num_ok;
  }
}
//  Formato: Tipo vía/ Nombre vía, Número, Resto de Datos (piso, portal...etc), CP, Población y País (separados por ,)
function checkDireccion(direccion) {
  var direccionSeparado = [];
  var aux = "";

  for (let i = 0; i < direccion.length; i++) {
    if (direccion[i] != "," && direccion[i] != "/") {
      aux += direccion[i];
    }
    if (direccion[i] == "/" || direccion[i] == "," || i == direccion.length - 1) {
      direccionSeparado.push(aux);
      aux = "";
    }
  }
  //Comprobamos si la longitud es correcta para saber si faltan campos por rellenar.
  var longitud = direccionSeparado.length == 7;
  if (longitud == false) {
    alert("Faltan campos por rellenar, compruebe que el formato es correcto.")
  }
  //Todos los tipos de via de correos, para comprobar si el tipo de via es correcto.
  var tipovia_ok = false;
  const tipovia = ["Alameda", "Calle", "Camino", "Carrer", "Carretera", "Glorieta", "Kalea", "Pasaje", "Paseo", "Plaça", "Plaza", "Rambla", "Ronda", "Rúa", "Sector", "Travesía", "Urbanización", "Avenida", "Avinguda", "Barrio", "Calleja", "Camí", "Campo", "Carrera", "Cuesta", "Edificio", "Enparantza", "Estrada", "Jardines", "Jardins", "Parque", "Passeig", "Praza", "Plazuela", "Placeta", "Poblado", "Via", "Travessera", "Passatge", "Bulevar", "Polígono", "Otros"];
  for (let i = 0; i < tipovia.length; i++) {
    //direccionSeparado[0] corresponde al tipo de via introducido por el usuario
    if (direccionSeparado[0] == tipovia[i]) {
      tipovia_ok = true;
    } 
  }
  if(tipovia_ok==false){
    alert("Debes introducir un tipo de via válido")
  }
  // condicion para comprobar el número.
  var numero = direccionSeparado[2];
  var numero_ok = esNumero(numero);
  if (numero_ok == false) {
    alert("El número de la dirección no es correcto.")
  }
console.log(direccionSeparado[5])
  // condicion para el CP: if (cpostal.length == 5 && (cpostal <= 52999 && cpostal >= 1000))
  var cpostal = parseInt(direccionSeparado[4]);
  var cp_ok = cpostal <= 52999 && cpostal >= 1000;
  if (cp_ok == false) {
    alert("El código postal introducido no es válido.")
  }
  // check definitivo
  return direccionok = longitud && tipovia_ok && numero_ok && cp_ok;
}

function checkDni(dni) {
  var letra_dni = "";
  letra_dni = dni[dni.length - 1];
  letra_dni = letra_dni.toUpperCase();
  var numero =
    dni[0] + dni[1] + dni[2] + dni[3] + dni[4] + dni[5] + dni[6] + dni[7];
  var dni_ok = false;
  var numero_ok = true;
  var letra_ok = true;
  //calculamos la diferencia de la división para saber la posición
  var resto = numero % 23;
  var letras = "TRWAGMYFPDXBNJZSQVHLCKET";
  var encontrado = letras.charAt(resto);
  if (dni.length != 9) {
    //si el numero es mayor pues se le comunica al usuario
    alert("El dni introducido no es valido");
  }
  for (let i = 0; i < numero.length; i++) {
    if (numero.charCodeAt(i) < 48 || numero.charCodeAt(i) > 56) {
      numero_ok = false;
    }
  }
  if (numero_ok == false){
   alert("Numero del DNI es incorrecto");
  }
  if (letra_dni.charCodeAt(0) < 65 || letra_dni.charCodeAt(0) > 90) {
    alert("La letra del DNI no es correcta");
    letra_ok = false;
  }
  if (letra_ok && numero_ok && letra_dni == encontrado) {
    dni_ok = true;
  } else {
    alert("El dni insertado " + numero + " con letra " + letra_dni + " es INCORRECTO");
    dni_ok = false;
  }
}

// email
// que tenga un @ que no sea el primer caracter ni el ultimo
// un . despues del @
// puede admitir puntos y guiones bajos
// que el primer caracter no empiece por . ni el ultimo
function checkEmail(email) {
  var emailOK = false;
  var arrobaOk = false;
  var puntodespuesOk = false;
  var carcteresOK = true;
  for (let i = 0; i < email.length; i++) {
    if (!(email.charCodeAt(i) == 46 || email.charCodeAt(i) == 95 || (email.charCodeAt(i) > 63 && email.charCodeAt(i) < 91)
      || (email.charCodeAt(i) > 47 && email.charCodeAt(i) < 58) || (email.charCodeAt(i) > 96 && email.charCodeAt(i) < 123))) {
      carcteresOK = false;
    }
    if (email[i] == "@" && (i != 0 || i < email.length - 3)) {
      arrobaOk = true;
    }
    if (email[i] == "." && arrobaOk && i != email.length - 1) {
      puntodespuesOk = true;
    }
    emailOK = puntodespuesOk && arrobaOk && carcteresOK;
  }
  return emailOK;
}
function separarIntereses(intereses) {
  var interesesSeparado = [];
  var aux = "";
  const interesesEstablecidos = [
    "mercado inmobiliario",
    "bolsa",
    "bienes estatales",
  ];
  for (let i = 0; i < intereses.length; i++) {
    if (intereses[i] != ",") {
      aux += intereses[i];
    }
    if (intereses[i] == "," || i == intereses.length - 1) {
      interesesSeparado.push(aux);
      aux = "";
    }
  }
  var match = [];
  for (let i = 0; i < interesesEstablecidos.length; i++) {
    for (let j = 0; j < interesesSeparado.length; j++) {
      if (interesesSeparado[j] == interesesEstablecidos[i]) {
        match.push(interesesEstablecidos[i]);
      }
    }
  }
  return match;
}

// FUNCION DE LA CONTRASEÑAAAAAAAAAAAAAAAAAAAAA
//Al menos una mayuscula
//AL menos una minuscula
// de 8 a 20 carcteres
//AL menos un caracter especial
//Al menos dos numeros
function checkPass(password) {
  var longitud = password.length >= 8 && password.length <= 20;
  var mayus = false;
  var minus = false;
  var simbolo = false;
  var dosnum = false;
  var cont = 0;

  for (let i = 0; i < password.length; i++) {
    if (esMayuscula(password[i])) {
      mayus = true;
    }
    if (esMinuscula(password[i])) {
      minus = true;
    }
    if (esSimbolo(password[i])) {
      simbolo = true;
    }
    if (esUnNum(password[i])) {
      cont++;
    }
  }
  dosnum = cont >= 2; // --> idéntico --> if (cont >= 2) {dosnum = true}
  return dosnum && mayus && minus && simbolo;
}

function pasaDatos() {
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var direccion = document.getElementById("direccion").value;
  var email = document.getElementById("email").value;
  var email2 = document.getElementById("email2").value;
  var dni = document.getElementById("dni").value;
  var intereses = document.getElementById("intereses").value;
  var password = document.getElementById("password").value;
  if (nombre == null || nombre.length < 3) {
    alert("Es necesario introducir un nombre correcto")
  } else {
   nombre = separarNombre(nombre);
    var nombreok = true;
    nombreok = empiezaMayuscula(nombre[0]) && empiezaMayuscula(nombre[nombre.length-1]);
    if (nombreok == false) {
      alert("El nombre no es correcto")
    }
  }
  if (apellidos == null || apellidos.length < 3) {
    alert("Es necesario introducir un apellidos correcto")
  } else {
    apellidos = separarNombre(apellidos);
    var apellidosok = empiezaMayuscula(apellidos[0]) && empiezaMayuscula(apellidos[apellidos.length - 1]);
    if (apellidosok == false) {
      alert("El o los apellidos no son correctos");
    }
  }
  if(direccion==null){
    alert("Debes introducir una dirección")
  } else {
  var direccionok = checkDireccion(direccion);
  if(direccionok == false){
    alert("La dirección no es correcta");
  }
  }
  if(email == null || email2 == null){
    alert("debes introducir los dos emails")
  } else {
    var email_ok = (checkEmail(email) && checkEmail(email2)) && (email === email2);
    if (checkEmail(email) == false){
      alert("El email no es correcto")
    }
    if (checkEmail(email2) == false){
      alert("El email de confirmación no es correcto")
    }
    if (email !== email2){
      alert("El email de confirmación no coincide con el email.")
    }
  }
  if(dni==null){
    alert("Debes introducir el DNI")
  } else {
    var dniok=checkDni(dni);
  }
  var interesesok = separarIntereses(intereses);
  if(interesesok == false){
    alert("No has introducido bien los intereses, vuelve a intentarlo.")
  }
  if(password == null){
    alert("Debes introducir la contraseña")
  }
  var passwordok = checkPass(password);
  if(nombreok && apellidosok && direccionok && email_ok && dniok && interesesok && passwordok){
  alert("ENHORABUENA!! REGISTRO COMPLETADOOO")
  }
return nombreok && apellidosok && direccionok && email_ok && dniok && interesesok && password
}
