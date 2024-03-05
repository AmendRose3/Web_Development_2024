$("h1").css("color","red");
$("Button").html("<em>Changed</em>");

$("Button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});


// $("input").keypress(function(event){
//     $("h1").html(event.key);
// });