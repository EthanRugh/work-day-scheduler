let today = document.getElementById("currentDay");
//moment().format("MMM Do YY"); make function that gets time
let date = moment().format("MMM Do YY"); 
today.innerHTML = date;
// add date to html page


$(document).on("click", ".saveBtn", function(event){
    var chore = $('text-box').text();

    localStorage.setItem('text-box', chore);
    
    alert(localStorage.getItem('text-box'))
});

//get the text
//var text = $('#save-btn').text();

//set the item in localStorage
//localStorage.setItem('save-btn', text);

// alert the value to check if we got it
// alert(localStorage.getItem('test'));