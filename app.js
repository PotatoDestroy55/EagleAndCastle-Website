const botonIrUs = document.querySelector("#botonIrUs");

botonIrUs.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:0,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrWork = document.querySelector("#botonIrWork");

botonIrWork.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:600,
		left:0,
		behavior: "smooth"

	})		
});

const botonIrContact = document.querySelector("#botonIrContact");

botonIrContact.addEventListener("click", function(){
	console.log('test');
	window.scrollTo({
		top:1250,
		left:0,
		behavior: "smooth"

	})		
});