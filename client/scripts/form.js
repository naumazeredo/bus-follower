Template.busQuery.events({
    'submit .query': function(event){
        event.preventDefault();

        var bus = event.target.bus.value;

        if (bus) {
            if (typeof update !== 'undefined') {
                clearInterval(update)
            }
            update = false

            var updateMapPosition = true;

            var getBuses = function() {
                $.get("http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"+bus, function(data) {
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
