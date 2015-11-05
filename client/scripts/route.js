Route = class Route {
    constructor() {
        this.buses = []
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

    recenter() {
        GoogleMaps.maps.map.instance.setCenter(new google.maps.LatLng(this.lat, this.lng))
    }

    draw() {
        $.each(this.buses, function(_, bus) {
            bus.draw();
        })
    }
}

curRoute = new Route();
