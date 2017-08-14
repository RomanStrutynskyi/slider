'use strict';

export default class Tabby {
  constructor() {
    this.rootSelector = '.tabby',
    this.tabSelector = '.tabby__tab';
    this.tabActiveClass = 'tabby__tab--active';
    this.contentSelector = '.tabby__content';
    this.tabDisabledClass = 'tabby__tab--disabled';
    this.initTabby();
  }
  initTabby () {
      let self = this;
    $(this.tabSelector).on('click', function() {
      self.showContent(this);
    });
    this.hideContents(this.tabSelector);
    // Show active
    this.showActiveContent(self);
};
showActiveContent (tab) {
    $('.' + tab.tabActiveClass).each(function(index, item) {
      let activeTab = $(item).data('tab');
      let content = $(item)
        .closest(tab.rootSelector)
        .find(tab.contentSelector + '[data-tab=' + activeTab + ']');
      $(content).show();
    });
  }

  showContent(btn) {
    let btnData = $(btn).data('tab');
    let content = $(btn)
      .closest(this.rootSelector)
      .find(this.contentSelector + '[data-tab=' + btnData + ']');
    this.hideContents(btn);
    this.cleanActive(btn);
    $(btn).addClass(this.tabActiveClass);
    $(content).fadeIn();

  }

  cleanActive (btn) {
    let buttons = $(btn).closest(this.rootSelector).find(this.tabSelector);
    $(buttons).removeClass(this.tabActiveClass);
  }
  
  hideContents(btn) {
    let contents = $(btn).closest(this.rootSelector).find(this.contentSelector);
    $(contents).hide();
  }
  




}

