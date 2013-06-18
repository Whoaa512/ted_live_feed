var ItemDetailView = Backbone.View.extend({
  template: _.template(
    "<div class='modal-header'>"+
      "<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"+
      "<p><img class='thumbnail-main' src='<%= thumbnail %>'/>"+
      "<h3><a href='<%= tedLink %>'><%= title %></a></h3></p>"+
      "<p><%= publishedDate %> - <%= category %></p>"+
    "</div>"+
    "<div class='modal-body'>"+
      "<p><%= description %></p>"+
    "</div>"+
    "<div class='modal-footer'>"+
      "<a href='#' data-dismiss='modal' class='btn btn-inverse'>Close</a>"+
    "</div>"
  ),

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
