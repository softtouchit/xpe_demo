X.sub("init", function() {

    var img = "data:image/gif;base64,R0lGODlhFgAWAIQbAD04KTRLYzFRjlldZl9vj1dusY14WYODhpWIbbSVFY6O7IOXw5qbms+wUbCztca0ccS4kdDQjdTLtMrL1O3YitHa7OPcsd/f4PfvrvDv8Pv5xv///////////////////yH5BAEKAB8ALAAAAAAWABYAAAV84CeOZGmeaKqubMteyzK547QoBcFWTm/jgsHq4rhMLoxFIehQQSAWR+Z4IAyaJ0kEgtFoLIzLwRE4oCQWrxoTOTAIhMCZ0tVgMBQKZHAYyFEWEV14eQ8IflhnEHmFDQkAiSkQCI2PDC4QBg+OAJc0ewadNCOgo6anqKkoIQA7";

    var id;

    function onGetMeta(respText) {
        X('meta').innerHTML = respText;
    }

    function onResponse(respText) {
        var resp = JSON.parse(respText);
        X('resp').innerHTML = respText;
        X('img').innerHTML = '<img src="/image?id=' + resp.id + '"/>';
        id = resp.id;
        X.get("/images?id=" + resp.id, onGetMeta);
        X.pub('updated');
    }

    X('ins').onclick = function(e) {
        X.post("/images?desc=testimg&cf=test", img, onResponse);
    };


    X('del').onclick = function(e) {
        X.del("/image?id=" + id, onDel);
    };

    function onDel(respText) {
        var resp = JSON.parse(respText);
        X('resp').innerHTML = respText;
        X('img').innerHTML = '<img src="/image?id=' + resp.id + '"/>';
        id = resp.id;
        X.pub('updated');
    }
    
    //setup the div as a drop zone
    X.pub('dropImage', 'drop');
    
    X.sub('imagesDropped', onImagesDropped);
    
    function onImagesDropped(evt, res) {
        res.forEach(function(img) {
            X.post("/images?desc="+img.name, img.data, onResponse);
        });
        X('drop').innerHTML="";
    }
    
    X('upload').onclick=function(e) {
        var req={};
        req.callback=onImagesDropped;
        X.pub('selectImage',req);
    };


});