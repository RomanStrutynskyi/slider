'use strict';

export default class Slider {
  constructor() {
    this.slideWrap = '.slider__wrap';
    this.slideImg = '.slider__img';
    this.imgSelector = '.img';
    this.arrPrev = '.js-prev';
    this.arrNext = '.js-next';
    this.listSelector = '.item__list';
    this.init();
    
  }

  init(){
    let sliderNumber = 1;
    let slideCount = $(this.imgSelector).length;
    let translateWidth = 0;
    let widthWrap = $(this.slideWrap ).css("width","calc(100% * " + slideCount + ")");
    let widthImg = $(this.imgSelector ).css("width","calc(100% / " + slideCount + ")");


        
        if(slideCount > 2){
            
            var addId=slideCount
        for (var i=0; i<slideCount; i++){
            $("ul").prepend('<li class="item__list" id="carousel'+addId+'"></li>');
             addId = addId - 1; 
        }
        }else{
            
        }      
        var clicked = 0;
        $('.item__list').click(function(){
            let findIdClicked = $(this).attr("id");
            let splitString = findIdClicked.split("carousel")	
            let findTheNumb = splitString[1];
            $('.item__list').removeClass('active');
            $(this).addClass('active');
            clicked = parseInt(findTheNumb);
                translateWidth = -$('.slider').width() * (findTheNumb-1);

            $('.slider__wrap').css({    
                'transform': 'translate(' + translateWidth + 'px, 0)',
            });
        })
        $(".item").find("li").first().addClass("active");	
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
        $('.item__list').removeClass('active');
        $('#carousel'+sliderNumber).addClass('active');
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
        $('.item__list').removeClass('active');
        $('#carousel'+sliderNumber).addClass('active');
    });
  }
}
