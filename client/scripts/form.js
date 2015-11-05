Template.busQuery.events({
    'submit .query': function(event){
        event.preventDefault();
        var route_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/Apresentacao/csv/gtfs/onibus/percursos/gtfs_linha{}-shapes.csv"
        var buses_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"
        var bus = event.target.bus.value;

        if (bus) {
            if (typeof update !== 'undefined') {
                clearInterval(update)
            }
            update = false

            // Get the route
            $.get(route_url.replace('{}', bus), function(data) {
                data  = new CSV(data).object;
                curRoute.drawPath(data);
            })

            var updateMapPosition = true;

            // Get buses positions
            var getBuses = function() {
                $.get(buses_url + bus, function(data) {
                    curRoute.updateBuses(data.DATA);
                    if (updateMapPosition) {
                        curRoute.recenter()
                        updateMapPosition = false
                    }
                }).fail(function() {
                    clearInterval(update);
                    update = false;
                    alert("Essa linha não existe");
                });
            }
            getBuses()
            update = setInterval(getBuses, 10000);
        }
    }
});
