Template.busQuery.events({
    'submit .query': function(event){
        event.preventDefault();
        var bus = event.target.bus.value;
        console.log(bus);
        if (bus !== null){
            $.get("http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"+bus, function(data) {
                console.log(data);
                curRoute.updateBuses(data.DATA);
            }).fail(function() {
                alert("Essa linha não existe");
            });
        }
    }
});
