// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
    // $(".tasks").click(groupClick);
    $(".tasks li").each(checkToggle)
    $(".tasks li").click(taskClick);
}



function taskClick(e) {
    // prevent the page from reloading     
    e.preventDefault();
    // In an event handler, $(this) refers to     
    // the object that triggered the event     
    $(this).toggleClass('checked')
    var index = $(this).index()
    var parentIndex = $(this.parentElement.parentElement.parentElement).index()
    localStorage.setItem($(this).text(), $(this).hasClass('checked'));
    // var toggled = localStorage.getItem($(this).text())
}

function checkToggle() {
    var toggled = localStorage.getItem($(this).text());
    if (toggled == 'true') {
        $(this).toggleClass('checked')
    }

    // console.log($(this).text());
}

// function groupClick(e) {
//     console.log($(this).index());
// }