// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    //debugger;
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.currentSongView = new CurrentSongView({model: this.model.get('currentSong')});

    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
      this.currentSongView.setSong(model.get('currentSong'));
      this.libraryView.render();
    }, this);
    this.model.on('enqueue', function(){songQueueView.render();}, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.currentSongView.$el,
      this.songQueueView.$el
    ]);
  }
});
