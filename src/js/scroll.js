function scrollTo() {
	const target = $(this).attr('data-scroll');
	const dist = $(target).offset().top;
	$('html, body').animate({scrollTop: dist}, 1000, 'swing');
}

export default scrollTo;