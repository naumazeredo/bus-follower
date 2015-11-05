Route = class Route {
    constructor() {
        this.buses = []
        this.stops = []
    }

    updateBuses(jsonData) {
        $.each(this.buses, function(_, bus) {
            bus.erase()
        })

        this.buses = []

        for (var i = 0; i < jsonData.length; i++) {
            var bus = new Bus(jsonData[i])
            this.buses.push(bus)
        }

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

    draw() {
        $.each(this.buses, function(_, bus) {
            bus.draw();
        })
    }
}

curRoute = new Route();
