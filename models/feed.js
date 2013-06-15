var FeedItem = Backbone.Model.extend({

  initialize: function(params) {
    params = params || {};

    // Create easy access to pertinent data
    this.thumbnail = params.mediaGroups[0].contents[0].thumbnails[0].url;
    this.videoLink = params.mediaGroups[0].contents[0].url;
    this.title = params.title;
    this.tedLink = params.link;
    this.publishedDate = params.publishedDate;
    this.category = params.categories[0];
    this.description = params.content;
    this.teaser = params.contentSnippet;
  }

});

var FeedList = Backbone.Collection.extend({
  model: FeedItem
});
