function sumar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").textContent = resultado;
}

function restar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").textContent = resultado;
}

function porcentaje() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    if (num2 === 0) {
        document.getElementById("resultado").textContent = "Error: porcentaje por cero";
    } else {
    var resultado = (num1 * num2) / 100;
    document.getElementById("resultado").textContent = resultado;
   }
}

function dividir() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    if (num2 === 0) {
        document.getElementById("resultado").textContent = "Error: División por cero";
    } else {
        var resultado = num1 / num2;
        document.getElementById("resultado").textContent = resultado;
    }
}

function residuo() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);

        var resultado = num1 % num2;
        document.getElementById("resultado").textContent = resultado;
    
}