var namedSandboxable;
(function (window) {
    'use strict';
    self.namedSandboxable = function namedSandboxable() {
        var button, onclick;
        button = self.document.createElement('button');
        button.innerHTML = 'Named sandbox button';
        button.setAttribute('type', 'button');
        onclick = function() {
            window.alert('This button has been created from a named JavaScript sandbox');
        };
        if(button.addEventListener) {
            button.addEventListener('click', onclick, false);
        }
        else{
            button.attachEvent('onclick', onclick);
        }
        window.document.body.getElementsByTagName('p')[0].appendChild(button);
    };
}(parent.window || window));
