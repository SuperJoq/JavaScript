const regresaTrue = () =>{
    console.log('Regresa True')
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa False')
    return false;
}

console.warn('Not a la negacion');
console.log(true);// true
console.log(!true);// false
console.log(!false);//true

console.log(!regresaFalse());// true

console.warn('And');//'Solo va a regresar si verdadero si todos los valores son verdaderos'

console.log(true && true);// true
console.log(true && false);// false
console.log(true && !false);// false


console.log('==========');

// Solo regresara false una caracteristica del operdor && es que evalua la primera instruccion ya regreso 
//falso ya continua evaluando las siguientes instrucciones
console.log(regresaFalse() && regresaTrue());//false
console.log(regresaTrue() && regresaFalse());//false

console.log('====&&====');
regresaFalse () && regresatrue();

console.log('4 condiciones', true && true && true && false);

console.warn('OR');

console.log(true || false);
console.log(false || false);


console.log(regresaTrue() || regresaFalse());

console.log('4 condiciones OR', true || true || true || false);


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

// En teoria con estas expresiones se termina el ultimo valor verdadero

const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
//El programa que el valor sea diferente de Falso, Null o undefined  entonces va a tomar ese valor
const a3 = soyFalse || 'Ya no soy falso'
console.log({a1, a2, a3})