var ItemView = Backbone.View.extend({
  className: 'span4',

  template: _.template(
    "<img class='thumbnail-main' src='<%= thumbnail %>'/>"+
    "<p><%= title %> - <%= publishedDate %></p>"+
    "<p><%= teaser %></p>"),

  render: function() {
    return this.$el.append(this.template(this.model.attributes));
  }

});
