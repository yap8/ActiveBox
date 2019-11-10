// Smooth scroll
function smoothScroll() {
	$('.js-smooth-scroll').on('click', function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});
}
smoothScroll();

// Navbar
function navbar() {
	const button = document.querySelector('.header__toggle');
	const nav = document.querySelector('.header__nav');
	const links = document.querySelectorAll('.header__nav-link');

	function toggleNav() {
		nav.classList.toggle('header__nav--active');
	}

	links.forEach(link => {
		link.addEventListener('click', function() {
			nav.classList.remove('header__nav--active');
		});
	});
	button.addEventListener('click', toggleNav);
}
navbar();

// Carousel
function carousel() {
	const photoItems = document.querySelectorAll('.testimonials__photo-item');
	const feedbackItems = document.querySelectorAll('.testimonials__feedback-item');
	const buttons = document.querySelectorAll('.testimonials__button');
	
	function slide() {
		const index = this.dataset.index;
		buttons.forEach((item, i) => {
			photoItems[i].className = 'testimonials__photo-item';
			feedbackItems[i].className = 'testimonials__feedback-item';
			buttons[i].className = 'testimonials__button';
			if (i === parseInt(index)) {
				photoItems[i].classList.add('testimonials__photo-item--active');
				feedbackItems[i].classList.add('testimonials__feedback-item--active');
				buttons[i].classList.add('testimonials__button--active');
			}
		});
	}
	
	buttons.forEach(button => {
		button.addEventListener('click', slide);
	});
}
carousel();
