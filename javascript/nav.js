var Navigation = function() {
  var that = this;

  this.init = function() {
    this.detectPage();

    $('a.page').click(function(e) {
      e.preventDefault();
      var pageName = $(e.target).attr('class').replace('page ','');
      that.changePage(pageName);
    });
  };

  this.changePage = function(pageName) {
    var fileName = 'pages/'+pageName+'.html';
    console.log('change page')

    $(".wrapper").load(fileName);
    document.title = pageName;
    window.history.pushState({
      "html": fileName,
      "pageTitle": pageName
    }, "" , pageName);

  };

  this.detectPage = function() {
    console.log('detect page')
    var pageName = window.location.pathname;

    if (pageName !== '/') {
      window.location = '/';
      this.changePage(pageName);
    }
  }

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
