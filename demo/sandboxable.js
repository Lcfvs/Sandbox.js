'use strict';
(function(parentWindow, document) {
    var button, onclick;
    button = document.createElement('button');
    button.innerHTML = 'Click here';
    button.setAttribute('type', 'button');
    onclick = function() {
        parentWindow.alert('This button has been created from an anonymous JavaScript sandbox');
    };
    if(button.addEventListener) {
        button.addEventListener('click', onclick, false);
    }
    else{
        button.attachEvent('onclick', onclick);
    }
    parentWindow.document.body.getElementsByTagName('p')[0].appendChild(button);
})(parent.window || window, document);