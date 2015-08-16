// id cfe74025285ef347e8a581f93104a4a6
// secret 2cf80de915409b1f668f9b41c524d4c1

// Get all tracks from user
// curl https://api.soundcloud.com/users/mizzjudymai/tracks?client_id=cfe74025285ef347e8a581f93104a4a6

var Media = function() {
  
  this.init = function() {
    this.getCollection('tracks', $('.track-list'), 'embedSoundcloud');
    this.getCollection('videos', $('.video-list'), 'embedYoutube');
  };

  this.populateCollection = function(item, list, callbackName) {
    var that = this;
    var itemLi = $('<li>').html(item.name).attr('data-id',item.id).
                 addClass('track');
    list.append(itemLi);
    console.log(list) 
    itemLi.click(function(e) {      
      that[callbackName](item.id);
    });
  };

  this.getCollection = function(name, list, callbackName) {
    var that = this;
    var collection = new Firebase('https://judy-mai.firebaseio.com/'+name);
    list.empty();

    collection.on('value', function(snap) {
      for (key in snap.val()) {
        var item = snap.val()[key];
        that.populateCollection(item, list, callbackName);
      }
    });
  };

  this.embedSoundcloud = function(trackId) {
    var src = 'https://w.soundcloud.com/player/?url=',
        trackUrl = 'https://api.soundcloud.com/tracks/'+trackId,
        params = '&auto_play=false&hide_related=false&show_comments=true'+
                 '&show_user=true&show_reposts=false&visual=true';  
    src = src + trackUrl + params;
    $('iframe.soundcloud').attr('src', src);
  };

  this.embedYoutube = function(videoId) {
    var src = '//www.youtube.com/embed/'+videoId;
    $('iframe.youtube').attr('src', src);   
  };

  this.init();
};

var media = new Media();
