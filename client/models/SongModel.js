// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0
  },

  play: function() {
    var playCountPlus = this.get('playCount');
    this.set('playCount', playCountPlus+1);
    this.trigger('play', this);
  },

  ended: function () {
    this.trigger('dequeue', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function () {
    this.trigger('dequeue', this);
  }

});
