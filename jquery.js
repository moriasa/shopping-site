$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});


$(function(){
    $(document).ready(function(){

      $("#sp-toggle-btn").click(function () {
        $(".sp-toggle-li").slideToggle();
      });

    });
  });


$(function()
{
	$('.category-icon').click( function()
	{
		// var target = $( this ).data( 'target' ) ;
		// $( '#' + target ).slideToggle() ;
		$(this).next('ul').slideToggle() ;
		$(this).toggleClass('active');
		//return false ;
	} ) ;
}) ;

$(window).load(function(){
  $(".images img").click(function(){
    var img_src = $(this).attr("src");
    $(".product-img img").attr("src", img_src);
  });
});