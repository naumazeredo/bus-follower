describe('Stop', function() {
    beforeEach(function() {
        stop = new Stop({latitude: 0, longitude: 1})
    });

    it('constructor: deve criar com latitude e longitude', function() {
        expect(function(){ new Stop() }).toThrow()
        expect(function(){ new Stop({}) }).toThrow()
        expect(function(){ new Stop({a: 1}) }).toThrow()
        expect(function(){ new Stop({a: 1, b: 2}) }).toThrow()
        expect(function(){ new Stop({a: 1, b: 2, c: 3}) }).toThrow()

        expect(function(){ new Stop({latitude: 1}) }).toThrow()
        expect(function(){ new Stop({longitude: 1}) }).toThrow()

        expect(function(){ new Stop({latitude: 1, longitude: 2}) }).not.toThrow()
        expect(function(){ new Stop({latitude: 1, longitude: 2, c: 3}) }).not.toThrow()

        expect(function(){ new Stop({latitude: "a", longitude: 2}) }).toThrow()
        expect(function(){ new Stop({latitude: 1, longitude: "b"}) }).toThrow()
    });

    it('draw: deve criar um marcador', function() {
        expect(stop.marker).toBe(null)

        stop.draw()
        expect(stop.marker).not.toBe(null)

        var marker = stop.marker
        stop.draw()
        expect(stop.marker).not.toBe(null)
        expect(stop.marker).not.toBe(marker)
    });

    it('erase: deve apagar o marcador', function() {
        stop.draw(); // Adiciona um marcador

        stop.erase();
        expect(stop.marker).toBe(null)

        stop.erase();
        expect(stop.marker).toBe(null)
    });
});
