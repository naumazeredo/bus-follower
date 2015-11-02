describe('Ônibus', function() {
    it('deve iniciar na posição (0, 0)', function() {
        bus = new Bus();
        expect(bus.x).toBe(0);
        expect(bus.y).toBe(0);
    });

    it('deve mover para a posição correta', function() {
        bus = new Bus();
        bus.move(1, 2);

        expect(bus.x).toBe(1);
        expect(bus.y).toBe(2);
    });
});
