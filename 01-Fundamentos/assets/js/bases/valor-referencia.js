let a = 10;
let b = a;
// Todos los primitivos se pasan por valor

console.log({a,b});

// Y todos los objetos son pasados por referencia
let juan = {nombre: 'juan'}
let ana = juan
ana.nombre = 'Ana';


console.log({juan, ana})

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
/* Lo que hicimos aqui es mandar a peter este objeto a la funcion y este peter esta pasando por referencia
este objeto (let peter ) a la funcion y peter de cambiaNombre esta pasando por referencia a la funcion  entonces 
cualquier modificacion que se le haga al argumento const cambiaNombre = (persona)
operador spreed let = ana {... juan}
cuando es colocado en onst cambiaNombre = (...persona) => {
es un parametro rest, y quiere decir una todos los argumentos en una sola variable y transformalo  como un arreglo
cuando lo utilizamos en cualquier otro lugar significa let = ana {... juan} separa los elementos la ventaja de hacerlo de esta 
manera es que rompe la relacion de adaptar el objeto como referencia y asignarle unvalor 

    */

console.log({peter, tony});

// Arreglos 
const frutas = ['Manzana', 'Peras','Piña'];


console.time('Slice');
const otrasFrutas = frutas.slice();
console.timeEnd('Slice');

console.time('Spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('Spread');
otrasFrutas.push('durazno');




console.table({frutas, otrasFrutas});