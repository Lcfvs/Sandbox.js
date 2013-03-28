'use strict';
var namedSandboxable;
namedSandboxable = function namedSandboxable(parentWindow) {
    var doc, button;
    doc = window.document;
    button = doc.createElement('button');
    button.innerHTML = 'Click here';
    button.setAttribute('type', 'button');
    button.onclick = function() {
        parentWindow.alert('This button has been created from an anonymous JavaScript sandbox');
    };
    parentWindow.document.body.getElementsByTagName('p')[0].appendChild(button);
};
