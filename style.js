$(function(){


$('.nav-list-item').hover(
   function(){

   	$(this).animate({
   		'font-size': '16px'
   	}, 300);
   },
   function(){

   	$(this).animate({
   		'font-size': '14px'
   	}, 300);
   }

   );


$('#top-btn').click(function(){

  $('html, body').animate({
  	'scrollTop': 0
  }, 1500)
});

$('nav a').click(function(){
	var id =$(this).attr('href');
	var position = $(id).offset().top - 80;
	$('html,body').animate({
	  'scrollTop':position
	}, 1500)
})

});
