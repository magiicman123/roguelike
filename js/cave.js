var caveGenorator = function(){
	function startY(){
		return (Math.floor(Math.random() * 59) + 1)*10;
	}
	randommWalk(10,startY());
	function randommWalk(x,y){
	for(var i = 0; i != 2000;i++){
	//	while(y != 590){
			var choice = Math.floor(Math.random()*4) + 1;
			if(choice === 1 && x != 590){
				x+=20;
			}
			if(choice === 2 && x != 10){
				x-=20
			}
			if(choice === 3 && y != 590){
				y+=20
			}
			if(choice === 4 && y != 10){
				y-=20;
			}
			ctx.fillStyle = 'black';
			ctx.fillRect(x,y,20,20);
			ctx.fill();
		}
	}
}