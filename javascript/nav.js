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

    $(".wrapper").load(fileName);
    window.history.pushState({
      "html": fileName
    }, "" , pageName);

    if (pageName === 'music') {
      var media = new Media();
    }
  };

  this.detectPage = function() {
    console.log('detect page')
    var pathName = window.location.pathname;

    if (pathName !== '/') {
      window.location = '/';
      this.changePage(pathName.replace('/',''));
    }
  };

  this.isMobile = function() {
    var userAgent = false, resolution = false;
    if ( navigator.userAgent.match(/Android/i) || 
        navigator.userAgent.match(/webOS/i) || 
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i) ) {
      userAgent = true;
    }

    if (window.innerWidth <= 700 && window.innerHeight <= 500) {
      resolution = true;
    }
    
    return userAgent || resolution;
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
