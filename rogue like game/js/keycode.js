var canv = document.querySelector('canvas'), 
ctx = canv.getContext('2d');
var x = canv.width/2,
y = canv.height/2,
size = 20;
ctx.fillStyle = "red";
ctx.fillRect(x,y,size,size);
ctx.fill();
function redraw(a,b){
	ctx.clearRect(x-a,y-b,size,size);
 	ctx.fill();
  ctx.fillRect(x,y,size,size);
  ctx.fill();
}
 function shout (event){
var keyCode = event.keyCode
    if(event.keyCode === 87){
 		y--;
 		redraw(0,-1);  
   }
   if(event.keyCode === 83){
 		y++;
 		redraw(0,1);  
   }
   if(event.keyCode === 68){
 		x++;
 		redraw(1,0);  
   }
   if(event.keyCode === 65 && x != 30+size/2){
 		x--;
 		redraw(-1,0);  
   }
}
  window.addEventListener("keydown" , shout);