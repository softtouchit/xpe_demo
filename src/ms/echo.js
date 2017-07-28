/**
 * My module:
 * to handle requests 
 */
(function() {

 var process =   function(req, resp) {
   
  // resp.body='{"msg":"hello"}';
  var b=JSON.parse(req.body);
   resp.body= JSON.stringify(b);
   print(req.body);
 };

 return {
   onGet:process,
   onPost:process
   
//   onPost:process,  //return onPost if you need to handle post
//   onPut:process,
//   onDel:process
 };

 
}());
