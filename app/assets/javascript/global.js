$(document).ready(function(){

     $("#Option1").click(function(){
        $("#Option1").cycle('next');
    });

    $("#Option2").click(function(){
        $("#Option2").cycle('next');
    });

    $("#Option3").click(function(){
        $("#Option3").cycle('next');
    });

    $("#Option4").click(function(){
        $("#Option4").cycle('next');
    });

    $('.wave').click(function(){

            $('.wave').animate({
                'height': '85%',
                }, 1500);

            setTimeout(function(){ $('.wave').animate({
                'height': '20px',
                }, 2000); }, 2000);

            setTimeout(function(){ $('.cycle-slideshow').cycle('next'); }, 2000);

    });

    function loop() {
    $('.boat').animate({'bottom': '0'}, {
        duration: 1000, 
        complete: function() {
            $('.boat').animate({bottom: 10}, {
                duration: 1000, 
                complete: loop});
        }});
    }
        loop();
});


//MAKE A SOUND PLAY ON EACH VERSE. ONE FOR EACH NOTE. WHEN YOU DO THE WAVE MAKE IT PLAY A CHORD. 