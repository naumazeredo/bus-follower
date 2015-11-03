describe('Ônibus', function() {
    it('deve construir com dados corretamente', function() {
        // Informação obtida pela API do GPS dos ônibus
        // [0] - data e hora
        // [1] - ordem do ônibus (identificador)
        // [2] - linha
        // [3] - latitude
        // [4] - longitude
        // [5] - velocidade
        // [6] - direção
        var data = [0, 1, 2, 3, 4, 5, 6]

        bus = new Bus(data);

        expect(bus.ord).toBe(1);
        expect(bus.linha).toBe(2);
        expect(bus.lat).toBe(3);
        expect(bus.lng).toBe(4);
        expect(bus.vel).toBe(5);
        expect(bus.dir).toBe(6);
    });
});
