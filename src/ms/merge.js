/**
 * 
 * Merge module
 * 
 * Merge two db together
 * 
 */
(function() { 
    var o=null;
            
    function map(data) { 
        o=data; 
    } 
            
    function process() { 
        var r=[]; 
        if (o) {
            var resp={};
            resp.name=o.name;
            r.push(resp);
        }
        return r;
    }

    return {
        map: map,
        process: process
    };
}());
