//"Use Strict" metodos para objectos

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}


Object.seal( producto );
producto.disponible = false;
console.log(producto);
delete producto.precio;

console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

//Seal allows modify the values of the object  meanwhile frozen does not allow modify.