X.sub("init", function() {

    var itemList = "/wechat/awardrules";
    var listEl = X('list');

    X.get(itemList + "?all=all", onGetList);

    function onGetList(respText) {
        var resp = JSON.parse(respText);

        var html = '<table class="table table-striped table-bordered">';

        var data = resp.data;

        data.forEach(function(entry) {
            html+='<tr>';
            html+='<td>'+entry.id+'</td>';
            html+='<td>'+entry.name+'</td>';
            html+='<td>'+entry.event+'</td>';
            html+='<td>'+entry.score+'</td>';
            html+='</tr>';
        });

        html += '</table>';

        listEl.innerHTML = html;

    }
    
    function onAdd(respText) {
        X('resp').innerHTML=respText;
        X.get(itemList + "?all=all", onGetList);
    }
    
    
    function onNewRule(evt, form) {
        var req = {};
        req.name=form.name.value;
        req.event=form.event.value;
        req.score=form.score.value;
        req.isrepeat='1';
        req.continue_day='1';
        req.continue_score='100';
        req.reward='1';
        X.post(itemList, req, onAdd);
    }
    
    
    X.sub('awardRule', onNewRule);
    

});