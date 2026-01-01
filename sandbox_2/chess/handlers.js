var HANDLERS ={};
HANDLERS.field_click= function(e) {

	const 	btn = e.currentTarget;
	let 	x 	= btn.dataset.x;
	let 	y 	= btn.dataset.y;

	console.log("-------------------------");
	console.log(`Clicked: x=${x}, y=${y}`);
	console.log("Clicked: x="+x+", y="+y);
	console.log(` ${btn.classList[0]} ${btn.classList[1]}`);

}