function empiezaMayuscula(palabra) {
    return palabra[0] === palabra[0].toUpperCase();
  }
  function separarNombre(palabra) {
    var palabraSeparado = [];
    var aux = "";
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] != " ") {
        aux += palabra[i];
      }
      if (palabra[i] == " " || i == palabra.length - 1) {
        palabraSeparado.push(aux);
        aux = "";
      }
    }
    return palabraSeparado;
  }
  
  function esMayuscula(letra) {
    return letra === letra.toUpperCase();
  }
  function esMinuscula(letra) {
    return letra === letra.toLowerCase();
  }
  // ascii = del 32 al 47, del 58 al 64, 91 a 96, del 123 al 254;
  function esSimbolo(letra) {
    return (
      (letra.charCodeAt() >= 32 && letra.charCodeAt() <= 47) ||
      (letra.charCodeAt() >= 58 && letra.charCodeAt() <= 64) ||
      (letra.charCodeAt() >= 91 && letra.charCodeAt() <= 96) ||
      (letra.charCodeAt() >= 123 && letra.charCodeAt() <= 254)
    );
  }
  function esUnNum(num) {
    return num.charCodeAt() >= 48 && num.charCodeAt() <= 57;
  }
  
  function soloLetras(palabra) {
    var sololetrasOK = true;
    for (let i = 0; i < palabra.length; i++) {
      if (
        !(
          (palabra.charCodeAt(i) > 64 && palabra.charCodeAt(i) < 91) || // Si NO Es una letra mayúscula o minúscula --> falso
          (palabra.charCodeAt(i) > 96 && palabra.charCodeAt(i) < 123)
        )
      ) {
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
  
  function checkDireccion(direccion) {
    var direccionSeparado = [];
    var aux = "";
  
    for (let i = 0; i < direccion.length; i++) {
      if (direccion[i] != "," && direccion[i] != "/") {
        aux += direccion[i];
      }
      if (
        direccion[i] == "/" ||
        direccion[i] == "," ||
        i == direccion.length - 1
      ) {
        direccionSeparado.push(aux);
        aux = "";
      }
    }
  
    // condicion para el CP: if (cpostal.length == 5 && (cpostal <= 52999 && cpostal >= 1000))
    var cpostal = parseInt(direccionSeparado[5]);
    var cp_ok = cpostal <= 52999 && cpostal >= 1000;
    // check calle
  }
  
  function checkDni(dni) {
    var letra_dni = "";
    letra_dni = dni[dni.length - 1];
    console.log(letra_dni);
    letra_dni = letra_dni.toUpperCase();
    console.log(letra_dni);
    var numero =
      dni[0] + dni[1] + dni[2] + dni[3] + dni[4] + dni[5] + dni[6] + dni[7];
    var dni_ok = false;
    var numero_ok = true;
    var letra_ok = true;
    //calculamos la diferencia de la división para saber la posición
    var resto = numero % 23;
    var letras = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
      "T",
    ];
    letras = letras.join("");
    var encontrado = letras.charAt(resto);
    if (dni.length != 9) {
      //si el numero es mayor pues se le comunica al usuario
      alert("El dni introducido no es valido");
    }
    for (let i = 0; i < numero.length; i++) {
      if (numero.charCodeAt(i) < 48 || numero.charCodeAt(i) > 56) {
        alert("Numero incorrecto");
        numero_ok = false;
      }
    }
    if (letra_dni.charCodeAt(0) < 65 || letra_dni.charCodeAt(0) > 90) {
      alert("La letra del DNI no es correcta");
      letra_ok = false;
    }
    if (letra_ok && numero_ok && letra_dni == encontrado) {
      alert(
        "El dni insertado " + numero + " con letra " + letra_dni + " es CORRECTO"
      );
      dni_ok = true;
    } else {
      alert(
        "El dni insertado " +
          numero +
          " con letra " +
          letra_dni +
          " es INCORRECTO"
      );
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
      if (
        !(
          email.charCodeAt(i) == 46 ||
          email.charCodeAt(i) == 95 ||
          (email.charCodeAt(i) > 63 && email.charCodeAt(i) < 91) ||
          (email.charCodeAt(i) > 47 && email.charCodeAt(i) < 58) ||
          (email.charCodeAt(i) > 96 && email.charCodeAt(i) < 123)
        )
      ) {
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
    nombre = separarNombre(nombre);
    var nombreok = empiezaMayuscula(
      nombre[0] && empiezaMayuscula(nombre[nombre.length - 1])
    );
    apellidos = separarDireccion(apellidos);
    var apellidosok = empiezaMayuscula(
      apellidos[0] && empiezaMayuscula(apellidos[apellidos.length - 1])
    );
    var direccionok = che;
  }
  