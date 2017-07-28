/**
 * Create a file upload widget
 *  
 *  to use
 *   X.pub('selectFiles', request);
 *   request.uri  - the uri to upload the file
 *  
 */
X.sub("init", function() {
    var html = '<div class="fileSelector" ><div ><ul id="fileThumb" ></ul> </div> <input id="filenames"  type="file" name="filenames"  accept="*/*"> </div>';


    var res=[];
    var request = {};

    function onSelected() {
        var preview = X('fileThumb');
        preview.innerHTML = "";
        res = [];
        var files = X('filenames').files;
        for (var i = 0; i < files.length; ++i) {
            read(files[i], preview);
        }
    }

    function read(file, preview) {
        var img = document.createElement("li");
        img.innerHTML = file.name;
        preview.appendChild(img);
        request.file = file;
        res.push(file);
    }
    

    function onOK() {
        request.file=res[0];
        ChunkedUploader(request).upload();
    }
    

    function onSelectFiles(name, obj) {
        request.uri = obj.uri;
        var show = {};
        show.msg = html;
        show.title = "Select Files";
        show.callback = onOK;
        show.okText="Upload";
        show.closeText="Cancel";
        X.pub('showDialog', show);
        var el = X('filenames');
        if (obj.single) {
            el.setAttribute('single', true);
        } else if (obj.multiple) {
            el.setAttribute('multiple', true);
        }
        el.onchange = onSelected;
    }



    X.sub('selectFiles', onSelectFiles);

/*
    Number.prototype.formatBytes = function() {
        var units = ['B', 'KB', 'MB', 'GB', 'TB'],
            bytes = this,
            i;

        for (i = 0; bytes >= 1024 && i < 4; i++) {
            bytes /= 1024;
        }

        return bytes.toFixed(2) + units[i];
    }
*/
    var chunk_size = (1024 * 1024);


    function ChunkedUploader(request) {
        var file = request.file;
        var uri = request.uri;

        var file_size = file.size;

        var current = 0;

        var totalChunks = Math.ceil(file_size / chunk_size);

        var slice_method = 'slice';

        if ('mozSlice' in file) {
            slice_method = 'mozSlice';
        } else if ('webkitSlice' in file) {
            slice_method = 'webkitSlice';
        }
        
        
        X.cookie.rm("uploaderId");

        function upload() {

            var range_start = current * chunk_size;
            var range_end = Math.min(file_size, range_start + chunk_size);

            if (range_start >= file_size) {
                return;
            }


            var chunk = file[slice_method](range_start, range_end);

            var request = {};
            request.uri = uri + "?totalChunks=" + totalChunks + "&current=" + current + "&filename=" + file.name+"&chunkSize="+chunk_size;
            request.method = "POST";
            request.body = chunk;
            request.cb = chunkUploaded;

            X.send(request);

        }

        function chunkUploaded() {
            current += 1;
            upload();
        }

        return {
            upload:upload
        };


    }





});