let instance = null

Route = class Route {
    constructor() {
        if (!instance) instance = this
        this.buses = []
    }

    static getInstance() {
        if (!instance) new Route()
        return instance
    }

    updateBuses(jsonData) {
        $.each(this.buses, function(_, bus) {
            bus.erase()
        })

        this.buses = []

        var min_lat = 200, max_lat = -200,
            min_lng = 200, max_lng = -200
        for (var i = 0; i < jsonData.length; i++) {
            var bus = new Bus(jsonData[i])
            if (bus.uptodate)
                this.buses.push(bus)
            this.buses.push(bus)
            if (bus.lat < min_lat) min_lat = bus.lat
            if (bus.lat > max_lat) max_lat = bus.lat
            if (bus.lng < min_lng) min_lng = bus.lng
            if (bus.lng > max_lng) max_lng = bus.lng
        }
        this.lat = (min_lat + max_lat) / 2
        this.lng = (min_lng + max_lng) / 2

        this.draw()
    }

    drawPath(path_data) {
        // Remove existing polyline
        if (this.path) this.path.setMap(null)

        // Parse data
        var path_coordinates = []
        for(var i=0; i<path_data.length; i++) {
            path_coordinates.push({'lat': parseFloat(path_data[i].latitude), 'lng': parseFloat(path_data[i].longitude)});
        }

        this.path = new google.maps.Polyline({
            path: path_coordinates,
             geodesic: true,
             strokeColor: '#FF0000',
             strokeOpacity: 0.5,
             strokeWeight: 5,
             zIndex: 1,
             map: GoogleMaps.maps.map.instance,
        });
    }

    recenter() {
        GoogleMaps.maps.map.instance.setCenter(new google.maps.LatLng(this.lat, this.lng))
    }

    draw() {
        $.each(this.buses, function(_, bus) {
            bus.draw();
        })
    }
}
