
//Agregar elementos a un arreglo
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

carrito.unshift(producto3)


//. push para gregar al final de un arreglo
carrito.push(producto)
carrito.push(producto2)

console.table(carrito);