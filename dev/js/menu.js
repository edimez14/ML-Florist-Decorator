let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function() {
	let Desplazamiento_Actual = window.pageYOffset;
	if(ubicacionPrincipal >= Desplazamiento_Actual){
		document.getElementById('header').style.top = '0';
	} else{
		document.getElementById('header').style.top = '-20px';
	}
	ubicacionPrincipal = Desplazamiento_Actual;
}