/*
Program Name: Recipe Display Application
Author: Khalil Randell
Date: Nov. 17, 2016
Filename: script.js
*/

//displays the next element after the current target
function display (event) {
    
    /*global$*/ $(event.currentTarget).next().fadeIn("slow");

}//end of display

//attach event listener to h3 elements to invoke display function when clicked
    $("h3").click(display);

//change the background color h3 element when mouse hovers over it
    $("h3").hover(function(){
        $(this).css("background-color", "red");
         }, function(){
        $(this).css("background-color", "purple");
});