google.load("feeds", "1");


function initialize() {
  var feed = new google.feeds.Feed("http://feeds.feedburner.com/tedtalks_video");
  feed.setNumEntries(4);
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");

      result.feed.entries.forEach(function(entry, key, list) {

        // Create `<img>` & set thumbnail src
        var thumbnail = document.createElement('img');
        thumbnail.setAttribute('src', entry.mediaGroups[0].contents[0].thumbnails[0].url);
        thumbnail.setAttribute('class', 'thumbnail-main');

        // Create container feed entry
        var entryDiv = document.createElement("div");
        entryDiv.appendChild(thumbnail);
        entryDiv.appendChild(document.createTextNode(entry.title));
        container.appendChild(entryDiv);
      });
    }
  });
}

google.setOnLoadCallback(initialize);
