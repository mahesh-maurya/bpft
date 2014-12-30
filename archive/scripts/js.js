var timer = 0; 
var op = 100;
var scroll = true; //when welecome screen have scroll bar
var refreshIntervalId, refreshIntervalId1; //this is Timer 
var moz = 1;

$(function(){
	var $win = $(window);
	var showDesiner = 1;
	var $des= 0;
	var $city = 'Mumbai';
	var $w = $h = 0;
	var model = 1;
	$w = $win.width();
	$h = $win.height();
	
	$('body').addClass('h100');
	
	
	function pasueCounter(){
		clearInterval(refreshIntervalId);
		refreshIntervalId = setInterval(increase_counter,500);
		return false;
	}
	
	function increase_counter(){
      timer++;
      $('#timer').html(timer);
	  
	   if (timer == 31) {
	   	 return pasueCounter()
	   }
	   
	    if (timer == 41) {
		return	pasueCounter()
	   }
	   
	   
	   if (timer == 51) {
	   	return pasueCounter()
	   }
	   
	   if (timer == 61) {
	   	return pasueCounter()
	   }
	  
      if(timer<=80){
        switch(timer) {
			case 10:
				moz = 0.85;
				break;
			case 20:
				moz = 0.8;
				break;
			case 30:
				moz = 0.75;
				break;
			case 40:
				moz = 0.7;
				break;
			case 50:
				moz = 0.65;
				break;
			case 60:
				moz = 0.6;
				break;
			case 70:
				moz = 0.55;
				break;	
			case 80:
				moz = 0.45;
				break;					
			case 80:
				moz = 0.40;
				break;		
				
		}
		
        $('#preloader').css({'opacity': moz });
        $('#counter').html(timer);
		Cufon.refresh();
     }else{
        clearInterval(refreshIntervalId);
      }
    }
   refreshIntervalId = setInterval(increase_counter,500);
   //Loader Ends
	
	
		
	function reSizeEverything(){	
		$w = $win.width();
		$h = $win.height();
		//$('#intro, #second, #third, #fourth, #fifth, #sixth, #seventh').css({'width':$w+'px'});
		$w1 = ($w/2)-52;
		$h1 = ($h/2)-52; 
		$('#intro .bg, #counter').css({'left': $w1+'px', 'top': $h1+'px'});
		$('#welcometext').css({'top': ($h1+130)+'px'});
		
				
		/* second*/
		var $h = (( $h )/2)-175; 
		$('#intro .center').css({'margin': $h+'px auto 0px auto'});		
		$('#second .float-left').css({'margin': $h+'px auto 0px auto'});		
		$('#second .float-right').css({'margin': ($h+ 218) +'px auto 0px auto'});	
		
		/* third */
		var $t_des = ($h/2)-200;
		$('#third .float-right').css({'top': $t_des+'px'});		
		
		/*Fancy Box */
		$w1 = ($w/2)-400;
		$h1 = ($h/2)-85; 
		$('#fancybox-content').css({'left': $w1+'px', 'top': $h1+'px'});	
		$('#fancybox-close').css({'right': ($w1-7)+'px', 'top': ($h1)+'px'}); 
	}/// Resize Evething Ends
	
	$('#nav').localScroll(); //This is for smooth Scroll Dont Remove		
	$('.designer-inner, .text3').localScroll(); //This is for smooth Scroll Dont Remove		
	$(".next").tipTip({'defaultPosition':'right'}); // This make tool tip right side
	
	
var tempcount=0;
var tempcounter="";
	/* Designer Schedule Starts */
	function animateSchedule($des, showDesiner){
		$(".designer-inner").stop().animate({
				scrollTop: $des +"px"
			},3750,function(){ 

				$time1 = $('.desinergroup'+showDesiner).attr('time1');

				if($time1!="" && $time1!=undefined )
				{
			$('.time').fadeOut('fast', function(){
				$('.time span').html($time1);
				Cufon.refresh();
				$('.time').fadeIn(500);		
			});
			}

			 });
			
			$city = $('.desinergroup'+showDesiner).attr('city');
			$date = $('.desinergroup'+showDesiner).attr('date');
			$time = $('.desinergroup'+showDesiner).attr('time');
			
			$venue= $('.desinergroup'+showDesiner).attr('venue');
			$('.'+$city).parent().remove();
			$("#location li a").removeClass('now');				
			$("#location").append('<li><a  class="'+ $city +' now" >'+$city+'</a></li>');
			$('.date').fadeOut('fast', function(){
				$('.date').html($date);
				Cufon.refresh();
				$('.date').fadeIn(100);	
					
			});
			
			$('.time').fadeOut('fast', function(){
				$('.time span').html($time);
				Cufon.refresh();
				$('.time').fadeIn(500);		
			});
			
			$('.venue').fadeOut('fast', function(){
				$('.venue').html($venue);
				Cufon.refresh();
				$('.venue').fadeIn(900);		
			});


			/*if($time1!="")
			{	
			 tempcounter=setInterval(newtime($time1), 1000);
			}*/
					
			 
	}//animateSchedule
/*function newtime(data)
{
//	console.log(tempcount+" "+data);
	if(tempcount==1)
	{

		$('.time').fadeOut('fast', function(){
				$('.time span').html(data);
				Cufon.refresh();	
				$('.time').fadeIn(500);	
			});
	}
	else if(tempcount==2)
	{
		clearTimeout(tempcounter);
		tempcount=0;
		return false;
	}

	tempcount++;
}*/

	
	function reLoadSchedule(){
			showDesiner++;
			if (showDesiner > 14) {
				showDesiner = 1;
				$des = 0;
			}
			$des = $des + 614;	
			animateSchedule($des, showDesiner);											
	}	
	var ScheduleLoader = setInterval(reLoadSchedule, 8000);
	
	
	function trackClick($cls_city){
		//alert($cls_city);
		switch( $cls_city ){
			case 'Mumbai':
				$class=".desinergroup1";
				showDesiner = 1;
				$des =0;
				break;
				
			case 'Gurgaon':
				$class=".desinergroup4";
				showDesiner = 4;
				$des = 1842;
				break;				
				
			case 'Kolkata':
				$class=".desinergroup7";
				showDesiner = 7;
				$des = 3684;
				break;

			case 'Hyderabad':
				$class=".desinergroup9";
				showDesiner = 9;
				$des = 4912;
				break;

			case 'Bengaluru':
				$class=".desinergroup11";
				showDesiner = 11;
				$des = 6140;
				break;

			case 'Chandigarh':
				$class=".desinergroup13";
				showDesiner = 13;
				$des = 7368;
				break;
		}
		
		var $cl = '.designer-inner '+$class;	
		var $p = $( $cl ).offset();
		clearInterval(ScheduleLoader);
		ScheduleLoader = setInterval(reLoadSchedule, 8000);
		animateSchedule($des, showDesiner);
	}
	
	$('#location li a').live("click", function(){
		$des = 0;
		var $cls_city = $(this).attr("class");
		trackClick($cls_city)
	}); //This will  cities and Chagne Schedule
	
	$('.text3 a').click(function(){
		 var $cls_city = $(this).attr("relcity");
		 trackClick($cls_city)
	});
	/* Designer Schedule Ends */
	
	$('.gallary_images').boutique({
		container_width:	'100%',
		front_img_width:	264,
		front_img_height:	'auto',
		autoplay:			true,
		autoplay_interval:	3000,
		behind_size:		0.3,
		back_size:			0.3,
		behind_distance:	100,
		behind_opacity:		0.4,
		back_opacity:		0.4,
		hovergrowth:		0,
		move_more_directly: true,
		frames:				5,
		starter:			10,
		speed:				500,
	});
	
	$('#designby li, .designer-inner a').click(function(){
		var $desiner = $(this).attr('class');
		var $html = '';
		$('#desiner_boss').fadeOut('slow', function(){
			$('#desiner_boss').attr("src","images/designer/big/"+$desiner+".jpg");
			$('#desiner_boss').fadeIn(900);		
		});


		switch($desiner){
			case 'gaviin_miguel':
					$html ='<h4>Gaviin Miguel</h4><p>Warriors of heaven on earth.<br /> Ensembles:  55- 58 Designs.<br />Muse: Lisa Haydon.</p><p>The mood of the show should be heavenly as there is lot of structure and flow. Most of the collection is evening wear and super luxury.Backdrop screening can transport audience to another world.... Would be depicting thru the models a very clean approach in the collection.Angelic descending formation. A flow of  angels through the show would make the show look ethereal. The colors used in the collection are deep and dark. Pewter,gold,wine,deep blue,gold,champagne and black. In metallic work. Rich luxurious flowing evening gowns. Models should have a very mysterious approach on ramp. Makeup and hair will send refs at a later stage</p>';
					break;
					
			case 'neeta_lulla':					
					$html ='<h4>Neeta Lulla</h4><p>Blender’s Pride 2013 – 2014<br />Label Neeta Lulla, draws inspiration from the fashionistas of the 20’s and 30’s to create a line that truly reflects the wispiness associated with mood as much as garb for this season’s collection.<br /><br />The glitzy influence is apparent while a muted vintage colour palette makes for a perfect backdrop. While the sheer, peek-a-boo quality retains the boldness accredited to that era, the silhouettes accentuate a certain sensuous femininity that is not only glamorous but rather poised too.</p><p>Asymmetric cuts, cylindrical shapes and use of drapes to ever so slightly cinch and exaggerate to create a profile that is equally appealing while on display as it is when sheathed. The enchanting attribute of that period and lifestyle is aptly secured through the use of embellishment; the amusement, the romanticism and especially the sparkle shines through the tasselling employed generously which incidentally is also the strongest accent in this collection.</p>';
					break;
			
			case 'rocky_s':					
					$html ='<h4>Rocky S</h4><p>Rocky Star this season delineates the dramatic splendor of mystery. The mystery of dark, unfolds itself in subtle affluence, amalgamated in the intricacies of exaggerated textures and layers. Keeping the signature "Black" aligned, the collection renovates the genesis of color black, recreating the aura of dark medieval age of Fashion which is all about lavishness, seduction, gorgeous contours of femininity.</p>';
					break;
					
			case 'vikram_phadnis':					
					$html ='<h4>Vikram Phadnis</h4><p>The collection celebrates the vivacious and buoyant spirits on structured silhouettes  in vivid blacks, beiges and golds The Pallette wheel spins from the blacks, ivories and creams with a hint of embellishments There is a fascinating allure look in the entire collection,swatched in  golds and Indian fabrics, there is a lot of comfort in style The collection is a composite of stylish jalabias, detailed lehengas, interesting kalidars with capes and kotis, patialas with tight fitted kurtis A Passionate combination of Colors and Creativity for a "CHIC YOU"!!!</p>';
					break;
			
			case 'wendell_rodricks':					
					$html ='<h4>Wendell Rodricks</h4><p>Red, Haute and Blue<br />By Wendell Rodricks for BPFT 2013</p><p>Taking inspiration from a musical tribute to Cole Porter with a new line of stars, Red, Haute and Blue is a celebration of fashion and the new blue packaging by Wendell Rodricks for Blenders Pride Reserve Collection 2013. Mixing hot tunes with hotter garments in an energizing color palette is the forte of the designer who mixes fabric and silhouette to create a youthful resort look perfect for the beach and red carpet. Fuchsias, Oranges, Blues and Greens are blended with a delightful celebration and infused with gold. In keeping with his signature minimalist style, the Red, Haute and Blue collection for Blenders Pride Fashion Tour 2013 is true to the title of the collection in more ways than one.</p>';
					break;
			
			case 'jj_valaya':					
					$html ='<h4>JJ Valaya</h4><p>JJ Valaya takes forward the success of the ‘Maharaja of Madrid’ collection through an all new line of ready-to-wear and showcases it exclusively for the Blenders Pride Fashion Tour 2013. This collection projects a medley of Spanish and Indian influences. However, rather than dwell upon the rather obvious visual connects of Spain, the collection delves into seemingly contradictory juxtapositions to come out with a unique collection of ready-to-wear statements.</p><p>The collection weaves its way through Indian sensibilities combined with an elegant dose of edginess and timelessness in a contemporary manner, topped off with impeccable craftsmanship that remains a unique Valaya signature.</p>';
					break;
			
			case 'pankaj_nidhi':					
					$html ='<h4>Pankaj & Nidhi</h4><h5>ROSES ARE BLUE</h5><p>The Rose. Just the word conjures up notions of infinite beauty and love. Pankaj & Nidhi have scripted their collection with love to make a thing of beauty as well. The notions are given an unexpected twist with their interpretation of this eternally flower in a surreal palette of blues.<br /><br />Roses appear in pixilated avatars, in full bloom, oversized and in a graphic glory that is a signature Pankaj & Nidhi style. Detailed precision embroideries, super luxe prints and unconventional appliques make for a collection that stands out from the crowd.<br /><br />Silhouettes are sharp, modern and desirable in fabrics that range from luxurious silks, jerseys and translucent tulle.<br /><br />Roses are blue, will have never been so true.</p>';
					break;
			
			case 'suneet_varma':					
					$html ='<h4>Suneet Varma</h4><p>The collection is based upon love of lyrics and poetry- words that repertoire, soothe and enrich the soul. Taking inspiration from poetry that my mother has written, I am dwelling into something nostalgic and tender as the night.Long beige and ivory <i>anarkalis</i> worn with <i>farshi shararas</i> and light wispy chiffon <i>dupattas</i>. Nine meter saris worn in Awadh style with tonal embroidery, velvet blouses with sheer sleeves and <i>mukaish</i> embroidery.</p>';
					break;
			
			case 'tarun_tahiliani':					
				$html ='<h4>Tarun Tahiliani</h4><p>The enigma that is the sadhu’s style - a sea of unending fabric mysteriously wrapping itself upon itself, to create an aura, a cocoon, a sensuous drape - finds itself engineered into the modern, structured, sensual drape, characteristic of Tarun Tahiliani, for this year’s Autumn-Winter ’13 Collection Styling, colour, pattern, embroidery, silhouette, and above all, layering, come together to showcase the heightened, ephemeral emotion of the Mela. <i>"A spectacle of effortless originality"</i>, is how Tarun Tahiliani described his deep dive into the aesthetics and madness of the Kumbh he visited recently.</p>';
				break;

			case 'shane_falgunipeacock':					
				$html ='<h4>Falguni &amp; Shane Peacock</h4><p>Fashion is all about change for internationally acclaimed designers,<strong> Falguni &amp; Shane Peacock.</strong> Their Spring-Summer 2014 Line, namely Robotic Chic, edgily showcases this along with the fact that we all need that oomph; that slight spark to make that change. Evening wear, along with red carpet clothing and more comprises the collection within which they have added the element of drama. Blues, whites, beiges, off whites, pinks, blacks and greys meet feathers, sequins and sheer floral combinations in a very potent and heady permutation. The range of garments includes plenty of laser cut outs on mesh dresses and sexy pieces to adorn one in. Robot chic truly makes its way to the futuristic girl in all of us.</p>';
				break;
				
			default:
				$html ='<h4>Gaviin Miguel</h4><p>Warriors of heaven on earth.<br /> Ensembles:  55- 58 Designs.<br />Muse: Lisa Haydon.</p><p>The mood of the show should be heavenly as there is lot of structure and flow. Most of the collection is evening wear and super luxury.Backdrop screening can transport audience to another world.... Would be depicting thru the models a very clean approach in the collection.Angelic descending formation. A flow of  angels through the show would make the show look ethereal. The colors used in the collection are deep and dark. Pewter,gold,wine,deep blue,gold,champagne and black. In metallic work. Rich luxurious flowing evening gowns. Models should have a very mysterious approach on ramp. Makeup and hair will send refs at a later stage</p>';
		}
		
		
		$(".desiger_text_box").fadeOut('slow', function(){
			$(".desiger_text_box").html($html);
			Cufon.refresh();
			$(".desiger_text_box").fadeIn(900);		
		});
	});
	
	
	$(".popup").fancybox({
	    'hideOnOverlayClick' : true,   
	    'autoScale'			     : true,
	    'transitionIn'		   : 'elastic',
	    'transitionOut'		   : 'elastic',
	    'type'				       : 'iframe',
	    'onClosed'           :function(){ $('body').css({'overflow':'visible'});$('#carousel').css({'display' : 'block'});}
    }); //Fancybox ends
    
    $(".popup").click(function(){
      $('body').css({'overflow':'hidden'});
      $('#carousel').css({'display' : 'none'});
    });
    
    $("#fancybox-close").click(function(){
      $('body').css({'overflow':'visible'});
       $('#carousel').css({'display' : 'block'});
    });
    
  
    
$('#banner').bjqs({
  'animation' : 'slide',
  'width' : 538,
  'height' : 158
});
        
		
	
	$win.resize(function(){reSizeEverything();});	
		
	reSizeEverything();
	
	$('#sixted').attr({'src': 'popup/1.html'});
	
});






$(window).load(function(){
	 
    
	function increase_counter(){
      timer++;
      $('#timer').html(timer);
      if(timer>=80 && timer<101){
		switch(timer) {
			case 90:
				moz = 0.4;
				break;			
				
		}
		
        $('#preloader').css({'opacity': moz });
        $('#counter').html(timer);
		Cufon.refresh();
      }
      if(timer>97){
        $('body').removeClass('h100');
        $('#preloader, #counter, #welcometext').fadeOut('fast');
        $('#intro .story, #social, #nav').fadeIn('slow');
        clearInterval(refreshIntervalId1);
      }   
      
    }
    refreshIntervalId1 =  setInterval(increase_counter,100);
	//After load Counter Load
	
	var $i=0;
	function change_home(){
      var $houte=new Array("modish","elegant", "refined","sensual", "urbane", "trendy","vogue", "classy");
	 
	  $('#haute').fadeOut('fast', function(){
			$('#haute').html($houte[$i]);
			Cufon.refresh();
			$('#haute').fadeIn(100);		
	 });
			
	  Cufon.refresh();
	  $i++;
	  if($i>7)$i=0;
    }
  // setInterval(change_home,5000);
   //Loader Ends
	
});