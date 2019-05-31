$(function(){


$('#sp-menu a').hover(
   function(){

   	$(this).animate({
   		'font-size': '22px'
   	}, 300);
   },
   function(){

   	$(this).animate({
   		'font-size': '20px'
   	}, 300);
   }

   );


$('#top-btn').click(function(){

  $('html, body').animate({
  	'scrollTop': 0
  }, 1500)
});

$('#sp-menu a').click(function(){
	var id =$(this).attr('href');
	var position = $(id).offset().top - 80;
	$('html,body').animate({
	  'scrollTop':position
	}, 1500)
})

$('.menu-trigger').on('click', function() {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    return false;
  });

$('#sp-menu a[href]').on('click', function(event){
    $('.menu-trigger').trigger('click');
});

});
