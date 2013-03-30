var Sandbox;
Sandbox = (function () {
    'use strict';
    var queue, Sandbox, changeReadyState, loadSandbox;
    queue = [];
    Sandbox = function Sandbox(src, name, onReadyStateChange) {
        this.src = src;
        this.name = name || 'anonymous';
        this.window = void null;
        this.readyState = -1;
        this.onreadystatechange = onReadyStateChange;
        queue.push(this);
        changeReadyState(this);
        if (queue.length === 1 && queue[0].readyState === 0) {
            loadSandbox();
        }
    };
    changeReadyState = function changeReadyState(instance) {
        instance.readyState += 1;
        if (typeof instance.onreadystatechange === 'function') {
            instance.onreadystatechange();
        }
    };
    loadSandbox = function loadSandbox() {
        var instance, fragment, iframe;
        instance = queue[0];
        changeReadyState(instance);
        fragment = document.createDocumentFragment();
        iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.id = iframe.name = ('Sandbox__' + instance.name + new Date().getTime()) + Math.floor(Math.random() * 1000000000000000);
        iframe.onload = function () {
            var sandbox, document, script, onload;
            sandbox = window.frames[iframe.name] || window.document.getelementById(iframe.id).contentWindow;
            document = sandbox.document;
            script = document.createElement('script');
            script.src = instance.src;
            onload = function () {
                var readyState, Window, callback;
                readyState = this.readyState;
                if (typeof readyState !== 'string' || (readyState === 'loaded' || readyState === 'complete')) {
                    Window = function Window() {};
                    Window.prototype = sandbox;
                    instance.window = new Window(sandbox);
                    if (instance.name !== void null) {
                        callback = instance.window[instance.name];
                    }
                    fragment.appendChild(iframe);
                    instance.document = document;
                    if (typeof callback === 'function') {
                        instance.window[instance.name] = callback;
                    }
                    changeReadyState(instance);
                    queue.shift();
                    if (queue.length !== 0) {
                        loadSandbox();
                    }
                }
            };
            script[script.readyState ? 'onreadystatechange' : 'onload'] = onload;
            document.body.appendChild(script);
            changeReadyState(instance);
        };
        document.body.appendChild(iframe);
        changeReadyState(instance);
    };
    return Sandbox;
})();