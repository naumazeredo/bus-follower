var route_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/Apresentacao/csv/gtfs/onibus/percursos/gtfs_linha{}-shapes.csv"
var stops_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/Apresentacao/csv/gtfs/onibus/paradas/gtfs_linha{}-paradas.csv"
var buses_url = "http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus/"

Meteor.methods({
    getRoute: function(bus) {
        // Get the route
        return HTTP.get(route_url.replace('{}', bus));
    },
    getStops: function(bus) {
        // Get the stops
        return HTTP.get(stops_url.replace('{}', bus));
    },
    getBuses: function(bus) {
        // Get the buses
        return HTTP.get(buses_url + bus);
    },
});
