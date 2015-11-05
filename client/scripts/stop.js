Stop = class Stop {
    constructor(data) {
        this.lat = parseFloat(data.latitude)
        this.lng = parseFloat(data.longitude)
    }

    draw() {
        this.erase()

        this.marker = new google.maps.Marker({
            position: { lat: this.lat, lng: this.lng },
            map: GoogleMaps.maps.map.instance,
            icon: {
                url: "busstop.png",
                rotation: this.dir,
                scaledSize: new google.maps.Size(15, 15),
                zIndex: 2,
            }
        });
    }

    erase() {
        if (this.marker) {
            this.marker.setMap(null);
        }
    }
}