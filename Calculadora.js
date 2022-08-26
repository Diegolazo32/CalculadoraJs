/*Crear dos calculadoras con HTML y CSS y crear con JS el Objeto Calculadora
utilizando el patrón function factory. El objeto calculadora debe heredar a dos objetos
calculadoraBasica y CalculadoraCientífica, que van a heredar sus funciones básicas de 
calculadora. Luego para calculadora científica agregar las funciones para potenciación
raíz cuadrada y valor absoluto.

Integrantes:
Angel Diego Hidalgo Cartagena HC18040
Edwin Daniel Lizama Garcia LG20012
*/


var Calculadora = name => {

    const calcular= () =>
    {
        let result= eval(document.getElementById("result").value);
        document.getElementById('result').value=result;
    }

    const limpiar = () =>
    {
        document.getElementById("result").value="";
    }

    return {calcular, limpiar}

}

//Basica 
const basica = (name) =>
{
    const herencia = Calculadora(name);
    return Object.assign({}, herencia)

};


//CIENTIFICA
const cientifica = (name) =>
{
    const herencia = Calculadora(name);

    const potencia =  () => {
        document.getElementById('result').value += 'Math.pow(';
    }

    const raiz =  () => {
        document.getElementById('result').value += "Math.sqrt(";
    }

    const valorAbsoluto =  () => {
        document.getElementById('result').value += "Math.abs(";
    }
    return Object.assign({}, herencia, {potencia, raiz, valorAbsoluto});

}

const basic = basica("Basica");
const science = cientifica("Cientifica");

let i = document.getElementById('igual');
i.addEventListener('click', basic.calcular);

let c = document.getElementById('clear');

let cif = document.getElementById('igual');
cif.addEventListener('click', science.calcular);

let raiz = document.getElementById('raiz');
raiz.addEventListener('click', science.raiz);

let pot = document.getElementById("potencia");
pot.addEventListener('click', science.potencia);

let valorAbsoluto = document.getElementById('valor');
valorAbsoluto.addEventListener('click', science.valorAbsoluto);


