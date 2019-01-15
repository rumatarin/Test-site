class someSlider {

	constructor() {
		this.$sliderImage = $('.slider__img');
		this.$sliderDots = $('.js__slider__dots');
		this.$sliderItem = $('.slider__item');
		this.$btnLeft = $('.slider__btn--left');
		this.$btnRight = $('.slider__btn--right');
		this.$sliderTarget;
		this._getDots();
		this._addActive();
		this._events();
	}



	_getDots() {
		this.$sliderImage.each(() => {
			this.$sliderDots.append('<li class="slider__dot js__slider__dot"></li>');
		});
		this.$sliderDot = $('.slider__dot');
	}

	_addActive() {
		this.$sliderDot.first().addClass('slider__dot--active');
		this.$sliderItem.first().addClass('slider--active');
	}

	

	_events() {
		this.$btnLeft.on('click', () => this._slideLeft());
		this.$btnRight.on('click', () => this._slideRight());
		this.$sliderDot.on('click', () => this._dotClick());
	}

	_sliderResponse() {
		this.$sliderItem.removeClass('slider--active').eq(this.$sliderTarget).addClass('slider--active');
		this.$sliderDot.removeClass('slider__dot--active').eq(this.$sliderTarget).addClass('slider__dot--active');
	}

	_dotClick() {
		if (!$(this).hasClass('slider__dot--active')) {
			this.$sliderTarget = $(this).index();
			this._sliderResponse(this.$sliderTarget);
			this._resetTime();
		}
	}

	_slideLeft() {
		this.$sliderTarget = $('.slider__dot--active').index();
		this.$sliderTarget === 0 ? this.$sliderTarget = this.$sliderDot.length - 1 : this.$sliderTarget = this.$sliderTarget - 1;
		this._sliderResponse(this.$sliderTarget);
		this._resetTime();
	}

	_slideRight() {
		this.$sliderTarget = $('.slider__dot--active').index();
		this.$sliderTarget === this.$sliderDot.length - 1 ? this.$sliderTarget = 0 : this.$sliderTarget = this.$sliderTarget + 1;
		this._sliderResponse(this.$sliderTarget);
		this._resetTime();
	}

	_autoPlay() {
		this.$sliderTarget = $('.slider__dot--active').index();
		this.$sliderTarget === this.$sliderDot.length - 1 ? this.$sliderTarget = 0 : this.$sliderTarget = this.$sliderTarget + 1;
		this._sliderResponse(this.$sliderTarget);
	}

	_sliderTiming() {
		setInterval(() => {
			this._autoPlay();
		}, 5000);
	}

	_resetTime() {
		
		clearInterval(this._sliderTiming);
		
	}
}

export default someSlider;