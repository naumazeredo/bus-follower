Template.busQuery.events({
    'submit .query': function(){
        event.preventDefault();
        var bus = event.target.bus.value.match(/\d{3,4}/);
        console.log(bus);
        if (bus !== null){
            $.get("http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"+bus, function(data) {
                console.log(data);
            });
        }
    }
});