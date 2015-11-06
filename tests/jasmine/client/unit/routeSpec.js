describe('Route', function() {
    beforeEach(function() {
    });

    it('constructor: a classe deve ser singleton', function() {
        var route1 = new Route()
        var route2 = new Route()
        var route3 = Route.getInstance()

        expect(route1).toBe(route2)
        expect(route2).toBe(route3)
    });

    it('updateBuses: deve aceitar somente lista de objetos que controem Bus', function() {
        var route = Route.getInstance()

        expect(function(){ route.updateBuses() }).toThrow()
        expect(function(){ route.updateBuses("a") }).toThrow()
        expect(function(){ route.updateBuses([1]) }).toThrow()
        expect(function(){ route.updateBuses([[]]) }).toThrow()

        expect(function(){ route.updateBuses([]) }).not.toThrow()
        expect(function(){ route.updateBuses([[1,2,3,4,5,6,7]]) }).not.toThrow()
        expect(function(){ route.updateBuses([[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]]) }).not.toThrow()
    });

    it('updateBuses: deve criar novos ônibus e construir uma lista só dos novos ônibus', function() {
        var route = Route.getInstance()
        var data= [[0,1,2,3,4,5,6], [7,8,9,10,11,12,13]]
        route.updateBuses(data)

        expect(route.buses.length).toBe(2)

        route.updateBuses([])

        expect(route.buses.length).toBe(0)
    });

    it('drawPath: deve aceitar somente lista de objetos com latitude e longitude', function() {
        var route = Route.getInstance()

        expect(function(){ route.drawPath() }).toThrow()
        expect(function(){ route.drawPath("a") }).toThrow()
        expect(function(){ route.drawPath([{}]) }).toThrow()

        expect(function(){ route.drawPath([]) }).not.toThrow()
        expect(function(){ route.drawPath([{latitude: 1, longitude: 1}]) }).not.toThrow()
        expect(function(){ route.drawPath([{latitude: 1, longitude: 1}, {latitude: 2, longitude: 2}]) }).not.toThrow()
    });

    it('drawPath: deve criar um novo caminho', function() {
        var route = Route.getInstance()
        var data = [{latitude: 0, longitude: 0}, {latitude: 1, longitude: 1}]

        route.drawPath(data)
        expect(route.path).not.toBe(null)

        var path = route.path
        data = [{latitude: 2, longitude: 2}]

        route.drawPath(data)
        expect(route.path).not.toBe(null)
        expect(route.path).not.toBe(path)
    });

    it('drawStops: deve criar uma nova lista de Stops', function() {
        var route = Route.getInstance()
        var data = [{latitude: 0, longitude: 0}, {latitude: 1, longitude: 1}]

        route.drawStops(data)
        expect(route.stops.length).toBe(2)

        data = [{latitude: 2, longitude: 2}]

        route.drawStops(data)
        expect(route.stops.length).toBe(1)
    });
});
