

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		wide: ['961px', '1880px'],
		normal: ['961px', '1620px'],
		narrow: ['961px', '1320px'],
		narrower: ['737px', '960px'],
		mobile: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Nav.
	var $nav_a = $nav.find('a');

	$nav_a
		.addClass('scrolly')
		.on('click', function (e) {

			var $this = $(this);

			// External link? Bail.
			if ($this.attr('href').charAt(0) != '#')
				return;

			// Prevent default.
			e.preventDefault();

			// Deactivate all links.
			$nav_a.removeClass('active');

			// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
			$this
				.addClass('active')
				.addClass('active-locked');

		})
		.each(function () {

			var $this = $(this),
				id = $this.attr('href'),
				$section = $(id);

			// No section for this link? Bail.
			if ($section.length < 1)
				return;

			// Scrollex.
			$section.scrollex({
				mode: 'middle',
				top: '-10vh',
				bottom: '-10vh',
				initialize: function () {

					// Deactivate section.
					$section.addClass('inactive');

				},
				enter: function () {

					// Activate section.
					$section.removeClass('inactive');

					// No locked links? Deactivate all links and activate this section's one.
					if ($nav_a.filter('.active-locked').length == 0) {

						$nav_a.removeClass('active');
						$this.addClass('active');

					}

					// Otherwise, if this section's link is the one that's locked, unlock it.
					else if ($this.hasClass('active-locked'))
						$this.removeClass('active-locked');

				}
			});

		});

	// Scrolly.
	$('.scrolly').scrolly();

	// Header (narrower + mobile).

	// Toggle.
	$(
		'<div id="headerToggle">' +
		'<a href="#header" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Header.
	$('#header')
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'header-visible'
		});

})(jQuery);



//페이지 이동
	function goToPage2() {
	window.location.href = "skills.html";
}
function goToPage3() {
	window.location.href = "projectTeam.html";
}

function goToPage4() {
	window.location.href = "projectVacc.html";
}


function goBack() {
	window.history.back();
}


//슬라이드 이미지
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	let i;
	const slides = document.getElementsByClassName("slide");

	// 처음부터 다시 시작
	if (n > slides.length) {
		slideIndex = 1;
	}
	// 끝에서 다시 시작
	if (n < 1) {
		slideIndex = slides.length;
	}
	// 모든 슬라이드를 숨김
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	// 현재 슬라이드를 보임
	slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
	showSlides(slideIndex += n); // plusSlides 함수에서 인자를 전달하여 showSlides 함수 호출
}