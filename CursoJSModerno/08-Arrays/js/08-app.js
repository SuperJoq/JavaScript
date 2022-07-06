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
    precio: 300,
    disponible: true
}

const { disponible } = producto;
console.log(disponible);
const numeros = [10,20,30,40,50];
const [primero, segundo, ...tercero] = numeros;

console.log(tercero);

//Destructuring
