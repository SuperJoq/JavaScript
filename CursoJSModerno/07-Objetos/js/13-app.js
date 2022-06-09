/* Tipos de metodos para acceder a objetos uno llamado Keys otro llamado values y otro llamado entries
*/

const producto = {
    nombre : "MOnitor 20 pulgadas",
    precio: 300,
    disponible:true
}

console.log (Object.keys(producto)); //retorna las llaves
console.log(Object.values(producto));//retorna los valores
console.log(Object.entries(producto));// retorna ;;aves y valores