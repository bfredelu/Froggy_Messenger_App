// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
    document.querySelector('li').checked = localStorage.checked
})

function initializePage() {
	console.log("Javascript connected!");
    $(".tasks li").click(taskClick);
}

function taskClick(e) {
    // prevent the page from reloading     
    e.preventDefault();
    // In an event handler, $(this) refers to     
    // the object that triggered the event     
    $(this).toggleClass('checked')
    if (e.target.checked) {
        localStorage.checked = true;
    } else {
        localStorage.checked = false;
    }
    
}