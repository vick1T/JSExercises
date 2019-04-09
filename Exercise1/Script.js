  

function validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      return false;
    else
    	return true;
    
  }

function  myFunction(){
	var m= document.getElementById("num").value;
	if(validarSiNumero(m)){

		var i;
		var text="";
		var n=m;
		
		for(n=0;n<m;n++){
			for(i=0;i<=n;i++){

				text+="0";
				
			}
			text+= "<br>";
		}

			document.getElementById("resp").innerHTML=text;
		}else{
			alert("No se ha introducido nungún numero");
		}
}

