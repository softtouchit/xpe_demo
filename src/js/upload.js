/**
 * My module:
 *  description about what it does
 */
X.sub("init", function() {
    X('upload').onclick=function(e) {
        var req={};
        req.uri="/upload";
        X.pub('selectFiles',req);
    };
});
