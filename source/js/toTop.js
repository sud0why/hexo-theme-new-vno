jQuery(document).ready(function($) {	
			if($("meta[name=toTop]").attr("content")=="true"){
				$("<div id='toTop'><i class='fa fa-chevron-circle-up fa-4x' style='color: #4e97d8;'></i></div>").appendTo('body');
				$("#toTop").css({
					width: '50px',
					height: '50px',
					bottom:'15%',
					right:'2%',
					position:'fixed',
					cursor:'pointer',
					zindex:'799',
				});
				if($(this).scrollTop()==0){
						$("#toTop").hide();
					}
				$(window).scroll(function(event) {
					/* Act on the event */
					if($(this).scrollTop()==0){
						$("#toTop").hide();
					}
					if($(this).scrollTop()!=0){
						$("#toTop").show();
					}
				});	
					$("#toTop").click(function(event) {
								/* Act on the event */
								$("html,body").animate({
									scrollTop:"0px"},
									666
									)
							});
				}
		});