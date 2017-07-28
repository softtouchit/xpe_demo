/**
 * Batch module:
 * Handle batch post
 */
(function() {

 var process =   function(req, resp) {
     
     var db =domain[req.configs];
     
     var data ={};
     data.body="test333";
     data.js="{}";
     db.update(data);
     
     var res = db.search("all=all");
     resp.body=JSON.stringify(res);

 };

 var batch = function(req, resp) {
     print(req.configs);
     var data = JSON.parse(req.body);
     var db =domain[req.configs];
     if (!db) {
       resp.body='{"code":1, msg":"db not found"}';
       return;
     }
     
     if (data instanceof Array) {
     var res = [];
     for (var i=0;i<data.length;++i) {
        res.push(db.update(data[i]));
     }
     resp.body=JSON.stringify(res);
     } else {
         resp.body=JSON.stringify(db.update(data));
     }
 }

 return {
   onGet:process,
   onPost: batch
   
//   onPost:process,  //return onPost if you need to handle post
//   onPut:process,
//   onDel:process
 };

 
}());
