$(document).ready(function(){
	   
    $('.akk-item .title').click(function(){
	     	if($(this).hasClass('closed')) { 
	     		$(this).addClass('open').removeClass('closed'); 
	     		$(this).siblings('.content').slideDown(200);
				
				//if($(this).is('#googlemap')) { 
					map = initializeMap();
					
						//marker();
					
				//}
		 	} else {
		 		$(this).addClass('closed').removeClass('open');
		 		$(this).siblings('.content').slideUp(200);
		 	} 
	     });
    
});