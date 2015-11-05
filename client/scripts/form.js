Template.busQuery.events({
    'submit .query': function(event){
        event.preventDefault();
        var route_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/Apresentacao/csv/gtfs/onibus/percursos/gtfs_linha{}-shapes.csv"
        var buses_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"
        var stops_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/Apresentacao/csv/gtfs/onibus/paradas/gtfs_linha{}-paradas.csv"
        var bus = event.target.bus.value;

        var route = Route.getInstance()

        if (bus) {
            if (typeof update !== 'undefined') {
                clearInterval(update)
            }
            update = false

            // Get the route
            $.get(route_url.replace('{}', bus), function(data) {
                data  = new CSV(data).object;
                route.drawPath(data);
            })

            // Get the stops
            $.get(stops_url.replace('{}', bus), function(data) {
                data  = new CSV(data).object;
                route.drawStops(data);
            })

            var updateMapPosition = true;

            // Get buses positions
            var getBuses = function() {
                $.get(buses_url + bus, function(data) {
                    route.updateBuses(data.DATA);
                    if (updateMapPosition) {
                        route.recenter()
                        updateMapPosition = false
                    }
                }).fail(function() {
                    clearInterval(update);
                    update = false;
                    alert("Erro ao pegar ônibus. Verifique a conexão com a internet e se a linha existe!");
                });
            }
            getBuses()
            update = setInterval(getBuses, 10000);
        }
    }
});
