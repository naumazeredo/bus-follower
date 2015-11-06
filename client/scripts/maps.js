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
