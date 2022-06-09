//
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log("El producto: ${this.nombre} tiene un precio de: ${this.precio}")
    }
}

function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}


const producto2 = new Producto('MOnitor 24 Pulgadas',500);
console.log(producto2);


const producto3 = new Producto('Television',100);
console.log(producto3)