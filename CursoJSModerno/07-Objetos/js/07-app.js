const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}


// Una variable con const una ves definida no puede reasignarse su valor

producto.disponible = false;
delete producto.precio;

console.log(producto);
