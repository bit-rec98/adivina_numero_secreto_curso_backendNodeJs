const readlineSync = require('readline-sync');
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return parseInt(readlineSync.question('Ingresa un numero: '));
}

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('Bienvenido a Adiviná el número secreto')
    console.log('Intentá adivinar el número secreto que está entre 1 y 100...\n')

    while(numeroAdivinado !== numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado)
    }
};

juegoAdivinanza();