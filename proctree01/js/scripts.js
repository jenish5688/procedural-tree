var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var deg_to_rad = Math.PI/180;
var counter = 0;
ctx.lineCap = "round";

function drawLine(x,y,x1,y1,depth){
	
		ctx.beginPath();
		ctx.lineWidth = (depth+2)/3;
		ctx.moveTo(x,y);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	
	counter++;
	
	
}

function drawTree(x,y,angle,depth){
	
	var x1 = x + Math.cos(angle*deg_to_rad)*  depth/Math.PI*(15 / depth + (Math.random()*20)/(depth+3) + 15/depth )  ;
	var y1 = y + Math.sin(angle*deg_to_rad)* depth/Math.PI*  (15 / depth + (Math.random()*20)/(depth+3) + 15/depth )  ;
	
	if(depth != 0 && counter != 1500){
		drawLine(x,y,x1,y1,depth);

			/*ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x1,y1);
		ctx.stroke();
		
			ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x1,y1);
		ctx.stroke();*/
		drawTree(x1,y1,angle+(10*-Math.random()+5),depth-1);
		if(Math.ceil(Math.random()*( Math.cbrt( depth)+3))===1){
			drawTree(x1,y1,angle +(40)/Math.sqrt( Math.sqrt(Math.sqrt( depth))),depth-Math.floor(1+Math.random()*( depth)));
		
		}
		if(Math.ceil(Math.random()*( Math.cbrt(depth)+3))===1){
			
			drawTree(x1,y1,angle +(-40)/Math.sqrt(Math.sqrt( Math.sqrt( depth))),depth-Math.floor(1+Math.random()*( depth)));
		}
		
	//	if(Math.ceil(Math.random()*3)===1){
	//		drawTree(x1,y1,angle +(-80*Math.random()+ 40)/Math.sqrt( Math.sqrt(Math.sqrt( depth))),depth-Math.floor(1+Math.random()*depth));
	//	}
//		else{
//			drawTree(x1,y1,angle -10,depth-1);
//		}
//		
//		if(Math.ceil(Math.random()*3)===1){
//			drawTree(x1,y1,angle -10,depth-1);
//		}
//		else{
//			drawTree(x1,y1,angle +10,depth-1);
//		}
//		
	}
	
}

drawTree(800,1200,-90,80);
//drawLine(200,300,50,60);

document.write(counter);
