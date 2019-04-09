
function tarjetas(){
	var noTarj=Math.floor(Math.random() * (999 - 1)) + 1;
	alert(noTarj);
	var div=document.createElement("div");
	var imagen=document.createElement("img");
	var botonCerrar=document.createElement("button");


	div.id=noTarj;
	div.appendChild(botonCerrar);
	div.appendChild(imagen);
	div.className="cartasgen";

	imagen.className="img";
	
	
	imagen.src="http://lorempixel.com/400/"+noTarj;

	
 	botonCerrar.addEventListener('click', function(){
        var tar = document.getElementById(noTarj);
         tar.parentNode.removeChild(tar);
    }, false)

	var tar=document.getElementById("tarjetas");
	tar.appendChild(div);
}

