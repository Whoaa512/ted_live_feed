var feedEntries = new FeedList();

google.load("feeds", "1"); // Load the feed api

function feedLoaded() {
  var tedFeed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  tedFeed.includeHistoricalEntries();
  tedFeed.setNumEntries(300);

  tedFeed.load(function(result) {
    if (!result.error) {
      result.feed.entries.forEach(function(entry, key, list) {
        feedEntries.add(entry);
      });
    } else { console.log(result.error); }

    var app = new App({feedList: feedEntries});
    var appView = new AppView({model: app});

  });
}

google.setOnLoadCallback(feedLoaded);
