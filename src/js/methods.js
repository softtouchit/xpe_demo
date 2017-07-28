X.sub("init", function() {
    
    

    var request = {};
    request.say = "hello";
    
    if (!String.prototype.encodeHTML) {
  String.prototype.encodeHTML = function () {
    return this.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;<br>')
               .replace(/"/g, '&quot;')
               .replace(/'/g, '&apos;');
  };
}

    function onPutResponse(respText) {
        X('put').innerHTML=respText.encodeHTML();
    }

    function onPostResponse(respText) {
        X('post').innerHTML=respText.encodeHTML();
    }

    function onGetResponse(respText) {
        X('get').innerHTML=respText.encodeHTML();
    }

    function onDelResponse(respText) {
        X('del').innerHTML=respText.encodeHTML();
    }

    X.put("/echo", request, onPutResponse);
    X.post("/echo", request, onPostResponse);

    X.get("/echo", onGetResponse);
    X.del("/echo", onDelResponse);

});