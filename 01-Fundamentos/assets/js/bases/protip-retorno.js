/*
function crearPersona (nombre, apellido){
    return{nombre,apellido}     
}
*/

const crearPersona = (nombre, apellido) => ({nombre,apellido});

const persona = crearPersona('Joaquin', 'Hidalgo');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}
// ... args Esto hace referencia a un parametro Rest el cual le dice que todos los argumentos que sean enviados creara un arreglo para cada un o de ellos
// Dos consideraciones 1: despues del parametro rest no pueden colocarse mas parametros e.g (...args, name ) esto marcara un error, 
//Si se necesitara enviar un argumento antes del parametro res se debera expresar de la siguiente forma e.g (edad, ...args) edad va a tener su  propio valor independiente
// El primer argumento sera almacenado en edad y todos los demas argumentos seran un arreglo almacenado en ... args
const imprimeArgumentos2=( edad, ...args) => {
    //console.log({edad, args});
    return args;
}

//const = imprimeArgumentos2(10, true, false, 'Joaquin', 'Hola');
//console.log(argumentos);
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Joaquin', 'Hola');
console.log({ casado, vivo, nombre, saludo });

// PAra cambiar el nombre de la variable apellido  se agregan dos puntos : nuevoApellido (nuevo nombre de la nueva variable )
const {apellido:nuevoApellido} = crearPersona('Joaquin', 'Hidalgo')
console.log({nuevoApellido})

const tony = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    trajes:['Mark', 'Mark V', 'Hulkbuster'],
};
// No es una buena practica definir funciones debajo del código para fines de aprendizaje en este ejemplo si lo haremos
// imprimePropiedades es una funcion de flecha que va a recibir el argumento de personaje dentro de esta funcion requerirremos hacer referenci a cada una de las propiedades que estan en el objeto Tony 
/*
const imprimePropiedades = (personaje) => {
    console.log(personaje.nombre);
    console.log(personaje.codeName);
    console.log(personaje.vivo)
    console.log(personaje.trajes)
}
*/

const imprimePropiedades = ({nombre, codeName, vivo, edad=15, trajes})=>{
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);
//Destructuracion de Argumentos :O e