const botonIrUs = document.querySelector("#botonIrUs");

botonIrArriba.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrWork = document.querySelector("#botonIrWork");

botonIrProyectos.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:600,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrContact = document.querySelector("#botonIrContact");

botonIrContactos.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:1250,
		left:0,
		behavior: "smooth"

	})		
});