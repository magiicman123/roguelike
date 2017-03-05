//var audio = new Audio('./assets/musicGame.mp3');
//audio.play();
ctx.strokeStyle = 'white';
ctx.lineWidth = 20;
//bottom
ctx.moveTo(canv.width/2+100,canv.height/2+100);
ctx.lineTo(canv.width/2-100,canv.height/2+100);	
ctx.lineTo(canv.width/2-100,canv.height/2-100);
ctx.lineTo(canv.width/2+100,canv.height/2-100);
ctx.lineTo(canv.width/2+100,canv.height/2+110);
ctx.stroke();
var firstDoor = Math.floor((Math.random()*4)+1)

if(firstDoor == 1){
	ctx.beginPath();
ctx.lineWidth ='30';
ctx.strokeStyle="black";
ctx.rect(canv.width/2,canv.height/2-100,20,6); 
ctx.stroke();
var secondOne = true;
}
if(firstDoor ==2){
	ctx.beginPath();
ctx.lineWidth ='30';
ctx.strokeStyle="black";
ctx.rect(canv.width/2,canv.height/2+100,20,6); 
ctx.stroke();
}
if(firstDoor == 3){
	ctx.beginPath();
ctx.lineWidth ='30';
ctx.strokeStyle="black";
ctx.rect(canv.width/2+100,canv.height/2,20,6); 
ctx.stroke();
}
if(firstDoor == 4){
	ctx.beginPath();
ctx.lineWidth ='30';
ctx.strokeStyle="black";
ctx.rect(canv.width/2-100,canv.height/2,20,6); 
ctx.stroke();
}
if(secondOne == true){
	ctx.beginPath();
ctx.lineWidth="10";
ctx.strokeStyle="blue";
ctx.rect(50,50,150,80);
ctx.stroke();
}