let a = 10;

if (a < 10){//undefined, null, asignacion
    console.log('A es menor que 10');
}else{
    console.log('A es mayor o igual que 10') 
}
console.log('Fin del programa');

/*
New nos permite crear una  nueva instancia de un objeto date, la palabra new nos sirve para crear 
nuevas instancias o nuevos objetos

*/
const hoy = new Date(); 
console.log(hoy)

let dia = hoy.getDay();
console.log({dia})

if (dia === 0){
    console.log('Hoy es domingo')
}else if (dia === 1){
console.log('Es Lunes')

    //console.log('No es domingo')
   /* if(dia === 1){
        console.log('Es Lunes')
    }else{
        console.log('No es lunes ni domingo')
    }
    */
}else if (dia == 2){
    console.log('Es martes')
}else{
    console.log('No es Lune, Martes, o Domingo')
}
// = asigna, == Evalua valores, === Evalua Valores y tipado sean identicos 
// Sin usar if else, switch solo objetos imprimir el dia de la semana actual pista


console.log(5 == '5')
console.log(5 === '5')


let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
console.log(diasDeLaSemana[dia]);
/*
let objWeekDay = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado', 
} 
*/

let objWeekDay = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miercoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sábado - 6', 
} 

console.log(objWeekDay[dia]());