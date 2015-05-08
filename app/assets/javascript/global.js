$(document).mousemove(function(e){
    $("#pencil").css({left:e.pageX, top:e.pageY});
});

$(function(){ // Wait til the page has finished loading. (jQuery)

    // Store all the possible sentences for each line using an Array for each.
    var line1sentences = [
        "The first line.",
        "Another first line",
        "A final first line.",
        "One last first line."
    ];
    
    var line2sentences = [
        "The 2nd line.",
        "Another 2nd line",
        "A final 2nd line.",
        "One last 2nd line."
    ];
    
    // Query for the two span elements and store them in a variable for reference so we can manipulate their contents later on.

    var line1element = $('#line1');
    var line2element = $('#line2');
    
    // Define a function that can be used like "getRandomSentence(line2sentences);" in order to return a random sentence from a line of our choosing.

    var getRandomSentence = function(sentenceArray){
        return sentenceArray[Math.floor(Math.random()*sentenceArray.length)];
    };
    
    // Fill in the two elements with starting sentences.
    
    line1element.html(getRandomSentence(line1sentences));
    line2element.html(getRandomSentence(line2sentences));
    
    var cycleInterval; // Define a variable that we can use to reference the setInterval repating timer below.
    
    $('.line').hover(function(){ // Hover over any line.
        var id = $(this).attr('id'); // Store the id attribute of the element that was hovered over. In this case either line1 or line2.
        clearInterval(cycleInterval); // Cancel the repeating timer if it is already running just in case.
        
        cycleInterval = setInterval(function(){
            if(id == "line1"){ // If this element is the first line.
                line1element.html(getRandomSentence(line1sentences));
            } else if(id == "line2"){ // Or if it is the second line...
                line2element.html(getRandomSentence(line2sentences));
            }
        }, 100); // Repeats every tenth of a second.
        
    }, function(){ // Hover out of any line.
        clearInterval(cycleInterval); // Cancel the repeating timer.
    });

});