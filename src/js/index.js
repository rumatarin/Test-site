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
	
	
	///////////////////////////////////////////////////////////////////////
	//Slider
	// class someSlider {
	//
	// 	constructor() {
	// 		this.sliderImage = $('.slider__img');
	// 		this.sliderDot = $('.js__slider__dot');
	// 		this.sliderDots = $('.js__slider__dots');
	// 		this.sliderDotActive = $('.slider__dot--active');
	// 		this.sliderItem = $('.slider__item');
	// 		this.btnLeft = $('.slider__btn--left');
	// 		this.btnRight = $('.slider__btn--right');
	// 		this.sliderSpeed = 5000;
	// 		this.lastElement = this.sliderDot.length - 1;
	// 	}
	//
	// 	init() {
	// 		this.getDots();
	//
	// 		this.addActive();
	//
	// 		this.events();
	// 	}
	//
	// 	events () {
	// 		this.btnLeft.on('click', e => this.slideLeft(e));
	// 		this.btnRight.on('click', e => this.slideRight(e));
	// 		this.sliderDot.on('click', e => this.dotClick(e));
	// 	}
	//
	// 	getDots() {
	// 		this.sliderImage.each( function () {
	// 			this.sliderDots.append('<li class="slider__dot js__slider__dot"></li>');
	// 		});
	// 	}
	//
	// 	addActive() {
	// 		this.sliderDot.first().addClass('slider__dot--active');
	// 		this.sliderItem.first('slider--active');
	// 	}
	//
	// 	sliderResponse(sliderTarget) {
	// 		this.sliderItem.removeClass('slider--active').eq(sliderTarget).addClass('slider--active');
	// 		this.sliderDot.removeClass('slider__dot--active').eq(sliderTarget).addClass('slider__dot--active');
	// 	}
	//
	// 	dotClick () {
	// 		if (!this.sliderDot.hasClass('slider__dot--active')) {
	// 			let sliderTarget = $(this).index();
	// 			this.sliderResponse(sliderTarget);
	// 		}
	// 		this.resetTime();
	// 	}
	//
	// 	slideLeft () {
	// 		let sliderTarget = this.sliderDotActive.index();
	// 		sliderTarget === 0 ? sliderTarget = this.lastElement : sliderTarget = sliderTarget - 1;
	// 		this.sliderResponse(sliderTarget);
	// 		this.resetTime();
	// 	}
	//
	// 	slideRight() {
	// 		let sliderTarget = this.sliderDotActive.index();
	// 		sliderTarget === this.lastElement ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
	// 		this.sliderResponse(sliderTarget);
	// 		this.resetTime();
	// 	}
	//
	// 	autoPlay() {
	// 		let sliderTarget = $('.slider__dot--active').index();
	// 		sliderTarget === this.lastElement ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
	// 		this.sliderResponse(sliderTarget);
	// 	}
	//
	// 	sliderTiming() {
	// 		setInterval( () => {
	// 			this.autoPlay();
	// 		}, this.sliderSpeed);
	// 	}
	//
	// 	resetTime() {
	// 		clearInterval(this.sliderTiming);
	// 		setInterval( () => {
	// 			this.autoPlay();
	// 		}, this.sliderSpeed);
	// 	}
	// }
	const sliderSome = new someSlider();
	sliderSome._sliderTiming();
	
	// let sliderImage = $('.slider__img');
	//
	// sliderImage.each(function () {
	// 	$('.js__slider__dots').append('<li class="slider__dot js__slider__dot"></li>');
	//
	// });
	//
	//
	// let sliderDot = $('.js__slider__dot');
	// let sliderItem = $('.slider__item');
	// let btnLeft = $('.slider__btn--left');
	// let btnRight = $('.slider__btn--right');
	// let speed = 5000;
	// let lastElm = sliderDot.length - 1;
	// let sliderTarget;
	//
	//
	// sliderDot.first().addClass('slider__dot--active');
	// sliderItem.first().addClass('slider--active');
	//
	// function sliderResponse(sliderTarget) {
	// 	sliderItem.removeClass('slider--active').eq(sliderTarget).addClass('slider--active');
	// 	sliderDot.removeClass('slider__dot--active').eq(sliderTarget).addClass('slider__dot--active');
	// }
	//
	// sliderDot.on('click', function(e) {
	// 	if (!$(this).hasClass('slider__dot--active')) {
	// 		sliderTarget = $(this).index();
	// 		sliderResponse(sliderTarget);
	// 		resetTime();
	// 	}
	// });
	//
	// btnLeft.on('click', () => {
	// 	sliderTarget = $('.slider__dot--active').index();
	// 	sliderTarget === 0 ? sliderTarget = lastElm : sliderTarget = sliderTarget - 1;
	// 	sliderResponse(sliderTarget);
	// 	resetTime();
	// });
	//
	// btnRight.on('click', () => {
	// 	sliderTarget = $('.slider__dot--active').index();
	// 	sliderTarget === lastElm ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
	// 	sliderResponse(sliderTarget);
	// 	resetTime();
	// });
	//
	// function sliderAutoPlay() {
	// 	sliderTarget = $('.slider__dot--active').index();
	// 	sliderTarget === lastElm ? sliderTarget = 0 : sliderTarget = sliderTarget + 1;
	// 	sliderResponse(sliderTarget);
	// }
	//
	// let sliderTiming = setInterval(() => {
	// 	sliderAutoPlay();
	// }, speed);
	//
	// function resetTime() {
	// 	clearInterval(sliderTiming);
	// 	sliderTiming = setInterval(() => {
	// 		sliderAutoPlay();
	// 	}, speed);
	// }
	
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


