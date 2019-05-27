import "./../sass/main.scss";
// import "bootstrap";
import "jquery";
import $ from "jquery";
import someSlider from "./slider.js";
import scrollTo from "./scroll.js";
import mobileMenu from "./mobileMenu.js";

window.jQuery = $;
window.$ = $;



$(function () {
	
	const scrollBtn = $('[data-scroll]');
	
	////////////////////////////////////////////////////////////////////////
	//Little mobile menu for mobile resolution and other viewport
	mobileMenu();
	////////////////////////////////////////////////////////////////
	
	
	
	const sliderSome = new someSlider();
	sliderSome._sliderTiming();
	
	
	
	///////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////
	//Modal window
	let modal = $('.modal');
	
	modal.html(
		'<div class="modal__overlay"></div>\n' +
		'<div class="modal__for-text">\n' +
		'     <a href="#" class="modal__btn">\n' +
		'     </a>\n' +
		'</div>\n' +
		'<div class="modal__for-img">\n' +
		'     <img src="" class="modal__img"> ' +
		'     <a href="#" class="modal__btn">\n' +
		'     </a>\n' +
		'</div>'
	);
	
	
	let modalBtn = $('.modal__btn');
	let infoBtn = $('.js__info-link');
	let zoomBtn = $('.js__zoom-link');
	let textModal = $('.modal__for-text');
	let imgModal = $('.modal__for-img');
	let overlay = $('.modal__overlay');
	
	textModal.hide();
	imgModal.hide();
	modal.hide();
	
	overlay.on('click', function() {
		if ($('.modal__overlay:visible')) {
			textModal.fadeOut(300);
			imgModal.fadeOut(300);
			modal.fadeOut(300);
		}
	});
	
	infoBtn.on('click', (e) => {
		e.preventDefault();
		textModal.fadeIn(300);
		modal.fadeIn(300);
	});
	
	$('.gallery__item').on('click', '.js__zoom-link', function(e) {
		
		let img = $('.modal__img');
		let imgSrc = $(e.delegateTarget).find('.gallery__img').attr('src');
		
		console.log(imgSrc);
		
		e.preventDefault();
		imgModal.fadeIn(300);
		modal.fadeIn(300);
		
		img.attr('src', imgSrc);
	});
	
	modalBtn.on('click', (e) => {
		e.preventDefault();
		textModal.fadeOut(300);
		imgModal.fadeOut(300);
		modal.fadeOut(300);
	});
	
	//////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////////////////////////////////////////
	//  Scroll to element
	scrollBtn.on('click', scrollTo);
	//////////////////////////////////////////////////////////////////////
	
});


