function datos (e){
    e.preventDefault();
    
    var idTituloMensaje = document.querySelector("#tituloCorreo");
    var idTituloM = document.querySelector("#tituloEmergencia");
    var user =["gato@correo.com","perro@correo.com","tomate@correo.com"];
    var password=["A1234","B1234","C1234"];
    
    var Correo = document.querySelector("#correo").value;
  var Pass = document.querySelector("#password").value;
    
    for(var i=0;i<=2;i++){
       
        if(Correo===user[i]){
    
            if(Pass===password[i]){
                idTituloMensaje.textContent="_BIENVENIDO_";
                idTituloMensaje.style.color="#E5B024";
            }else{
                idTituloMensaje.textContent="Contrase\u00F1a Incorrecta";
                idTituloMensaje.style.color="#EB4C0C"
                idTituloM.innerHTML="Recuperar contrase\u00F1a";
                idTituloM.style.color = "#EB270C";
            }
            
            }
        }
    }


var boton =document.querySelector("#iniciar");

boton.addEventListener("click", datos);
