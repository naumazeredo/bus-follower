describe('Bus', function() {
    beforeEach(function() {
        // Informação obtida pela API do GPS dos ônibus
        // [0] - data e hora
        // [1] - ordem do ônibus (identificador)
        // [2] - linha
        // [3] - latitude
        // [4] - longitude
        // [5] - velocidade
        // [6] - direção
        var data =
            [
                "01-01-2015 00:00:00",
                "A00001",
                1,
                0, 0,
                0.0,
                0.0
            ]
        bus = new Bus(data)
    });

    it('constructor: deve criar usando a lista fornecida', function() {
        // Para testar construtors na esperança, se deve usar anonymous functions
        expect(function() {new Bus()}).toThrow()
        expect(function() {new Bus("a")}).toThrow()
        expect(function() {new Bus([])}).toThrow()
        expect(function() {new Bus([1])}).toThrow()
        expect(function() {new Bus([1,2,3,4,5,6])}).toThrow()
        expect(function() {new Bus([1,2,3,4,5,6,7])}).not.toThrow()

        expect(function() {new Bus([1,2,3,"a",5,6,7])}).toThrow()
        expect(function() {new Bus([1,2,3,4,"a",6,7])}).toThrow()
        expect(function() {new Bus([1,2,3,4,5,"a",7])}).toThrow()
        expect(function() {new Bus([1,2,3,4,5,6,"a"])}).toThrow()
    });

    it('draw: deve criar um novo marcador', function() {
        bus.draw()
        expect(bus.marker).not.toBe(null)

        var marker = bus.marker

        bus.draw()
        expect(bus.marker).not.toBe(marker)
    });

    it('erase: deve apagar o marcador', function() {
        expect(bus.marker).toBe(null)

        bus.erase()
        expect(bus.marker).toBe(null)

        var marker = new google.maps.Marker({})
        bus.marker = marker

        bus.erase()
        expect(bus.marker).toBe(null)
    });
});
