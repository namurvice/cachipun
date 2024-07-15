function MostrarNombre(){
   let Nombre = document.querySelector('#nombreUsuario').value;
   document.querySelector('#jugador1Nombre').textContent = Nombre;
}

/*const azar = Math.florr(math.random() * 3) + 1;
const juUsuario = document.getElementById('jusuario) esto se puede guardar en una variable*/

function jugadaUsuario(jugada){
   if (jugada==1){
      document.querySelector('#Jusuario').src="img/piedra.png";
   }else if(jugada==2){
      document.querySelector('#Jusuario').src="img/papel.png";
   }else if(jugada==3){
      document.querySelector('#Jusuario').src="img/tijera.png";
   }
}