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
                'height': '80%',
                }, 1500);

            setTimeout(function(){ $('.wave').animate({
                'height': '20px',
                }, 2000); }, 2000);

            setTimeout(function(){ $('.cycle-slideshow').cycle('next'); }, 2000);

    });

    function loop() {
    $('.wave').animate({'bottom': '80'}, {
        duration: 1000, 
        complete: function() {
            $('.wave').animate({bottom: 100}, {
                duration: 1000, 
                complete: loop});
        }});
    }
        loop();

});