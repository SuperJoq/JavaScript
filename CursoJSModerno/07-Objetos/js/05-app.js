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

//console.log(producto);
//console.timeLog(producto.informacion)
console.log(producto.informacion.fabricacion.pais)