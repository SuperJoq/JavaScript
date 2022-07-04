const  producto = "Monitor 20 pulgadas ";

//.replace para reemplazar
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor Curvo'));

//.slice para cortar
//indica posicion inicial y ultima posicion de caracteres a imprimir
console.log(producto.slice(0, 10));
// Indica posicion desde la cual empezar a imprimir caracteres
console.log(producto.slice(8) );
// si el primer numero es menor al segundo no va a imprimir nada
console.log(producto.slice(2,1) );


// La principal diferencia de subtring vs slice es que 
//modifica los argumentos de menor a mayor si es que son pasados de mayor a menor


console.log(producto.substring(2,1))

const usuario ="Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0))


//Dom Scripting