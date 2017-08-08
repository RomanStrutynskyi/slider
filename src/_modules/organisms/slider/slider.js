'use strict';

export default class Slider {
  constructor() {
    this.arrPrev = '.js-prev';
    this.arrNext = '.js-next';
    this.init();
  }

  init(){
    var sliderNumber = 1;
    var slideCount = $('.slider__img').children().length;
    $(this.arrPrev).click(() => {
      this.prev();
    });
    $(this.arrNext).click(() => {
      this.next();
    });
  }
  next(){
    if (sliderNumber == slideCount || sliderNumber <= 0 || sliderNumber > slideCount){
      
    }
  }
}
