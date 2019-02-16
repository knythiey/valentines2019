$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		if (e.target.id == 'home-tab' || e.target.id == 'memories-tab') {
			$('.content').css('border-top-left-radius', '0');
		} else {
			$('.content').css('border-top-left-radius', '10px');
		}
	})
});