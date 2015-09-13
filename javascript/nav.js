var Navigation = function() {
  var that = this;

  this.init = function() {  
    $('a.page').click(function(e) {
      console.log('click page')
      e.preventDefault();
      that.changePage(e);
    });
  };

  this.changePage = function(e) {
    
    console.log($(e.target).attr('class'))
  };

  this.init();

};


var Effects = function() {
  var that = this;

  this.init = function() {  
    this.homepage();
  };

  this.homepage = function() {
    var page = $('.wrapper.home');

    page.find('header').css('margin-left', '3000px');
    page.find('.content').css('margin-top', '60vh').hide();
    page.find('footer').hide();

    page.find('header').animate({
      'margin-left': '15%'
    }, 1000);

    setTimeout(function() {
      page.find('.content').show().animate({
        'margin-top': '0'
      }, 900);
      page.find('footer').show();
    },1200);
  };

  this.init();  
};
