'use strict';
var namedSandboxable;
namedSandboxable = function namedSandboxable(parentWindow, document) {
    var button, onclick;
    button = document.createElement('button');
    button.innerHTML = 'Named sandbox button';
    button.setAttribute('type', 'button');
    onclick = function() {
        parentWindow.alert('This button has been created from a named JavaScript sandbox');
    };
    if(button.addEventListener) {
        button.addEventListener('click', onclick, false);
    }
    else{
        button.attachEvent('onclick', onclick);
    }
    parentWindow.document.body.getElementsByTagName('p')[0].appendChild(button);
};