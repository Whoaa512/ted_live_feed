var RowView = Backbone.View.extend({
  className: 'row',

  initialize: function(params) {
    _.bindAll(this, 'render');

    if(params.models.length) {
      this.$el.html( // append a new ItemView per model
        _(params.models).map(function(item, key) {
          return new ItemView({model: item}).render();
        })
      );
    }

    this.render();
  },

  render: function() {
    return this.$el;
  }
});
