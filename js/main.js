	var canvas 		= document.getElementById("canvas"),
	 	ctx 		= canvas.getContext("2d"),
	 	portals 	= [], 
		delta 		= 50, 
		nbPortails 	= 5;

	
	function getRandomIntInclusive(min, max) {
	  return Math.floor(Math.random() * (max - min +1)) + min;
	}


	for (i = 0; i <= nbPortails; i++) {	
	   var flagOK = false;

	   while(!flagOK){
	   		var randomX = getRandomIntInclusive(5, 495), 
	   			randomY = getRandomIntInclusive(5, 495),
	       		flagOK 	= true;
	  	
	       	for(var j=0,len = portals.length;j<len;j++){
	           	if((randomX >= portals[j][0] - delta &&  randomX <= portals[j][0] + delta) && (randomY >= portals[j][1] - delta &&  randomY <= portals[j][1] + delta)){
	            	flagOK = false;
	           	}
	       	}
	   }
	   
	   portals[i] = [randomX, randomY];

	   ctx.beginPath();
	   ctx.fillStyle = "rgba(0, 255, 0, 1)";
	   ctx.arc(portals[i][0],portals[i][1],5,0,2*Math.PI);
	   ctx.fill();
	}
	


	function drawing(){

		var coord 		= new Array(),
			newCoord 	= new Array(),
			deltaCoord	= 10,
			nbClics 	= 0,
			saveField 	= new Array(nbField),
			nbField		= 0;

		$("#canvas").click(function(event){
			if(nbClics == 3) {
				coord 		= new Array(),
				newCoord 	= new Array(),
				nbClics 	= 0;
			}

			var XYrect 	= canvas.getBoundingClientRect(),
				x 		= Math.round(event.clientX - XYrect.left),
				y 		= Math.round(event.clientY - XYrect.top);

			coord[nbClics] = new Array(x, y);
			   		


		  	for(var j=0,len = portals.length;j<len;j++){
	           	if((coord[nbClics][0] >= portals[j][0] - deltaCoord && coord[nbClics][0] <= portals[j][0] + deltaCoord) && (coord[nbClics][1] >= portals[j][1] - deltaCoord &&  coord[nbClics][1] <= portals[j][1] + deltaCoord)){
	            	newCoord[nbClics] = new Array(portals[j][0], portals[j][1]);
	            	var failClic = false;
	           	}
	       	}
	       	
			  
			//console.log(newCoord);

			if( nbClics == 2 ) {

				saveField[nbField] = new Array("a","b","c");

				saveField[nbField]["a"] = new Array(newCoord[0][0], newCoord[0][1]);
				saveField[nbField]["b"] = new Array(newCoord[1][0], newCoord[1][1]);
				saveField[nbField]["c"] = new Array(newCoord[2][0], newCoord[2][1]);

				ctx.beginPath();
				ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
				ctx.moveTo(newCoord[0][0], newCoord[0][1]);			
				ctx.lineTo(newCoord[1][0], newCoord[1][1]);
			    ctx.lineTo(newCoord[2][0], newCoord[2][1]);
			    ctx.closePath();
			    ctx.fill();

				ctx.beginPath();
				ctx.strokeStyle = "rgba(0, 255, 0, 1)";
				ctx.moveTo(newCoord[0][0], newCoord[0][1]);			
				ctx.lineTo(newCoord[1][0], newCoord[1][1]);
			    ctx.lineTo(newCoord[2][0], newCoord[2][1]);
			    ctx.closePath();
			    ctx.stroke();

			    nbField++;
			}
			if (failClic == false) {
				nbClics++;
			}


		});



	}

drawing();
		
	


