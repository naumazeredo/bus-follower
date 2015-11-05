CSV = class CSV {
    constructor(csv) {
        var lines=csv.split("\n");
        var result = [];
        var headers=lines[0].split(",");

        // Format headers
        for(var j=0;j<headers.length;j++) {
            headers[j] = headers[j].replace(/\r/g, '').replace(/"/g, '')
        }

        for(var i=1;i<lines.length;i++){
            var obj = {};
            var currentline=lines[i].split(",");
            if (currentline.length == headers.length) {
                for(var j=0;j<headers.length;j++){
                    // Format data
                    obj[headers[j]] = currentline[j].replace(/\r/g, '').replace(/"/g, '');
                }
                result.push(obj);
            }
        }
        this.object = result;
    }
}
