var AppView = Backbone.View.extend({
  el: $('div#feed'),

  initialize: function() {
    this.model.get('feedList').on('change:itemClicked', function(itemModel) {
      // set modal div to new detailView({model: itemModel});
      // show the modal div
    }, this);
    _.bindAll(this, 'render');
    this.render();
  },

  render: function() {
    var feedList = this.model.get('feedList');
    return this.$el.html(
      feedList.map(function(item, index) {
        if (index !== 0 && (index+1) % 3 === 0) {
          var lastThird = new ItemView({model: item});
          lastThird.$el.addClass('last');
          return lastThird.render();
        } else {
          return new ItemView({model: item}).render();
        }
      })
    );
  }
});
