//this is an experiment to compare this simple implementation with backbone's implementation
//it does not appear that backbone is making life any easier
X.sub("init", function() {

    //this is the data model
    var items = [];
    var done = 0;
    var deleted =0;

    X('new-todo').onkeypress = function(e) {
        if (!e) e = window.event;
        var keyCode = e.keyCode || e.which;
        if (keyCode == '13') {
            var item = {};
            item.title = X('new-todo').value.trim();
            if (item.title.length === 0) {
                return false;
            }
            item.id = items.length;
            item.done = false;
            item.del = false;
            items.push(item);
            render();
        }
        return true;
    };

    X('toggle-all').onchange = function(e) {
        items.forEach(function(item) {
            item.done = e.target.checked;
        });
        render();
    };

    function render() {
        X('main').css('display', 'block');

        var html = '';
        deleted =0;
        done = 0;
        X('todo-list').innerHTML = "";

        if (items.length === 0) {
            return;
        }



        items.forEach(function(item) {
            if (item.del) {
                deleted++;
                return;
            }
            var el = document.createElement("li");
            el.id = 'it_' + item.id;
            html += '<div class="view">';
            html += '<input class="toggle" type="checkbox"';
            html += 'onchange="X.pub(\'toggle\', ' + item.id + ')" ';
            if (item.done) {
                html += 'checked="checked"';
                done++;
                el.className = 'done';
            } else {
                el.className = 'normal';
            }
            html += '/>';
            html += '<label>' + item.title + '</label>';
            html += '<a class="destroy"></a>';
            html += '</div>';
            html += '<input id="ip_' + item.id + '" class="edit" type="text" value="' + item.title + '" />';

            el.innerHTML = html;
            html = "";
            el.ondblclick = function() {
                el.className = "editing";
            };
            X('todo-list').appendChild(el);

            X('ip_' + item.id).onkeypress = function(e) {
                if (!e) e = window.event;
                var keyCode = e.keyCode || e.which;
                if (keyCode == '13') {
                    if (this.value.length === 0) {
                        return false;
                    }
                    items[item.id].title = this.value;
                    render();
                }
                return true;
            };

        });


        renderStat();
    }

    function renderStat() {
        X('footer').css('display', 'block');

        var remaining = (items.length - done - deleted);
        var html = "";
        if (done > 0) {
            html += '<a id="clear-completed">Clear ' + done +
                ' completed ' + ((done == 1) ? 'item' : 'items') + '</a>';
        }
        html += '<div class="todo-count"><b>' + remaining + '</b> ' + ((remaining == 1) ? 'item' : 'items') + ' left</div>';
        X('footer').innerHTML = html;
        if (done > 0) {
            X('clear-completed').onclick = function() {
                items.forEach(function(item) {
                    if (item.done) {
                        item.del = true;
                    }
                });
                render();
            }
        }
    }

    X.sub('toggle', function(evt, id) {
        if (items[id].done) {
            items[id].done = false;
            done--;
            X('it_' + id).cnList.remove('done');
        } else {
            items[id].done = true;
            X('it_' + id).cnList.add('done');
            done++;
        }
        renderStat();
    });

});