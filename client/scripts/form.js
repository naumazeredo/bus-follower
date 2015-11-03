Template.busQuery.events({
    'submit .query': function(){
        event.preventDefault();

        var bus = event.target.bus.value;

        if (bus) {
            if (typeof update !== 'undefined') {
                clearInterval(update)
            }
            update = false

            $.get("http://dadosabertos.rio.rj.gov.br/apiTransporte/Apresentacao/csv/gtfs/onibus/percursos/gtfs_linha"+bus+"-shapes.csv", function(data) {
                function csvJSON(csv){
                    var lines=csv.split("\n");
                    var result = [];
                    var headers=lines[0].split(",");

                    for(var i=1;i<lines.length;i++){
                        var obj = {};
                        var currentline=lines[i].split(",");
                        if (currentline.length == headers.length) {
                            for(var j=0;j<headers.length;j++){
                                obj[headers[j]] = currentline[j].replace('/\r/g', '').replace('/"/g', '');;
                            }
                            result.push(obj);
                        }
                    }
                    return result;
                }

                data  = csvJSON(data)
            })
            var getBuses = function() {
                $.get("http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"+bus, function(data) {
                    curRoute.updateBuses(data.DATA);
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
