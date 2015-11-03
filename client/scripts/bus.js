Bus = class Bus {
    constructor(data) {
        this.ord = data[1]
        this.linha = data[2]
        this.lat = data[3]
        this.lng = data[4]
        this.vel = data[5]
        this.dir = data[6]
    }

    draw() {
        this.erase()

        this.marker = new google.maps.Marker({
            position: { lat: this.lat, lng: this.lng },
            icon: icon,
            map: GoogleMaps.maps.map.instance,
        });
    }

    erase() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }
}
