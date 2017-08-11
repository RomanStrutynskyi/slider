'use strict';

export default class RangleTabs {
  constructor() {
    this.name = 'rangle-tabs';
    this.initTab();
  }
  initTab(){
    $('.tabby__tab').click(function(e){
          $(document).ready(function(){ 
        $(this).tab('show');
      });
    });
            // let findDataTab = $(this).attr("data-tab");

            // let findDataContent = $('.tabby__content').attr("data-tab");

            // if (findDataTab != findDataContent ){
            //     findDataContent = findDataTab

            //   $('.tabby__tab').removeClass('tabby__tab--active');
            //   $(this).addClass('tabby__tab--active');
            
            // }else{
              
            // }
            //               console.log(findDataTab)
            // console.log(findDataContent + '  content')
            // let splitString = findIdClicked.split("carousel")	
            // let findTheNumb = splitString[1];
            // $('.item__list').removeClass('active');
            // $(this).addClass('active');
            // clicked = parseInt(findTheNumb);
            //     translateWidth = -$('.slider').width() * (findTheNumb-1);

            // $('.slider__wrap').css({    
            //     'transform': 'translate(' + translateWidth + 'px, 0)',
            // });
        
  }
}
