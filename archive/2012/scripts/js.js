var timer = 0; 
var op = 100;
var scroll = true; //when welecome screen have scroll bar
var refreshIntervalId, refreshIntervalId1; //this is Timer 
var moz = 1;

$(function(){
	var $win = $(window);
	var showDesiner = 1;
	var $des= 0;
	var $city = 'Chandigarh';
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
	
	
	
	/* Designer Schedule Starts */
	function animateSchedule($des, showDesiner){
		$(".designer-inner").stop().animate({
				scrollTop: $des +"px"
			},2000,function(){});
			
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
			 
	}//animateSchedule
	
	function reLoadSchedule(){
			showDesiner++;
			if (showDesiner > 25) {
				showDesiner = 1;
				$des = 0;
			}
			$des = $des + 614;	
			animateSchedule($des, showDesiner);											
	}	
	var ScheduleLoader = setInterval(reLoadSchedule, 8000);
	
	
	function trackClick($cls_city){
		switch( $cls_city ){
			case 'Chandigarh':
				$class=".desinergroup1";
				showDesiner = 1;
				$des =0;
				break;
				
			case 'Kolkata':
				$class=".desinergroup4";
				showDesiner = 4;
				$des = 1842;
				break;				
				
			case 'Bangalore':
				$class=".desinergroup8";
				showDesiner = 8;
				$des = 4298;
				break;
				
			case 'Hyderabad':
				$class=".desinergroup13";
				showDesiner = 12;
				$des = 6754;
				break;
				
			case 'Gurgaon':
				$class=".desinergroup16";
				showDesiner = 16;
				$des = 9210;
				break;
				
			case 'Mumbai':
				$class=".desinergroup21";
				showDesiner = 21;
				$des = 12280;
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
			case 'ashish_n_soni':
					$html ='<h4>Ashish N Soni <br />@ BPFT 2012</h4><p>I am first and foremost a cutter. A clean line with a hint of drama is my signature style. I have specially designed a new Resort Collection for the Blenders Pride Fashion Tour 2012 where optical illusion prints blend with polka dots and florals to give a burst of freshness to vacation-dressing. Graphic black, navy, dusty pinks, deep maroons, pale grey and salmons are the colours of this line-up. The result is a slightly colourful and bohemian collection with focus on an accentuated waistline. I have experimented a lot with frills, peplums, geometric patterns and mixed materials to bring alive the new age woman, who loves her freedom with a dash of fun.</p>';
					break;
					
			case 'asmita_marwa':					
					$html ='<h4>Asmita Marwa presents <br />La Vie En Rose <br />@ BPFT 2012</h4><p>My collection for Blender\'s Pride Fashion Tour is heavily inspired by the Woodstock Era. Peace, freedom of expression and a "Hippie Chic" approach to life is how I would like to call my line-up. I have experimented with cuts, fabric, prints and Batiks to bring alive optimism and hope. That\'s how I like to see life... through rose tinted glasses. La Vie En Rose!</p>';
					break;
			
			case 'shane_falgunipeacock':					
					$html ='<h4>Falguni and Shane Peacock present <br />The Peacock Bride <br />@ BPFT 2012</h4><p>Our bridal collection celebrates the most important day in the life of a couple in myriad colours and styles. Flared lehengas, elegant saris and sexy cholis have been reinvented in nets, satins and silk; embellished with antique crystals and gold, floral motifs and frills to create a magical melange. From the mehendi ceremony to the final bidai, our bridal couture gives a refreshing variation to the celebrations. We have also redefined the traditional sherwani to give the cliched "happily ever after" a designer\'s definition. </p>';
					break;
					
			case 'gavin_miguel':					
					$html ='<h4>Gavin Miguel presents <br />Stairway to Heaven (Heavenly Abode) <br />@ BPFT 2012</h4><p>The fluidity of peace, interjected by the definite cuts of prosperity and airy colours of purity creates a mystical contrast. A splash of neon peeping shyly from elegant, hand worked fabric gives a certain kind of unpredictability and definition to my signature ensemble.  It\'s an ode to the most beautiful creation in the Universe - a woman.</p>';
					break;
			
			case 'mandira_wirk':					
					$html ='<h4>Mandira Wirk presents <br />Veils... Unveiled <br />@ BPFT 2012</h4><p>Inspired from English brides, my color story starts with fresh ivories to muted silver going down to powder hues of aquas, lilacs, lemons, apricots and rose pinks. It takes me to the time where the bride holds a bouquet of assorted seasonal flowers.</p><p>The application is subtle, the crystals are spectacular to give a very delicate romantic allure. I have experimented with heavy layering on foil printed organza, mechanical pleated nets and crumpled satins. Origami and ribbon embroidery with soft bows, chiffon drapes and thigh-high slits with a magnificent veil and self-affirming extension of the dress completes<br />the look.</p><p>My modern, fairy tale collection is summed up in strapless full skirted ball gowns, slim evening dresses with tight pleating, one shouldered tulle gowns with stunning trails and body hugging shifts. What separates one from another is the characteristic of a neckline, the presence or absence of the sleeve, the length of the trail and the occasional cape.</p>';
					break;
			
			case 'nandita_mahtani':					
					$html ='<h4>Nandita Mahtani <br />@ BPFT 2012</h4><p>My collection is an amalgamation of resort and cocktail evening wear. It consists of a range of structured to easy flowing silhouettes. The color story boasts of the deep sparkling metallic shadows, cascading into a burst of bright summer hues. I have experimented with fabrics such as georgettes, chiffons, satins and crepes embellished with sequin, chains, stones and beads which lend an ultra glam aura and a heightened sense of drama. It is a stylish, sexy and glamorous collection for the confident, independent 21st century woman.</p>';
					break;
			
			case 'neeta_lulla':					
					$html ='<h4>Neeta Lulla <br />@ BPFT 2012</h4><p>I invite you to meet me on the dark side. Drawing inspiration from all elements black, I have explored the Gothic era in modern, baroque cuts and colours. I have brought forth the sensuality and understated dominance of the female form with a strong focus on the construction of the garments. The exceptional accent of my collection actually lies in its glamour quotient - Subtle and Refined.</p>';
					break;
			
			case 'nida_mahmood':					
					$html ='<h4>Nida Mahmood presents <br />Bombay Bun Maska <br />@ BPFT 2012</h4><p>Inspired by the vibrant streets of Mumbai and the popular Bun Maska, my ensemble brings alive the young, free-spirited rebellious and unpretentious point of view of today\'s generation.</p><p>Brave, experimental, adventurous, I have played with colours, silhouettes and fluid imagery to create a non-conformist range for this generation, which makes the world a more stylish place. For the first time, I also have a capsule line for men.</p>';
					break;
			
			case 'pankaj_nidhi':					
				$html ='<h4>Pankaj & Nidhi present <br />The Liquid Gold Tree <br />@ BPFT 2012</h4><p>We present an exotic collection titled "The Liquid Gold Tree" for Blenders Pride Fashion Tour 2012. It\'s a mesmerizing melting pot of ancient cultures and modern craft. Executed with the precision of a goldsmith and the flair of a baroque sculptor, our line-up in hypnotic black, gold and precious colours like fuchsia quartz and agate blue is timeless. We have experimented with unique textures like luxurious silks, leather and fine merino wool to create works of art that will be<br />truly treasured.</p>';
				break;
				
			
			case 'raghavendra_rathore':					
				$html ='<h4>Raghavendra Rathore <br />@ BPFT 2012</h4><p>This season, my signature style has undergone a change where modern weaves have blended with old world charm to create a fresh look. Rich textiles like brocades have been used to accentuate each ensemble and the traditional dhoti has been recreated to give a new age spin. The Achkan, Kurta, Waistcoat and Band gala have been transformed through stylish cuts and accessories. Fresh vibrant colours have been juxtaposed with pastels to reinvent majesty, while immaculate handcrafting and surface techniques have redefined history in hushed whispers.</p>';
				break;
								
			case 'shantanu_nikhil':					
				$html ='<h4>Shantanu & Nikhil <br />@ BPFT 2012</h4><p>This seasons our collection is all about creating and living a fascinating wedding, where our ensemble blow up the regular celebrations to a larger than life dimension. The contours create trendy new silhouettes draped in luxurious laces that echo the essence of a luscious carnival.<br />We have brought alive the celebration in imported nets, brocades, and silks to express modest luxury and fluid grace carried over into full-length ensembles.</p>';
				break;
			
			case 'vikram_phandis':					
				$html ='<h4>Vikram Phadnis <br />@ BPFT 2012</h4><p>My collection is an interesting mix of Indian and Western influences. I have worked intensely on style, cuts and silhouettes. The flavor is Indo-fusion with lavish Gota worked dupattas and stoles being teamed with a Western wear or an inherently Indian kalidaar being mixed with bundis and structured jackets. Glamorous and elegant, I have used bold and subtle colours like royal blue, beige, grey  and combined them with red, coral and lime green to create a drama that echoes the flavours of the millennium.</p>';
				break;
						
						
			case 'wendell_rodricks':					
				$html ='<h4>Wendell Rodricks presents <br />Fash Splash <br />@ BPFT 2012</h4><p>Slipping effortlessly from beach to red carpet, lounge to premium wear, my uber-cool Fash Splash lineup is inspired by the new packaging of Blenders Pride - a medley of mysterious black and subtle gold. I have also dabbled with a whole new range of psychedelic colours like chili red, glow yellow, hot pink and neon orange to set the tone for the upcoming festival season. A large dose of stylish cuts and unique fabrics is all set to rock the fashion ramps. Watch out.</p>';
				break;
					
			default:
				$html ='<h4>'+$desiner+' presents <br /> "Lorem Ipsum Dolor" <br />@ BPFT 2012</h4><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>';
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
   setInterval(change_home,5000);
   //Loader Ends
	
});