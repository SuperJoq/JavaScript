let juegos = ['Celda','Mario','Metroid','Chrono']
console.log('Largo:', juegos.length);


let primero = juegos[2 - 2];
let ultimo = juegos[juegos.length -1]

console.log({primero,ultimo});

//Recorre e imprime todos los elementos contenidos en el arreglo
juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr})
});

//Devuelve un arreglo con un elemento agregado al final del arreglo 
let nuevaLongitud =juegos.push('F-Zero');
console.log({nuevaLongitud,juegos});

//Devuelve un arreglo con un elemento agregado  al inicio del arreglo 

nuevaLongitud =juegos.unshift('Fire Emblem');
console.log({nuevaLongitud,juegos});

//Returns an array with the last element deleted 

let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

// Returns an array with the specified elements delated 
console.log({juegos})
console.log(juegos)
let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log ({juegosBorrados, juegos})
 
let metroidIndex = juegos.indexOf('Metroid');// CaseSensitive
console.log({metroidIndex});// si regresa -1 significa que no lo encontró