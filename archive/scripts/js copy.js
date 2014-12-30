$(function(){
	var $win = $(window);
	var showDesiner = 1;
	var $des= 0;
	var $city = 'Chandigarh';
	var $w = $h = 0;
	var model = 1;
	$w = $win.width();
	$h = $win.height();
		
	function reSizeEverything(){		
		$w = $win.width();
		$h = $win.height();
		$w1 = ($w/2)-52;
		$h1 = ($h/2)-52; 
		$('#intro .bg').css({'left': $w1+'px', 'top': $h1+'px'});
				
		/* second*/
		var $h = (( $h )/2)-180; 
		$('#intro .center').css({'margin': $h+'px auto 0px auto'});		
		$('#second .float-left').css({'margin': $h+'px auto 0px auto'});		
		$('#second .float-right').css({'margin': ($h+ 170) +'px auto 0px auto'});	
		
		/* third */
		var $t_des = ($h/2)-200;
		$('#third .float-right').css({'top': $t_des+'px'});		
		
		/*Fancy Box */
		$w1 = ($w/2)-400;
		$h1 = ($h/2)-85; 
		$('#fancybox-content').css({'left': $w1+'px', 'top': $h1+'px'});
		
	}/// Resize Evething Ends
		
	$('#nav, .designer-inner').localScroll();
		
	$(".next").tipTip({'defaultPosition':'right'});
	
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
				$('.time').html($time);
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
	setInterval(reLoadSchedule, 8000);
	
	$('#location li a').live("click", function(){
		$des = 0;
		
		switch( $(this).attr("class") ){
			case 'Chandigarh':
				$class=".desinergroup1";
				showDesiner = 1;
				$des =0;
				break;
				
			case 'Kolkata':
				$class=".desinergroup4";
				showDesiner = 4;
				$des = 2456;
				break;				
				
			case 'Bangalore':
				$class=".desinergroup8";
				showDesiner = 8;
				$des = 4912;
				break;
				
			case 'Hyderabad':
				$class=".desinergroup13";
				showDesiner = 12;
				$des = 7368;
				break;
				
			case 'Gurgaon':
				$class=".desinergroup16";
				showDesiner = 16;
				$des = 9824;
				break;
				
			case 'Mumbai':
				$class=".desinergroup21";
				showDesiner = 21;
				$des = 12894;
				break;	
		}
		
		var $cl = '.designer-inner '+$class;		
		var $p = $( $cl ).offset();
		//$des = $p.top;
		animateSchedule($des, showDesiner);
	});		
	
	
	function reLoadDesigner(){}	
	//setInterval(reLoadDesigner, 5000);
	
	
	//$('#slider1').tinycarousel({interval:true});
	
	$('.gallary_images li img').click(function(){		
		$('.gallary_images').children().removeClass('current', {duration:500});
		$(this).parent().addClass('current', {duration:500});
		$inde = $(this).parent().index();
		var $mar =  $(this).parent().index() * 75;
		if($(this).parent().index()<=11) $mar = '-'+ $mar;
		
		$mar = ($mar >=0 ) ? 0 :$mar;
		$mar = ($mar <= -620 ) ? -620 :$mar;
		$('.gallary_images').css({'marginLeft': $mar+'px'});	
	});
	
	
	$(".foo").click(function(){
		/*$('#bigimage img').attr( 'src', $(this).attr('href') );
		var $html = $(this).next().html();
		$('#bigimage div').html( $html);	
		$('#bigimage').fadeIn(900);*/
		return false;
	});	


	
	
	
	function reLoadModles(){
		/*model++;
		if(model>=21)model=1;
		$add_five = model+5;
		$mod_div = $('.model'+ $add_five);		
		var $html = $mod_div.next().html();		
		
		$('#bigimage img').attr( 'src', $mod_div.attr('href') );
        $('#bigimage div').html( $html);
		
		$firstele = $('.gallary_images li:first').html();
		$('.gallary_images').append('<li>'+$firstele+'</li>');
		$('.gallary_images li:first').remove();
		*/
	}	
	//setInterval(reLoadModles, 4000);
	
	
	$('.gallary_images').boutique({
		container_width:	'100%',
		front_img_width:	264,
		front_img_height:	'auto',
		autoplay:			false,
		autoplay_interval:	4000,
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
	
	
	function imageGallery(){
		$('.gallary_images').animate({ left: '-=5'},'fast');		
	}	
	//setInterval(imageGallery, 100);
	
	
	$('#designby li, .designer-inner a').click(function(){
		var $desiner = $(this).attr('class');
		var $html = '';
		$('#desiner_boss').fadeOut('slow', function(){
			$('#desiner_boss').attr("src","images/designer/big/"+$desiner+".jpg");
			$('#desiner_boss').fadeIn(900);		
		});
		
		
		switch($desiner){
			case 'ashish_n_soni':
					$html ='<h4>Ashish N Soni @ BPFT 2012</h4><p>As a brand becomes more established, recurring stylistic elements come to be known as "house codes." There are several easily identifiable touches that come to one\'s mind and they speak to a level of consistency that Ashish N Soni has more or less maintained over 20 years.</p><p>Ashish is first and foremost a cutter, and that is what he does best here, allowing just a little drama into his signature clean lines. </p><p>It\'s been pointed out more than once this season that the link between Resort as we see it now and the original purpose of the clothes is becoming ever more tenuous. These are lifestyle codes that Ashish also understands well. Tapping into a vacation mind-set, so you could toss many a piece over a still-wet bathing suit or for the girl truly enjoying her holiday who can\'t be bothered to put an outfit together on her way from the beach to brunch. They really do look like clothes for a particularly upscale resort or cruise.</p><p>Modern tailoring is the hallmark of this new Resort collection which he has specially designed for Blenders Pride Fashion Tour, where optical Illusion-inspired prints, and a kaleidoscope-print as well as polka dots mix together form the key looks. This time around, the designer puts his own spin on the signature prints, mixing in dots, florals with the standard repeats. It�s a fresh approach, graphic black, navy, dusty pink, deep maroon, pale grey and salmon are used together often in the same ensemble, with emphasis on an accentuated waist , femininity, and fun. You must find some element of fun in every piece or the element of Resort is lost entirely. Color blocking and bold polka prints are reserved for the second half of the collection pieces that the designer imagines would be easily worn on many a yacht.</p><p>The final result is particularly fresh with prints worn head to toe as a backdrop for a colorful, slightly bohemian collection. Some of the kind of tailored separates and little dresses he\'s made his specialty are great holiday pieces. Other noteworthy moments include lots of frills, peplums and an on-trend, away-from-the body geometric shapes that are extremely comfortable. Ashish has mixed materials from top to bottom of looks like a peplum-accented cotton skirt with a silk twill shirt, both in the separate prints and a cocktail dress in both the positive and negative versions of a double-faced polka-dot print. </p>';
					break;
					
			case 'asmita_marwa':					
					$html ='<h4>Asmita Marwa presents La Vie En Rose @ BPFT 2012</h4><p>I find myself going back time and again, to explore the late 60\'s and early 70\'s, for inspiration... "The era of Woodstock." It\'s probably because I am most fascinated by that period where peace, freedom of expression and music defined people\'s lives. </p><p>With all that is happening in the world right now... recession, political instability, corruption, violence... I want my clothes to bring about happiness and hope. The collection reflects a "Hippie Chic" vibe with a kaleidoscope of colours, prints and Batiks, spreading optimism and hope. That\'s how I see life... through rose tinted glasses. La Vie En Rose!</p>';
					break;
								
			
			
			case 'shane_falgunipeacock':					
					$html ='<h4>Falguni and Shane Peacock present The Peacock Bride @ BPFT 2012</h4><p>The Peacock Bride, a glamorous collection from the creatively exciting design desk of the talented Falguni & Shane Peacock, will be seen at the Blenders Pride Fashion Tour 2012. </p><p>The collection features an assortment of flared lehengas, saris & sexy cholis, in a m�lange of colors, sprinkled with crystals & feathers, perfect for all wedding festivities from the mehendi, sangeet, shaadi to the final bidai. Selecting the finest net, chiffon and satin in antique crystal and gold, the designer duo offer the perfect fusion of ethnic embroidery with western silhouettes. Also seen are floral motifs sprinkled on saris with embroidered borders and worn tasselled shoulder corsets, as well as tiered frilled net gowns, with glittering corsets. For the men there are a number of regal looking embellished sherwanis. </p><p>When it comes to bridal couture the designer duo have perfected the art and can offer the today\'s global woman many variations in their Peacock Bride collection.</p>';
					break;
					
					
					
			case 'gavin_miguel':					
					$html ='<h4>Gavin Miguel presents Stairway to Heaven (Heavenly Abode) @ BPFT 2012</h4><p>Purity Peace and Prosperity is what going through my thoughts. </p><p>Finding my space and my time is very important. This growth was waiting to happen and I feel I have overcome the rush of city life.</p><p>My family is my super power and has helped in my growth as a person and as an artist.</p><p>The expression of my life and work can be seen in this collection. I feel it\'s all wrapped in one capsule.</p><p>This is the very first time I have played with a palette of light airy colors mixed with a strong pump of neon\'s.  A hide and seek of fine hand work entwined in fabric gives that edge which speaks of our signature. The key silhouette to this collection is shape and fluidity - two absolute contrasts yet magical mystical and being true to me.</p><p>This collection will make every woman feel like Heaven on Earth. That is the aim...</p><p>"TO FEEL BEAUTIFUL AND ALWAYS REMAIN BEAUTIFUL"</p>';
					break;
			
			
			
			case 'mandira_wirk':					
					$html ='<h4>Mandira Wirk presents Veils... Unveiled @ BPFT 2012</h4><p>This season\'s inspiration is drawn from the English Brides. It combines simplicity and sophistication, purity and opulence in the most uninhibited way of expressing beauty. The collection takes you to the time starting from their elegant venue to the three-tiered cake with pastel rosettes all around. It focuses on the look that gives an insight to a modern fairy tale.</p><p>The color story starts with fresh ivories to muted silver going down to powder hues of aquas, lilacs, lemons, apricots and rose pinks, taking me to the time where the bride holds a bouquet of assorted beautiful seasonal flowers.</p><p>The application is subtle, the crystals are spectacular to give a very delicate romantic allure. One will see lot of layering with foil printed organza, mechanical pleated nets and crumpled satins. Origami and ribbon embroidery with soft bows, chiffon drapes and thigh-high slits with a magnificent veil and self-affirming extension of the dress completes the look.</p><p>And so the vision of romanticism persists and pervades, but more playful, bolder and glamorous.</p><p>The collection sums up by offering strapless full skirted ball gowns, slim evening dresses with tight pleating, one shouldered tulle gowns with stunning trails and body hugging shifts. Drop waist accented with satin ribbons and floral details. What separates one from another is the characteristic of a neckline, the presence or absence of sleeve, the length of the trail and the occasional cape.  </p>';
					break;
			
			
			
			case 'nandita_mahtani':					
					$html ='<h4>Nandita Mahtani @ BPFT 2012</h4><p>The collection is an amalgamation of resort and cocktail evening wear. It consists of a range of structured to easy flowing silhouettes. The color story boasts of the deep sparkling metallic shadow; cascading into a burst of bright summer hues. The collection comprises of fabrics such as georgettes, chiffons, satins and crepes embellished with sequin, chains, stones and beads which lend to the ultra glam look and add a strong sense of drama. It is a stylish, sexy and glamorous collection for a confident independent woman of today.</p>';
					break;
			
			
			
			
			
			case 'neeta_lulla':					
					$html ='<h4>Neeta Lulla @ BPFT 2012</h4><p>This Autumn Winter, Neeta invites you to meet her on the dark side. Drawing inspiration from all elements black, through her diffusion line she explores a mood that includes the era of baroque and extends to a modern interpretation of goth.</p><p>With this line, she brings forth the sensuality and understated dominance of the female being, with a strong focus on the construction of the garments. </p><p>The exceptional accent to this collection actually lies in its glamour quotient - subtle and refined.  </p>';
					break;
			
			
			case 'nida_mahmood':					
					$html ='<h4>Nida Mahmood presents Bombay Bun Maska @ BPFT 2012</h4><p align="center">Buttery and Melt-in-your-Mouth Divine<br />With Tongue Firmly in Cheek<br />Quirky, Quick, On-the-Go, Flirty, Fun<br />Sex on Toast � And No Pretensions<br />This Collection Doffs its Technicolor Hat<br />To the Renegades and the Rebels<br />Of our Brave New World</p> <p>In continuum to my muse and inspiration derived from the vibrant streets of our colorful country, the legendary Bombay Bun Maska personifies the youthful, rebellious, free-spirited and unpretentious point of view of my generation.</p><p>Brave, experimental, adventurous � this collection is for the non-conformists who are making our world a more stylish place.</p><p>This collection is inspired by the urban boho chic free spirited youth of today. The collection plays a lot with imagery.  Some flowey and some structured silhouettes comprise the collection. Some bright and some aged colors come together harmoniously.</p><p>For the first time I have a capsule line for men.</p>';
					break;
			
			
			
			case 'pankaj_nidhi':					
				$html ='<h4>Pankaj & Nidhi present The Liquid Gold Tree @ BPFT 2012</h4><p>Pankaj & Nidhi present an exotic collection titled "The Liquid Gold Tree" for the Blenders Pride Fashion Tour 2012. A mesmerizing melting pot of ancient cultures and modern craft. A hypnotic vision in black, gold and precious colors like fuchsia quartz and agate blue. Executed with the precision of a goldsmith and the flair of a baroque sculptor. Incorporating Pankaj & Nidhi\'s unique textures and detailing in luxurious silks, leather and fine merino wool. A collection meant to be timeless and treasured.</p>';
				break;
				
			
			case 'raghavendra_rathore':					
				$html ='<h4>Raghavendra Rathore @ BPFT 2012</h4><p>This festive season the Raghavendra Rathore brand celebrates heritage and tradition with modern aplomb. The opulence in textures, colors and fabrics emulates the old world charm synonymous with the brand. Rich textiles like brocade have been used to accentuate each ensemble and the traditional dhoti has a recreated novelty. The wedding celebrations bring forth an eclectic yet luxurious feel that opens up a barrage of opportunities and options for the brand to work with for each client. The Achkan, Kurta, Waistcoat and Band gala are given a fresh look by making subtle style changes through accessories and cuts, thereby creating enough options for various occasions. Immaculate handcrafting with exquisite surface technique recreates a hallmark look very unique to the brand. The fresh and vibrant colors are juxtaposed with pastel tones that play a key role in this reinvention.</p>';
				break;
				
				
			case 'shantanu_nikhil':					
				$html ='<h4>Shantanu & Nikhil @ BPFT 2012</h4><p>This season\'s collection is all about creating and living a fascinating wedding, where the fascinators blow up the regular celebrations to a larger than life dimension, encapsulating the most beautiful day of a to-be couple\'s life. </p><p>The contours create new trendsetting silhouettes draped in luxurious laces that craft the essence of a luscious carnival. </p><p>The garments draped in imported nets, brocades, and silks exude the idea of modest luxury carried over into full-length ensembles.</p>';
				break;
				
			
			
			case 'vikram_phandis':					
				$html ='<h4>Vikram Phadnis @ BPFT 2012</h4><p>The collection portraits the embodiment of luxury and power, having proved again and again that fashion is in a constant state of flux, generating fantastic new styles and new feelings, with glamour, creativity, and modest beauty combined.</p><p>With supreme quality of fabrics, perfecting the fit, and attention to small details, which is evidenced in the luxurious and sophisticated one-of-a-kind pieces that will find a permanent home in every chic woman\'s closet.</p><p>The collection is a concoction of Indian and western influences. Silhouettes are elaborately styled with ornate style of design. They vary from skirts, kalidaars teamed with bundis and structured jackets and capes making the look very extraordinary.</p><p>The lavish gota work dupattas and stoles are well adorned with elaborate tassels.</p><p>An intense flamboyant color pallete of royal blue, beige, grey  combined with red, coral and lime green are used to make the garments give an Impressive appearance.</p><p>The collection epitomizes a very strong passion for glamorous silhouettes with special attention to details and colours which gives the ramp a scene of striking beauty.</p>';
				break;
						
						
			case 'wendell_rodricks':					
				$html ='<h4>Wendell Rodricks presents Fash Splash @ BPFT 2012</h4><p>The new Fash Splash 2012 collection by Wendell Rodricks takes inspiration from the new Blenders Pride package by the designer for this festive season. Against a backdrop of black sparkling with gold, models twirl around a splash design that repeats itself on hot colours like chilli red, glow yellow, hot pink and neon orange. This is a Fashion Splash with a big dose of style thrown onto garments that reflect the Wendell Rodricks style. Slipping effortlessly from beach to red carpet, lounge to premium luxury, the ultra sexy, uber cool and posh look of the clothing splashes on the country\'s best cities and fashion ramps in an orgy of colour, style and sensuality.</p><p>Fash Splash is the Blenders Pride Wendell Rodricks toast to the country\'s 2012 festive season.</p>';
				break;
			
					
			default:
				$html ='<h4>'+$desiner+' presents, "Lorem Ipsum Dolor" @ BPFT 2012</h4><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>';
		}
		
		
		$(".desiger_text_box").fadeOut('slow', function(){
			$(".desiger_text_box").html($html);
			Cufon.refresh();
			$(".desiger_text_box").fadeIn(900);		
		});
	});
	
	
	$(".popup").fancybox({
	    'autoScale'			: true,
	    'transitionIn'		        : 'elastic',
	    'transitionOut'		        : 'elastic',
	    'type'				: 'iframe'
    }); //Fancybox ends
    
	$('#banner').bjqs({
          'animation' : 'slide',
          'width' : 538,
          'height' : 158
        });
        
		
	
	$win.resize(function(){
		reSizeEverything();
	});	
		
	reSizeEverything();
	
	$('#sixted').attr({
		'src': 'popup/1.html'
	});
	
});