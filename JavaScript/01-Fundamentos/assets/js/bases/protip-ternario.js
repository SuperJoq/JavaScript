const elMayor = (a,b) => (a>b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 Dolares' : '10 Dòlares';

console.log(elMayor(20, 15));
console.log(tieneMembresia(false));


const amigo = true;
const amigoArrr =[
    'Peter',
    'tony',
    'Dr. Strange',
    amigo ? 'Thor': 'Loki',
    (()=> 'Nick Fury') ()
];

console.log(amigoArrr);


const nota = 100;
const grado = nota >= 95 ? 'A+' :
              nota >= 95 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 75 ? 'C+' :
              nota >= 75 ? 'C' : 'F';

console.log({nota, grado});