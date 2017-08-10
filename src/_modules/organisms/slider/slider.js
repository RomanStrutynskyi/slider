'use strict';

export default class Slider {
  constructor() {
    this.slideWrap = '.slider__wrap';
    this.slideImg = '.slider__img';
    this.imgSelector = '.img';
    this.arrPrev = '.js-prev';
    this.arrNext = '.js-next';
    // this.listSelector = '.item__list';
    this.init();
    
  }

  init(){
    let sliderNumber = 1;
    let slideCount = $(this.imgSelector).length;
    let translateWidth = 0;
    let widthWrap = $(this.slideWrap ).css("width","calc(100% * " + slideCount + ")");
    let widthImg = $(this.imgSelector ).css("width","calc(100% / " + slideCount + ")");
    let listBtn = 0;
    $(document).ready(() =>{
    $('.item__list').click(() => {
        this.listBtn = $(this).index();
console.log(listBtn);
        if ((listBtn + 1) != sliderNumber) {
            console.log(listBtn);
            translateWidth = -$('.slider').width() * (listBtn);
console.log(listBtn);
            $('.slider__wrap').css({    
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });
            sliderNumber = listBtn + 1;
            console.log(sliderNumber + '<=');
        }
    });
});
    $(this.arrPrev).click(() => {
      if (sliderNumber == 1 || sliderNumber <= 0 || sliderNumber > slideCount){
          translateWidth = -$('.slider').width() * (slideCount - 1);
          $('.slider__wrap').css({
              'transform': 'translate(' + translateWidth + 'px, 0)',
          });
          sliderNumber = slideCount;
        } else {
          translateWidth = -$('.slider').width() * (sliderNumber - 2);
          $('.slider__wrap').css({
              'transform': 'translate(' + translateWidth + 'px, 0)'
          });
          sliderNumber--;
        }
    });
    $(this.arrNext).click(() => {
      if (sliderNumber == slideCount || sliderNumber <= 0 || sliderNumber > slideCount){
         $('.slider__wrap').css('transform', 'translate(0, 0)');
        sliderNumber = 1;
    } else {
        translateWidth = -$('.slider').width() * (sliderNumber);
        $('.slider__wrap').css({
            'transform': 'translate(' + translateWidth + 'px, 0)'
        });
        sliderNumber++;
    }
    });
  }
}
