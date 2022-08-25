/*Crear dos calculadoras con HTML y CSS y crear con JS el Objeto Calculadora
utilizando el patrón function factory. El objeto calculadora debe heredar a dos objetos
calculadoraBasica y CalculadoraCientífica, que van a heredar sus funciones básicas de 
calculadora. Luego para calculadora científica agregar las funciones para potenciación
raíz cuadrada y valor absoluto.

Integrantes:
Angel Diego Hidalgo Cartagena HC18040
Edwin Daniel Lizama Garcia LG20012
*/


var Calculadora = (function () {
    var Calculadora = function () {
        this.resultado = 0;
    }
    Calculadora.prototype.limpiar = function () {  //limpiar el resultado
        document.getElementById('result').innerHTML = "";
    }
    Calculadora.prototype.calcular = function () { //calcular el resultado
        var result = eval(document.calculadora.resultado.value);
        console.log(result);
        document.getElementById('result').value = result;
    }
    return Calculadora;
})();

//Basica 
var CalculadoraBasica = (function () {
    var CalculadoraBasica = function () {
        this.resultado = 0;
    }
    CalculadoraBasica.prototype = new Calculadora();
    return CalculadoraBasica;
})();


//CIENTIFICA
var CalculadoraCientifica = (function () {
    var CalculadoraCientifica = function () {
        this.resultado = 0;
    }
    CalculadoraCientifica.prototype = new Calculadora();

    CalculadoraCientifica.prototype.potencia = function () {
        document.getElementById('result').value += "Math.pow(";
    }

    CalculadoraCientifica.prototype.raiz = function () {
        document.getElementById('result').value += "Math.sqrt(";
    }

    CalculadoraCientifica.prototype.valorAbsoluto = function () {
        document.getElementById('result').value += "Math.abs(";
    }
    return CalculadoraCientifica;

})();

var calculadoraBasica = new Calculadora();
var calculadoraCientifica = new Calculadora();

let i = document.getElementById('igual');
i.addEventListener('click', calculadoraBasica.calcular);
let c = document.getElementById('clear');

let cif = document.getElementById('igual');
cif.addEventListener('click', CalculadoraCientifica.calcular);

let raiz = document.getElementById('raiz');
raiz.addEventListener('click', CalculadoraCientifica.raiz);

let potencia = document.getElementById('potencia');
potencia.addEventListener('click', CalculadoraCientifica.potencia);

let valorAbsoluto = document.getElementById('valor');
valorAbsoluto.addEventListener('click', CalculadoraCientifica.valorAbsoluto);


