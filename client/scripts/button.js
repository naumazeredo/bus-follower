Template.body.events({
    'click #button': function() {
        $.get("http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/511", function(data) {
            console.log(data);
        });
    }
});
