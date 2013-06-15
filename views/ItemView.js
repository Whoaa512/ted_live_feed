var ItemView = Backbone.View.extend({
  className: 'one_third',

  template: _.template(
    "<img class='thumbnail-main' src='<%= thumbnail %>'/>"+
    "<p><%= title %> - <%= publishedDate %></p>"+
    "<p><%= teaser %></p>"),

  render: function() {
    return this.$el.append(this.template(this.model.attributes));
  }

});
