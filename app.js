let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles.');
    } else {
        //Si el número secreto está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

















/*
//DESAFIOS A
//1
function saludo(){
    console.log('Hola, mundo!');
}

saludo();

//2
function bienvenida(nombre) {
    console.log(`Hola, ${nombre}`);
}

bienvenida('Luisa');

//3
function mostrarNumero(numero){
    return parseInt(numero)*2;
}

let numeroDoble = mostrarNumero(numero);
console.log(numeroDoble);

//4
function calcularPromedio(a,b,c){
    return (a+b+c)/3;
}

let promedio = calcularPromedio(5,8,10);
console.log(promedio);

//5
function evaluarNumero(a,b) {
    if (a>b){
        return a;
    } else {
        return b;
    }
}

let numeroMayor = evaluarNumero(4,9);
console.log(numeroMayor);

//6
function numeroMultiplicado(a){
    return (a**2);
}

let resultado = numeroMultiplicado(7);
console.log(resultado);



//DESAFIOS B
//1
function masaCorporal(altura,peso){
    let imc = peso/altura*altura;
    return imc;
}
//2
function factorial(n){
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1); 
    }
}

//3
function cambioMoneda(dolar){
    let precioDolarSoles = 3.85
    let precioReales = 4.80
}

//4
function salaRectangular(altura, anchura){
    let area = altura * anchura;
    let perimetro = (altura + anchura)*2
    console.log('Área:'+area)
    console.log('Perimetro:'+perimetro)
}

//5
function areaPerimetroRectangular(radio){
    let pi = 3.14;
    let area = pi*(radio**2);
    let perimetro = 2*pi*radio;
    console.log(`Area: ${area}`)
    console.log(`Perimetro: ${perimetro}`)
}


//6
function tablaDeMultiplicar(numero) {
    for(let i= 1; i<=100; i++){
        console.log(`${numero}*${i} = ${numero * i}`)
    }
}
//Generar la tabla de multiplicar del 13
tablaDeMultiplicar(13);


//DESAFIOS C
//1
let listaGenerica = [];

//2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4
function todosLosLenguajes () {
    return lenguajesDeProgramacion;
}

console.log(todosLosLenguajes());

//5
function mostrarLenguajesInverso () {
    for (let i = lenguajesDeProgramacion.length - 1; i>=0; i--) {
        console.log(lenguajesDeProgramacion[i]);
    }
}

//6
let numerosUsuario = [10, 20, 30, 40, 50];

function calcularPromedio () {
    let suma = 0;
    for (let i = 0; i < numerosUsuario.length; i++) {
        suma += numerosUsuario[i];  
    }
    return suma / numerosUsuario.length;
}

console.log(calcularPromedio ());

//7
let numeroGrande = 60;
let numeroPequeño = 20;


//8
let numeros = [5, 10, 15, 20];

function calcularSuma () {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];  
    }
    return suma;
}

console.log(calcularSuma());

//11
let listaDeNumeros = [4, 7, 13, 18, 26, 33, 42];
function numerosAlCuadrado() {
    let nuevaListaDeNumeros = [];
    for (let i = 0; i < listaDeNumeros.length; i++) {
        nuevaListaDeNumeros.push(listaDeNumeros[i] ** 2);
    }
    return nuevaListaDeNumeros;
}
*/