// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {
    'ended': 'endOfSong'
  },

  initialize: function() {
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },
  
  endOfSong: function () {
    //debugger;
    this.model.ended();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
