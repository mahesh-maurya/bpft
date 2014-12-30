/*
JavaScript for the demo: Recreating the Nikebetterworld.com Parallax Demo
Demo: Recreating the Nikebetterworld.com Parallax Demo
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Demo URL: http://www.ianlunn.co.uk/demos/recreate-nikebetterworld-parallax/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	var $firstBG = $('#intro');
	var $secondBG = $('#second');
	var $thirdBG = $('#third');
	var $fourthBG = $('#fourth');
	var $fifthBG = $('#fifth');
	var $sixthBG = $('#sixth');
	var $seventhBG = $('#seventh');
	var $trainers = $("#second .bg");
	var $scrollG = $('#intro .center');
	var $fourthSt = $('#fourth .story');
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	$('#intro, #second, #third, #fourth, #fifth, #sixth, #seventh').bind('inview', function (event, visible) {
			if (visible == true) {
			$(this).addClass("inview");
			} else {
			$(this).removeClass("inview");
			}
		});
	
			
	//function that places the navigation in the center of the window
	function RepositionNav(){
		var windowHeight = $window.height(); //get the height of the window
		var navHeight = $('#nav').height() / 2;
		var windowCenter = (windowHeight / 2); 
		var newtop = windowCenter - navHeight;
		//$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	}
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " +  Math.round((-((windowHeight + pos) - adjuster) * inertia))  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar
		
		$('#nav li a').css({'backgroundPosition':'0px -8px'});

		//if the first section is in view...
		if($firstBG.hasClass("inview")){
			$('#nav li a').css({'backgroundPosition':'0px -8px'});
			$('.intro').css({'backgroundPosition':'0px 6px'});
			//call the newPos function and change the background position
			$firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 645, 0.3)}); 
			$scrollG.css({'backgroundPosition': newPos(50, windowHeight, pos, 645, -0.99)}); 
		}
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			$('#nav li a').css({'backgroundPosition':'0px -8px'});
			$('.second').css({'backgroundPosition':'0px 6px'});
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1300, 0.3)});
			$('.second .home').css({'backgroundPosition': newPos(50, windowHeight, pos, 1300, 0.3)});
			//call the newPos function and change the secnond background position
			$trainers.css({'backgroundPosition': newPos(50, windowHeight, pos, 1300, 0.1)});
		}
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			$('#nav li a').css({'backgroundPosition':'0px -8px'});
			$('.third').css({'backgroundPosition':'0px 6px'});
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3050, 0.3)});
		}
		
		//if the fourth section is in view...
		if($fourthBG.hasClass("inview")){
			$('#nav li a').css({'backgroundPosition':'0px -8px'});
			$('.fourth').css({'backgroundPosition':'0px 6px'});
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			//$fourthBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 200, 0.9) + ", " + newPos(50, windowHeight, pos, 0, 0.7) + ", " + newPos(50, windowHeight, pos, 0, 0.5) + ", " + newPos(50, windowHeight, pos, 700, 0.3)});
			$fourthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 4800, 0.3)});
			$fourthSt.css({'backgroundPosition': newPos(50, windowHeight, pos, 3000, 0.4)});
		}
		
		//if the fifth section is in view...
		if($fifthBG.hasClass("inview")){
			//$('#nav li a').css({'backgroundPosition':'0px -8px'});
			$('.fifth').css({'backgroundPosition':'0px 6px'});
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$fifthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 6000, 0.3)});
			
		}
		
		
		//if the fourth section is in view...
		if($sixthBG.hasClass("inview")){
			//$('#nav li a').css({'backgroundPosition':'0px -8px'});
			$('.sixth').css({'backgroundPosition':'0px 6px'});
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$sixthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 7650, 0.3)});
		}
		
		//if the fourth section is in view...
		if($seventhBG.hasClass("inview")){
			//$('#nav li a').css({'backgroundPosition':'0px -8px'});
			$('.seventh').css({'backgroundPosition':'0px 6px'});
			//$('.video').html('<iframe id="frame" width="853" height="480" src="http://www.youtube.com/embed/DTCC7n9iPgk?rel=0" frameborder="0" allowfullscreen></iframe>');
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			//$fifthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3950, 0.3)});
		}
		
		
		
		
		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}
		
	RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});