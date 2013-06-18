var ItemView = Backbone.View.extend({
  className: 'span4',

  events: {
    "click": function() {
      // trigger event on the model to show details view
      this.model.details();
    }
  },

  template: _.template(
    "<img class='thumbnail-main' src='<%= thumbnail %>'/>"+
    "<p><%= title %> - <%= publishedDate %></p>"+
    "<p><%= teaser %></p>"),

  render: function() {
    return this.$el.append(this.template(this.model.attributes));
  }

});
