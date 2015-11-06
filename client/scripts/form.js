Template.busQuery.events({
    'submit .query': function(event){
        event.preventDefault();
        var buses_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"
        var bus = event.target.bus.value;

        var route = Route.getInstance()

        if (bus) {
            if (typeof update !== 'undefined') {
                clearInterval(update)
            }
            update = false

            Meteor.call('getRoute', bus, function(err, data) {
                if (err) return;
                if (data.statusCode === 200)
                    route.drawPath(new CSV(data.content).object);
            });

            Meteor.call('getStops', bus, function(err, data) {
                if (err) return;
                if (data.statusCode === 200)
                    route.drawStops(new CSV(data.content).object);
            });

            var updateMapPosition = true

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
            update = setInterval(getBuses, 10000)
        }
    }
});
