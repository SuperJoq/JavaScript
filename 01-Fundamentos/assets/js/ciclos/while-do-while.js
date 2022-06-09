 const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
 let i = 0;
 let j=0;
//  while(i < carros.length){
//      console.log(carros[i])
//     i++;
//  }
//Son consideradas condiciones falsas
 // undefined
 // null
 // false
console.warn('While');
 while(carros[i]){
     if (i === 1){
         //break;
         i++;
         continue;
     }
    console.log(carros[i]);
   i++;
}

console.warn('Do while');

 do {
     console.log(carros[j]);
     j++;
 }while ( carros[j] );