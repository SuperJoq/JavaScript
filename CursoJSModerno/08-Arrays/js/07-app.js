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

const producto4 ={
    nombre: 'Mouse',
    precio: 30
}


carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
carrito.push(producto4);
//Unshift agrega valores al inicio del arreglo 
carrito.unshift(producto3);

console.table(carrito);


//Elimina un elemento al final del arreglo
carrito.pop();
console.table(carrito);

//Eliminar producto en cualquier posicion del arreglo

console.table()