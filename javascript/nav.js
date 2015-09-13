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

}
