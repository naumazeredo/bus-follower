Route = class Route {
    constructor() {
        this.buses = []
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

    draw() {
        $.each(this.buses, function(_, bus) {
            bus.draw();
        })
    }
}

curRoute = new Route();
