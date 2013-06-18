var AppView = Backbone.View.extend({
  el: $('div#feed'),

  initialize: function() {
    this.model.get('feedList').on('itemClicked', function(itemModel) {
      // set modal div to new detailView
      $('div#detailsModal').html(new ItemDetailView({model: itemModel}).render());
      // show the modal div
      $('div#detailsModal').modal();
    });

    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    var feedList = this.model.get('feedList');
    return this.$el.html(
      feedList.map(function(item, index) {
        return new ItemView({model: item}).render();
      })
    );
  }
});
