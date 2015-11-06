let instance = null

Route = class Route {
    constructor() {
        if (!instance) {
            instance = this
            this.buses = []
            this.stops = []
            this.path = null
        }
        return instance
    }

    static getInstance() {
        if (!instance) new Route()
        return instance
    }

    updateBuses(data) {
        $.each(this.buses, function(_, bus) {
            bus.erase()
        })

        this.buses = []

        var min_lat = 200, max_lat = -200,
            min_lng = 200, max_lng = -200
        for (var i = 0; i < data.length; i++) {
            var bus = new Bus(data[i])
            if (bus.lat < min_lat) min_lat = bus.lat
            if (bus.lat > max_lat) max_lat = bus.lat
            if (bus.lng < min_lng) min_lng = bus.lng
            if (bus.lng > max_lng) max_lng = bus.lng

            this.buses.push(bus)
            bus.draw()
        }
        this.lat = (min_lat + max_lat) / 2
        this.lng = (min_lng + max_lng) / 2
    }

    drawPath(data) {
        if (!Array.isArray(data))
            throw new TypeError('Entrada com tipo inválido')

        // Remove existing polyline
        if (this.path)
            this.path.setMap(null)

        // Parse data
        var path_coordinates = []
        for(var i=0; i<data.length; i++) {
            var coord = {
                'lat': +data[i].latitude,
                'lng': +data[i].longitude
            };

            if (isNaN(coord.lat) || isNaN(coord.lng))
                throw new TypeError('Entrada com formato inválido')

            path_coordinates.push();
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

    drawStops(data) {
        // Remove existing stops
        $.each(this.stops, function(_, stop) {
            stop.erase()
        })
        this.stops = []

        // Parse data
        for(var i=0; i<data.length; i++) {
            var stop = new Stop(data[i])
            stop.draw()
            this.stops.push(stop)
        }
    }

    recenter() {
        GoogleMaps.maps.map.instance.setCenter(new google.maps.LatLng(this.lat, this.lng))
    }
}
