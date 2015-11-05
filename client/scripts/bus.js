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
            map: GoogleMaps.maps.map.instance,
            icon: {
                path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                rotation: this.dir,
                anchor: new google.maps.Point(0, 2.6),
                strokeWeight: 2,
                scale: 4
            }
        });
    }

    erase() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }
}
