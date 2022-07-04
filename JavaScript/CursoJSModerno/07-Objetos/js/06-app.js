const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion:{
        medidas:{
            peso: '1kg',
            medida: '1m',
        },
        fabricacion:{
            pais: 'Japon',
        },
    },
}
//asigna un valor al objeto y crea la variable
const {nombre, informacion, informacion:{fabricacion}} = producto;

console.log(nombre);
console.log(informacion)
console.log(fabricacion);