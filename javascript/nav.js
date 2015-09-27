var Navigation = function() {
  var that = this;

  this.init = function() {
    var pageName = window.location.hash.replace('#','');
    this.changePage(pageName);

    $('a.page').click(function(e) {
      e.preventDefault();
      var pageName = $(e.target).attr('class').replace('page ','');
      that.changePage(pageName);
    });

    this.expandMenu();
  };

  this.changePage = function(pageName) {
    var fileName = '/pages/'+pageName+'.html';
    window.location.hash = pageName;

    $("#page-load").load(fileName, function() {
      if (pageName.indexOf('music') > -1) { 
        var media = new Media(); 
      }
    });
  };


  this.expandMenu = function() {
    $('nav .expand').click(function() {
      $('nav ul').toggleClass('expanded');
    });

    $('nav li').click(function() {
      if (isMobile()) {
        $('nav ul').removeClass('expanded');
      }
    });
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

    page.find('header').css('margin-top', '-1000px');
    page.find('header').animate({
      'margin-top': '22%'
    }, 1000);

    page.find('footer').hide();
    page.find('.content').css('margin-top', '60vh').hide();

    setTimeout(function() {
      page.find('.content').show().animate({
        'margin-top': '0'
      }, 900);
      page.find('footer').show();
    },1200);
  };

  this.init();  
};

function isMobile() {
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

  if (window.innerWidth <= 700 && window.innerHeight <= 800) {
    resolution = true;
  }
  
  return userAgent || resolution;
}
