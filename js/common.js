$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });



    if( $(".content-wrapper").css("width") < "640") {

        //slider advantages
        $('.advantages__items').owlCarousel({
            loop: true,
            items: 1,
            smartSpeed: 700,
            nav: false,
            dots: true,
            autoHeight: true
        });
        $(".advantages__items").addClass("owl-carousel");
    }

	//slider reviews

    if( $(".content-wrapper").css("width") >= "640" ) {
        $('.reviews__items').owlCarousel({
            loop: true,
            items: 1,
            smartSpeed: 700,
            nav: true,
            navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
            dots: true,
            autoHeight: true
        });
	}

	else {
        $('.reviews__items').owlCarousel({
            loop: true,
            items: 1,
            smartSpeed: 700,
            nav: false,
            dots: true,
            autoHeight: true
        });
	}

});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

function navToggleChange() {
	var navMain = document.querySelector('.main-nav');
	var navToggle = document.querySelector('.main-nav__toggle');

	navMain.classList.remove('main-nav--nojs');

	navToggle.addEventListener('click', function () {
		if(navMain.classList.contains('main-nav--closed')) {
			navMain.classList.remove('main-nav--closed');
			navMain.classList.add('main-nav--opened');
		} else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('main-nav--opened');
		}
    });
}
navToggleChange();


