'use strict';
var Sandbox;
Sandbox = function Sandbox(src, callbackName) {
    var fragment, iframe;
    fragment = document.createDocumentFragment();
    iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'Sandbox__' + ((callbackName || '') + new Date().getTime()) + Math.floor(Math.random() * 1000);
    iframe.onload = function(){
        var sandbox, document, script, callback;
        sandbox = frames[iframe.name];
        document = sandbox.document;
        script = document.createElement('script');
        script.src = src;
        script.onload = function(){
            if(typeof callbackName === 'string') {
                callback = sandbox[callbackName];
            }
            fragment.appendChild(iframe);
            if(typeof callback === 'function') {
                callback(window);
            }
        };
        document.body.appendChild(script);
    };
    document.body.appendChild(iframe);
};
