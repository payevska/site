document.getElementById('arrow-left').onclick = arrowLeft;
document.getElementById('arrow-right').onclick = arrowRight;
var left = 0;


function arrowLeft(){
	var slider = document.getElementById('slider');
	left = left - 397;
	if (left < -1191){
		left = -1191;
	}                 
	slider.style.left = left +'px';
}

function arrowRight(){
	var slider = document.getElementById('slider');
	left = left + 397;
	if (left > 0){
		left = 0;
	}                 
	slider.style.left = left +'px';
}