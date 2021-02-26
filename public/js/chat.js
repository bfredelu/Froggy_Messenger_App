$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
    $(".username").text(localStorage.getItem('username'));
	window.scrollTo(0,document.body.scrollHeight);
}
