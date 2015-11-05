google = {
    maps: {
        Marker: function() {
            return { setMap: function() {} }
        },
        Point: function() {},
        Polyline: function() {
            return { setMap: function() {} }
        },
        SymbolPath: { FORWARD_CLOSED_PATH: 0 },
        Size: function() {},
        LatLng: function() {},
    }
}

GoogleMaps = {
    load: function() {},
    loaded: function() {return true},
    maps: {
        map: {
            instance: { setCenter: function() {} }
        }
    }
}
