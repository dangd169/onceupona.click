$(document).mousemove(function(e){
    $("#pencil").css({left:e.pageX, top:e.pageY});
});

$(document).ready(function() {
	
	var myText = $('#textToggler');

	myText.mousedown(function(){
		// jquery is element hidden?
    	myText.hide("slow");
	});

	myText.mouseup(function(){
    	myText.show("slow");
	});



});
