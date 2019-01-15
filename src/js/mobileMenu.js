

export default function mobileMenu() {
	let $btn = $('.nav__mobile-btn');
	let $list = $('.nav__mobile-list');
	
	$btn.on('click', (e) => {
		e.preventDefault();
		
		$btn.toggleClass('nav__mobile-btn--active');
		$list.toggleClass('nav__mobile-list--active');
	});
}