/**
 * My module:
 * 
 * create this module to handle doneEditing event, once done editing is fired, you receive the top element that contains all the editable contents
 * 
 * 
 */
X.sub("init", function() {
    
    X('form').onsubmit= function(evt) {
        alert(X('team').value);
    };
    
});
