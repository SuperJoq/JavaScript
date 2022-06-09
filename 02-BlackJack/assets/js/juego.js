//const { object } = require("underscore");
/*
*2C = Two of clubs 
*2D = Two of  Diamonds 
*2H = Two of Hearts
*2S = Two of Spades
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencia del HTML
const btnPedir = document.querySelector("#btnPedir");
const  btnDetener = document.querySelector('#btnDetener');
const btnNewGame = document.querySelector('#btnNuevo');
const puntosHtml = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#Jugador-cartas');
const divComputadoraCartas=document.querySelector('#computadora-cartas');


//Esta funcion crea una nueva baraja
const crearDeck = () =>{

    for(let i = 2;  i<=10;i++) {
        for(let tipo of tipos){
            deck.push(i+tipo);
        }
    }
    for(let especial of especiales){ 
        for(let tipo of tipos){
            deck.push(especial +tipo);
        }

    }
    //console.log(deck);
    deck=_.shuffle(deck);
    return deck;
}

crearDeck();

//CDN  Content delivery network. 
//se obtienen recursos como llibrerias en linea


const pedirCarta = () =>{
    
    const carta = deck.pop();
    if (deck.length ===0){
        throw 'No hay mas cartas en el Deck man'
    }
    return carta;
}

   // pedirCarta();

    const valorCarta = (carta) =>{
        const valor =carta.substring(0, carta.length-1);
        
        return  ( isNaN (valor)) ?
                        (valor === 'A')? 11:10
                         :valor*1;
    
        /*
        if (isNaN(valor)){
            console.log('No es un numero');
            puntos = (valor === 'A' ) ? 11 :10;
        }else{
            console.log('Es un numero');
            puntos = parseInt(valor);
        }
        console.log({puntos});
        */
    }

//valor=valorCarta(pedirCarta());
//console.log('El valor de la carta es '+valor)

// Evitar usar el query selectro en JS  por que cada vez que lo invocamos 
// recorre todo el html linea por linea 
// Lo  recomendable es asignar una variable  con toda la referencia HTML
// E.j const titulo = document.querySelector('.titulo');
// titulo.innerText = 'Hola Mundo''

//Eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    //console.log(carta);
    //console.log(puntosJugador)
    puntosHtml[0].innerText=puntosJugador;
    
    //<img class="carta" src="assets/cartas/7s.png"></img>
    const imgCartaJugador = document.createElement('img');
    imgCartaJugador.src = `assets/cartas/${carta}.png`;
    imgCartaJugador.classList.add('carta');
    divCartasJugador.append(imgCartaJugador)
    if (puntosJugador > 21){
        console.warn('Lo siento perdiste');
        turnoComputadora(puntosJugador);
        btnPedir.disabled = true;
    }else if (puntosJugador === 21){
        console.warn('21 genial');
        btnPedir.disabled = true;
    }

}
);

    
    const turnoComputadora = (puntosMinimos) =>,
        do {
            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta);
            puntosHtml[1].innerText=puntosComputadora;

            //<img class="carta" src="assets/cartas/7s.png"></img>
            const imgCartaComputadora = document.createElement('img');
            imgCartaComputadora.src = `assets/cartas/${carta}.png`;
            imgCartaComputadora.classList.add('carta');
            divComputadoraCartas.append(imgCartaComputadora);

            if (puntosMinimos>21){
                break;
            }

}while(( puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

setTimeout(() => {
    


if(puntosJugador === puntosComputadora ){
    alert('Empate');
}else if(puntosJugador > 21){
    alert('Computadora Gana')
}else if (puntosComputadora > 21){
    alert('Felicidades Ganaste!')
}else{
    alert('Computadora Gana')
}
}, 10);
}

btnDetener.addEventListener ('click' ,()=>{
    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);
}
);

btnNewGame.addEventListener('click',()=>{
    console.clear();
    deck = [];
    deck=crearDeck();
    puntosComputadora =0;
    puntosJugador=0;
    puntosHtml[0].innerText=0;
    puntosHtml[1].innerText=0;
    btnDetener.disabled = false;
    btnPedir.disabled = false;
    divCartasJugador.innerHTML='';
    divComputadoraCartas.innerHTML='';

})
//TODO: Borrar

//Call back es una funcion que se manda como argumento
// Boton nuevo juego debe de hacer:
// Crear un nuevo Deck,
//Limpiar las cartas del juego 
//Habilitar los botones