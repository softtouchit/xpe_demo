X.sub("init", function() {
    
    var tabs = X('tabs');
    
    var i=0;
    for (;i<tabs.children.length;++i) {
        var li=tabs.children[i];
        if (li.tagName === "LI") {
            if (matches(li)) {
                X(li).cnList.add("active");
                return;
            } 
        }
    }
    
    function matches(el) {
       var els = el.getElementsByTagName("A");
       var k=0;
       for (;k<els.length;++k) {
           if (els[k].href===window.location.href) {
               return true;
           }
       }
       return false;
    }
    
}); 