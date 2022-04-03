// Set network throttling to fast3G/slow3G

function removeLoader(content){

    $(content).on('load', function(event){
        event.preventDefault();
        $('.ball1').addClass("endAni")
        $('.ball2').addClass("endAni")
        $('.ball3').addClass("endAni")
        $('.ball4').addClass("endAni")
        $(".overlay").fadeOut(6500);
    });
    
};

$.ajax({
    url:'template-parts/content.php',
    beforeSend: function(){
        console.log("before send");
    },
    success: function(data){
        console.log("good job!")
        $('main').append(data);
        removeLoader(data);
    }
});