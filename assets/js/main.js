// Реализация бургер меню
$(document).ready(function(){
	$('.header-navbar__btn').click(function(){
		$(this).toggleClass('active');
		$('.navbar').stop(true, true).fadeToggle(500);
	});
});





// Реализация звездного рейтинга в процентах
const ratings = document.querySelectorAll('.show-rating');

if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive;
  let ratingValue;
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('show-rating')) {
      setRating(rating);
    }
  }
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.show-rating__active');
    ratingValue = rating.querySelector('.show-rating__value');
  }
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index/0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.show-rating__item');
    console.log(ratingItems)
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      console.log(ratingItem)
      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidth();
      });
      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        ratingValue.innerHTML = index + 1;
        setRatingActiveWidth();
      });
    }
  }
}


// Реализация слайдера

let SL = {}

SL.listSlide = document.querySelectorAll('.slider');
SL.listSlideStart = 0;
SL.listSlideCurrent = 0;
SL.listSlideAll = SL.listSlide.length;
SL.backGo = function (event) {
    event.preventDefault();
    if (SL.listSlideCurrent > 0) {
        SL.listSlide[SL.listSlideCurrent].setAttribute('class', 'slider');
        document.querySelectorAll('.emotion-number')[SL.listSlideCurrent].setAttribute('class', 'emotion-number');
        SL.listSlideCurrent--;
        SL.listSlide[SL.listSlideCurrent].setAttribute('class', 'slider show');
        document.querySelectorAll('.emotion-number')[SL.listSlideCurrent].setAttribute('class', 'emotion-number active');
    }
    console.log(SL.listSlideCurrent)
}
SL.forwardGo = function (event) {
    event.preventDefault();
    if (SL.listSlideCurrent < SL.listSlideAll - 1) {
        SL.listSlide[SL.listSlideCurrent].setAttribute('class', 'slider');
        document.querySelectorAll('.emotion-number')[SL.listSlideCurrent].setAttribute('class', 'emotion-number');
        SL.listSlideCurrent++;
        SL.listSlide[SL.listSlideCurrent].setAttribute('class', 'slider show');
        document.querySelectorAll('.emotion-number')[SL.listSlideCurrent].setAttribute('class', 'emotion-number active');
    }
    if (SL.listSlideCurrent === SL.listSlideAll - 1) {
        SL.listSlideCurrent = SL.listSlideAll - 1
        console.log(SL.listSlideCurrent)
        return true;
    }
    console.log(SL.listSlideCurrent)
};
SL.setEmotion = function () {
    SL.listSlide[SL.listSlideCurrent].setAttribute('class', 'slider');
    document.querySelectorAll('.emotion-number')[SL.listSlideCurrent].setAttribute('class', 'emotion-number');
    SL.listSlide[this.getAttribute('data-counter')].setAttribute('class', 'slider show');
    SL.listSlideCurrent = this.getAttribute('data-counter');
    document.querySelectorAll('.emotion-number')[SL.listSlideCurrent].setAttribute('class', 'emotion-number active');
    console.log(SL.listSlideCurrent)
}
document.querySelector('.back-go').addEventListener("click", SL.backGo, false);
document.querySelector('.forward-go').addEventListener("click", SL.forwardGo, false);
SL.setEmotion.allEl = document.querySelectorAll('.emotion-number');
for (let i = 0; i < SL.setEmotion.allEl.length; i++) {
    SL.setEmotion.allEl[i].addEventListener("click", SL.setEmotion, false);
}
SL.images = document.querySelectorAll('.port');
SL.pointers = document.querySelectorAll('.emotion-number');
for (let n = 0; n < SL.setEmotion.allEl.length; n++) {
    SL.pointers[n].setAttribute('src', SL.images[n].getAttribute('src'));
}


