	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	

	// On renvoie un entier aléatoire entre une valeur min (incluse)
	// et une valeur max (incluse).
	// Attention : si on utilisait Math.round(), on aurait une distribution
	// non uniforme !
	function getRandomIntInclusive(min, max) {
	  return Math.floor(Math.random() * (max - min +1)) + min;
	}


	var portals = [], delta = 50, nbPortails = 8;
	for (i = 0; i <= nbPortails; i++) {
	
	   var flagOK = false;
	   while(!flagOK){
	   		var randomX     = getRandomIntInclusive(5, 495), randomY = getRandomIntInclusive(5, 495);
	       	flagOK = true;
	  	
	       	for(var j=0,len = portals.length;j<len;j++){
	           	if((randomX >= portals[j][0] - delta &&  randomX <= portals[j][0] + delta) && (randomY >= portals[j][1] - delta &&  randomY <= portals[j][1] + delta)){
	            	flagOK = false;
	           	}
	       	}
	   }
	   
	   portals[i]     = [randomX, randomY];

	   ctx.beginPath();
	   ctx.fillStyle = "rgba(0, 255, 0, 1)";
	   ctx.arc(portals[i][0],portals[i][1],5,0,2*Math.PI);
	   ctx.fill();
	}
	


	function drawing(){
		var coord = new Array(),
			nbClics = 0;

		$("#canvas").click(function(event){
			if(nbClics == 3) {
				coord = new Array(),
				nbClics = 0;
			}

			var XYrect 	= canvas.getBoundingClientRect(),
				x 		= Math.round(event.clientX - XYrect.left),
				y 		= Math.round(event.clientY - XYrect.top);;

			coord[nbClics] = new Array(x, y);

			if( nbClics == 2 ) {

				ctx.beginPath();
				ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
				ctx.moveTo(coord[0][0], coord[0][1]);			
				ctx.lineTo(coord[1][0], coord[1][1]);
			    ctx.lineTo(coord[2][0], coord[2][1]);
			    ctx.closePath();
			    ctx.fill();

				ctx.beginPath();
				ctx.strokeStyle = "rgba(0, 255, 0, 1)";
				ctx.moveTo(coord[0][0], coord[0][1]);			
				ctx.lineTo(coord[1][0], coord[1][1]);
			    ctx.lineTo(coord[2][0], coord[2][1]);
			    ctx.closePath();
			    ctx.stroke();
			}
			
			nbClics++;
		});



	}

drawing();
		
	


