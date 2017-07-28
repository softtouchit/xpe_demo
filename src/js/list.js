X.sub("init", function() {

    var itemList = "/images";
    var listEl = X('list');


    function onGetList(respText) {
        var resp = JSON.parse(respText);

        var html = '<table class="table table-striped table-bordered">';

        var data = resp.data;

        data.forEach(function(entry) {
            html+='<tr>';
            html+='<td>'+entry.id+'</td>';
            html+='<td>'+entry.desc+'</td>';
            html+='<td>'+entry.mime+'</td>';
            html+='<td><img src="/image?id='+entry.id+'"></td>';
            html+='</tr>';
        });

        html += '</table>';

        listEl.innerHTML = html;

    }
    
    function getList() {
        X.get(itemList + "?all=all", onGetList);
    }
    
    X.sub('updated', getList);
    
    getList();
    

});