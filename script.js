/*
jQuery('h1').css("color", "red")*/
/*
$('h1').css("color", "red")*/

/*
$(document).ready(function () {
    $('h1').css("color", "red")
})*/

$(function (){
    $('h1').css("color", "red") 
})

$('#open').click(function (){
   $("#message")
       .html("Message") 
       .css("background-color", "green")
       .width("103px")
       .height("25px")
})

$('#close').click(function (){
    location.reload()
})
 