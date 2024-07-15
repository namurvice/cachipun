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
   jugadaBot();
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
}

