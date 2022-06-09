//Agregar elementos a un arreglo
//Agregar elementos con spread Operators
//Crear un nuevo arreglo con spread operator 
/*const meses = ['Enero', 'Febrero','Marzo']


meses.push('Abril');
meses.push('Mayo');

console.table(meses);

*/

const carrito = [];

//Definir un producto

const producto ={
    nombre:"Monitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 ={
    nombre: 'Teclado',
    precio: 50
}

//Agregar un elemento al principio del arreglo

let resultado;
resultado =[... carrito, producto];
resultado =[... carrito, producto2];
resultado =[... carrito, producto3];

//. push para gregar al final de un arreglo

console.table(resultado);
console.table(carrito);
