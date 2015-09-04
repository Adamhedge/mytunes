// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  className: "table table-striped table-hover",

  initialize: function() {
    this.render();
    this.collection.on('songQueueRender', function(){this.render();}, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  playNextSong: function () {
    this.model.playFirst();
  }
});
