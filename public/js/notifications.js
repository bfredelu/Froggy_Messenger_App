$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
    $('.toggle-switch').click(knobToggle);
    $('.toggle-switch').each(checkToggle);
    //$('.arrow').click(goBack);
}

function knobToggle(e) {
	e.preventDefault();
	console.log("Toggle Clicked!");
	$(this).toggleClass('active');
	localStorage.setItem($(this).text(), $(this).hasClass('active'));
}

function checkToggle() {
	var toggled = localStorage.getItem($(this).text());
	if (toggled == 'true') {
		$(this).toggleClass('active');
	}

	console.log($(this).text());
}
/*
function goBack(e) {
	e.preventDefault();
	console.log("Back button Clicked!");
}
*/
/*
var toggler = document.querySelector('.toggle-switch');

toggler.onclick = function(){
  toggler.classList.toggle('active');
}
*/