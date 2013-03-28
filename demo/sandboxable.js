'use strict';
(function(parentWindow) {
    var doc, button;
    doc = window.document;
    button = doc.createElement('button');
    button.innerHTML = 'Click here';
    button.type = 'button';
    button.addEventListener('click', function() {
        parentWindow.alert('This button has been created from an anonymous JavaScript sandbox');
    }, false);
    parentWindow.document.body.getElementsByTagName('p')[0].appendChild(button);
})(parent.window || window);
