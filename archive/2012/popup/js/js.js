$(document).ready(function() {

    $(".popup").fancybox({
        'autoScale'			: true,
        'transitionIn'		        : 'elastic',
        'transitionOut'		        : 'elastic',
        'type'				: 'iframe'
        }); //Fancybox ends
    
    $('.main_menu li ul a').hover(function(){
    	$('.main_menu li ul li ul ').css({'display': 'none'});
    	$(this).next().css({'display': 'block'});
    });
	
	
	/*
	$(".main_menu li a img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_over.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("_over.png", ".png");
            $(this).attr("src", src);
        });
   */
});
