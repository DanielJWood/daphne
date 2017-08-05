// Hide body until fade in is complete. 
$(document).ready(function(){
	$("body").hide(0)
});

$(window).on("load", function() {
	$("body").fadeIn(2000)
});

// Add a color class to each home image
var colors = ["green", "blue"];
$("figure").each(function(i){
    var order = i % colors.length;
    var color = colors[order] 
    $(this).addClass(color)
})