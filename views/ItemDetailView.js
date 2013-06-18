var ItemDetailView = Backbone.View.extend({
  template: _.template(
    "<div class='overlay'><div class='details-modal'>"+
      "<p><img class='thumbnail-main' src='<%= thumbnail %>'/>"+
      "<h3><%= title %></h3></p>"+
      "<p><%= publishedDate %> - <%= category %></p>"+
      "<p><%= tedLink %></p>"+
      "<p><%= description %></p>"+
    "</div></div>"
  ),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
