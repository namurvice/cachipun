//variables globales
let empates = 0;
let ptsUsuario = 0;
let ptsBot = 0;

function MostrarNombre(){
   let Nombre = document.querySelector('#nombreUsuario').value;
   document.querySelector('#jugador1Nombre').textContent = Nombre;
}
/*const azar = Math.florr(math.random() * 3) + 1;
const juUsuario = document.getElementById('jusuario) esto se puede guardar en una variable*/

//fuction para que las imagen del usuario cambie cuando elija piedra, papel o tijeras
function jugadaUsuario(jugada){
   if (jugada==1){
      document.querySelector('#Jusuario').src="img/piedra.png";
   }else if(jugada==2){
      document.querySelector('#Jusuario').src="img/papel.png";
   }else if(jugada==3){
      document.querySelector('#Jusuario').src="img/tijera.png";
   }

   let jb = jugadaBot();
   puntaje(jugada, jb);
}

//function de la jugada del bot
function jugadaBot(){
   let azar = Math.floor(Math.random()*3)+1;
   const bot = document.querySelector('#Jbot');
   if (azar == 1){
      bot.src = 'img/piedra.png';
   }else if(azar == 2){
      bot.src = 'img/papel.png';
   }else if(azar == 3){
      bot.src = 'img/tijera.png';
   }
   return azar;
}
 
//puntaje del juego
function puntaje(u,b){
   
   if((u==1 && b==1) || (u==2 && b==2) || (u==3 && b==3)){
      empates++;
      document.querySelector('#ptsEmpates').textContent = empates;
   }else if((u>b)){
      ptsUsuario++;
      document.querySelector('#ptsJugador1').textContent = ptsUsuario;
   }else if((u<b)){
      ptsBot++;
      document.querySelector('#ptsJugador2').textContent = ptsBot;
   }
}

//boton reiniciar
function reiniciar(){
   
}

