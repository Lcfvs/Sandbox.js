'use strict';
var Sandbox;
Sandbox = (function(window) {
    var queue, Sandbox, readyStateChange, loadSandbox;
    queue = [];
    Sandbox = function Sandbox(src) {
        this.src = src;
        this.window = void null;
        this.readyState = -1;
        queue.push(this);
        readyStateChange(this);
        if(queue.length === 1 && queue[0].readyState === 0) {
            loadSandbox();
        }
    };
    readyStateChange = function readyStateChange(instance) {
        instance.readyState += 1;
        if(typeof instance.onreadystatechange === 'function') {
            instance.onreadystatechange();
        }
    };
    loadSandbox = function loadSandbox() {
        var instance, fragment, iframe, src;
        instance = queue[0];
        readyStateChange(instance);
        fragment = document.createDocumentFragment();
        iframe = document.createElement('iframe');
        src = instance.src;
        iframe.style.display = 'none';
        iframe.id = iframe.name = ('Sandbox__' + new Date().getTime()) + Math.floor(Math.random() * 1000000000000000);
        iframe.onload = function() {
            var sandbox, document, script, onload, Window;
            Window = function Window(window) {
                if(!this.document) {
                    return window;
                }
            };
            sandbox = frames[iframe.name] || window.document.getelementById(iframe.id).contentWindow;
            instance.window = sandbox = new Window(sandbox);
            document = sandbox.document;
            script = document.createElement('script');
            script.src = src;
            onload = function() {
                var readyState;
                readyState = this.readyState;
                if(typeof readyState !== 'string' || (readyState === 'loaded' || readyState === 'complete')) {
                    if(!navigator.userAgent.toLowerCase() === 'safari') {
                        fragment.appendChild(iframe);
                    }
                    readyStateChange(instance);
                    queue.shift();
                    if(queue.length !== 0) {
                        loadSandbox();
                    }
                }
            };
            script[script.readyState ? 'onreadystatechange' : 'onload'] = onload;
            document.body.appendChild(script);
            readyStateChange(instance);
        };
        document.body.appendChild(iframe);
        readyStateChange(instance);
    };
    return Sandbox;
})(window);
