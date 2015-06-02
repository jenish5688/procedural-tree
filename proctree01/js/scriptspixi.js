var renderer = new PIXI.autoDetectRenderer(500,600);
document.body.appendChild( renderer.view );

var stage = new PIXI.Container();


var graphics = new PIXI.Graphics();
stage.addChild(graphics)


var deg_to_rad = Math.PI/180;
var counter = 0;
ctx.lineCap = "round";

function drawLine(x,y,x1,y1,depth){
	
	
	//	ctx.lineWidth = (depth+2)/3;
	graphics.beginFill( 0xffffff)
		graphics.moveTo(x,y);
		graphics.lineTo(x1,y1);
	//	ctx.stroke();
	
	counter++;
	
	
}

function drawTree(x,y,angle,depth){
	
	var x1 = x + Math.cos(angle*deg_to_rad)*  (depth + Math.random()*5)  ;
	var y1 = y + Math.sin(angle*deg_to_rad)*  (depth + Math.random()*5) ;
	
	if(depth != 0 && counter != 1500){
		drawLine(x,y,x1,y1,depth);

		
		drawTree(x1,y1,angle+(10*-Math.random()+5),depth-1);
		if(Math.ceil(Math.random()*( Math.cbrt( depth)+3))===1){
			drawTree(x1,y1,angle +(40)/Math.sqrt( Math.sqrt(Math.sqrt( depth))),depth-Math.floor(1+Math.random()*( depth)));
		
		}
		if(Math.ceil(Math.random()*( Math.cbrt(depth)+3))===1){
			
			drawTree(x1,y1,angle +(-40)/Math.sqrt(Math.sqrt( Math.sqrt( depth))),depth-Math.floor(1+Math.random()*( depth)));
		}
		

	}
	
}

drawTree(800,1200,-90,40);

function animate(){
	renderer.render(stage);
	requestAnimationFrame(animate);
	
	
}

animate();
