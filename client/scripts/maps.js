Template.body.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(-22.9518, -43.2105),
        zoom: 13
      };
    }
  }
});

/*
Template.body.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
*/
