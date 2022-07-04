const personaje = {
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: false,
    edad: 40,
    coords:{
        lat:34.034,
        lng:-118.70
    },
    trajes:['Mark', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu California',
    },

    'ultima-pelicula': 'Infiniti War'

};

console.log('Objeto:',personaje)
console.log('Nombre:',personaje.nombre)
console.log('Nombre:',personaje['nombre'])
console.log('Edad:',personaje.edad)
console.log('lat:',personaje.coords.lat)
console.log('Numero de trajes:',personaje.trajes.length)
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length-1])
console.log('Ubicacion', personaje.direccion.ubicacion)
console.log('Vivo:',personaje['vivo'])
const x = 'vivo';

console.log('Vivo:', personaje[x])
console.log('Ultima pelicula', personaje["ultima-pelicula"]);

//Mas detalles
/*
personaje.edad = null
console.log(personaje)
*/

delete personaje.edad
console.log(personaje)
personaje.casado = true;


//Convertir un objeto a un arreglo

const entriesPares = Object.entries(personaje);

console.log(entriesPares);
console.log('El ultimo traje es ', entriesPares[4][1][2])

//personaje=true;
console.log(personaje);
Object.freeze(personaje);

personaje.dinero = 1000000;
casado=false
personaje.direccion.ubicacion = 'CostaRica'
console.log(personaje)

const propiedades = Object.getOwnPropertyNames (personaje);
const valores = Object.values(personaje);


console.log(propiedades, valores)
//