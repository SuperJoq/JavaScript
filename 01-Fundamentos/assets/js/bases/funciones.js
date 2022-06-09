//funciones the functions help us to centralize the logic form a proceure we can use many times
//Las fucniones nos sirven para centralizar la logica de un procedimiento que nostros podemos reutiliazr 
//Funcion Sencilla / Retornos de Valor  cada funcion JavaScript si no tiene la funcion o mejor dicho la palabra reservada return no regresa nada
//Cuando no esta definida un return en una funcion por defecto devolvera undefined las impresiones en consola NO son el return de una funcion
function saludar( nombre ) {
    /*
    console.log(arguments)
    console.log('Hola ' + nombre);
    */
    // UNa ves ejecutada la linea retrun el programa se sale de la funcion
    return [1, 2, 3, 4];
    //Esta linea no se ejecuta 
    console.log('Soy un codigo que está depues del return');    
}
//Funcion anonima, como tal no tiene nombre pero al asignarselo a una constante  esta funcion va a responder al nombre de saludar, el beneficio de ue se asigne a una constante 
// no hay manera de el este nombre pueda ser reutilizado en la aplicacion es como una medida de seguridad

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre)
}

// Las funciones de flecha son un poco mas eficientes que las funciones tradicionales y también evitan ciertos problemas con un objeto especial llamado diz que veremos más adelante.
// Las funciones de flecha o Lambda es algo nuevo que se introdujo en el ECMAScript 6  o en el JavaScript del 2015 básicamente para crear esta misma funcion
saludarFlecha = () =>{
console.log('Hola Flecha')
};

saludarFlecha2 = ( nombre ) =>{
    console.log('Hola' + nombre )
    };

function sumar (a, b){
    return a+b;
}

console.log(sumar(1,2))

/*
const sumarFlecha = (a,b) =>{
    return a+b;
};
Es lo mismo que:
*/
const sumarFlecha = (a,b) => a+b;
console.log('sumaFlecha', sumarFlecha(2,2))
/*
function getAleatorio(){
    return Math.random();
}
console.log('Numero Aleatirio', getAleatorio())
Es lo mismo que:
*/
const getAleatorio = () => Math.random();
console.log('Numero Aleatorio', getAleatorio())



const retornoSaludar = saludar('Fernado', 40, true, 'Costa Rica');// 1
console.log(retornoSaludar[0], retornoSaludar[1]);



//saludar2('JoaquinF2');
saludarFlecha();
saludarFlecha('Melisa');
saludar('Areli');