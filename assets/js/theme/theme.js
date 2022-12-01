/*global window, jQuery */
(function ($) {
	"use strict";
	// -- :: Navbar Style (1)
	if ($(window).width() > 991) {
		$("nav.th-nav-st1 li.th-nav-item.has-dropdown").hover(
			function () {
				$(this).find("ul.th-dropdown-list").fadeIn();
			},
			function () {
				$(this).find("ul.th-dropdown-list").hide();
			}
		);
	} else {
		$("nav.th-nav-st1 li.th-nav-item.has-dropdown").on("click", function () {
			$(this)
				.find("ul.th-dropdown-list")
				.slideToggle()
				.parent()
				.siblings()
				.find("ul.th-dropdown-list")
				.slideUp();
		});
	}
	// Toggle Navbar
	$("#nav_toggler").on("click", function () {
		$("body").toggleClass("navbar-activated");
		if ($("nav.th-nav-st1").css("position") === "relative") {
			$("nav.th-nav-st1").css({ position: "fixed" });
		} else {
			$("nav.th-nav-st1").css({ position: "relative" });
		}
	});
	// Typing Function
	function typing() {
		var typed = new Typed(".type", {
			strings: ["HTML", "Bootstrap", "CSS", "JavaScript", "PHP"],
			typeSpeed: 60,
			backSpeed: 60,
			loop: true,
		});
	}
	//Execute on document ready
	$(document).ready(function () {

			//Author Page(Tab Navigation)
		// Show the first tab and hide the rest
		$(".navig ul li:first-child").addClass("active");
		$(".tab").hide();
		$(".tab:first").show();

		// Click function
		$(".navig ul li").click(function () {
			$(".navig ul li").removeClass("active");
			$(this).addClass("active");
			$(".tab").hide();

			var activeTab = $(this).find("a").attr("href");
			$(activeTab).fadeIn();
			return false;
		});
		
  // ----------Weather Section(News Page)------------------
	 // Get Location
	 navigator.geolocation.getCurrentPosition(success, error);

	 function success(pos) {
		 var lat = pos.coords.latitude;
		 var long = pos.coords.longitude;
		 weather(lat, long);
	 }
 
	 function error() {
		 console.log('There was an error');
	 }
 
	 // Call Weather
	 function weather(lat, long) {
		 var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
 
		 $.getJSON(URL, function(data) {
			 updateDOM(data);
		 });
	 }
 
	 // Update Dom
	 function updateDOM(data) {
		 var city = data.name;
		 var temp = Math.round(data.main.temp);
		 var temphi = Math.round(data.main.temp_max);
		 var desc = data.weather[0].description;
		 var icon = data.weather[0].icon;
		 var wind = Math.abs(data.wind.speed) + " Mph";
		 var pres = Math.round(data.main.pressure) + " Bar";
		 var humid = Math.round(data.main.humidity) + " %";
		 var info = data.weather.main;
		 
 
		 $('#city').html(city);
		 $('#temp').html(temp);
		 $('#temphi').html(temphi);
		 $('#desc').html(desc);
		 $('#wind').html(wind);
		 $('#pres').html(pres);
		 $('#humid').html(humid);
		 $('#info').html(info);
		 $('#icon').attr('src', icon);
	 }
		//Slideshow With Swiper.js
			var mySwiper = new Swiper(".swiper-container", {
				loop: true,
				autoplay: true,
				speed: 800,
				slidesPerView: "auto", // or 'auto'
				// spaceBetween: 10,
				centeredSlides: true,
				effect: "coverflow", // 'cube', 'fade', 'coverflow',
				coverflowEffect: {
					rotate: 0, // Slide rotate in degrees
					stretch: 0, // Stretch space between slides (in px)
					depth: 0, // Depth offset in px (slides translate in Z axis)
					modifier: 2, // Effect multipler
					slideShadows: true, // Enables slides shadows
				},
				grabCursor: true,
				parallax: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				//breakpoints: {
				//991: {
				// effect: 'fade',
				//	slidesPerView: 2,
				// spaceBetween: 0
				//},
				//650: {
				// effect: 'fade',
				//	slidesPerView: 1,
				// spaceBetween: 0
				//},
				//},
				// Events
			});
			$(".swiper-slide").on("mouseenter", function (e) {
				mySwiper.autoplay.stop();
			});
			$(".swiper-slide").on("mouseleave", function (e) {
				mySwiper.autoplay.start();
			});

	
	});

	//Toggle hide and Show search box when screen Max Width 1000px
	$(".searchButton").click(function () {
		if ($("#searchCheck").prop("checked") == false && $(window).width() < 991) {
			$("#searchCheck").prop("checked", true);
			$(".search").css({ marginTop: "0" });
		} else {
			$("#searchCheck").prop("checked", false);
			$(".search").css({ marginTop: "-4rem" });
		}
	});

	$(".searchInput").mouseenter(function () {
		if ($(".searchInput").val().length > 0) {
			$(".searchInput").css({ width: "240px" });
		}
	});

	// switch between Light and Dark mode
	function too() {
		$("body").toggleClass("dark");
		if ($(".dark")[0]) {
			$("#chk").prop("checked", true);
		} else {
			$("#chk").prop("checked", false);
		}
	}

	$(".label").click(function () {
		too();
	});
	$(".moon").click(function () {
		too();
	});
	$(".sun").click(function () {
		too();
	});
	// typing text animation script
	$(function () {});
})(jQuery);
