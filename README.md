Sandbox.js
==========

A JavaScript sandboxing
-----------------------

This project allows you to create several different threads and knowing window & window.document, while having its own execution context.

Each window has its own sandbox and isn't affected by the prototyping defined by scripts that run outside the current sandbox.


Syntax :
--------

new Sandbox(src, callbackName, onReadyStateChange);


Arguments :
-----------

[required] String   src                : the script url
[optional] String   callbackName       : the closure name
[optional] Function onReadyStateChange : the function to listen the sandbox readyState


The readyState :
----------------

0 : initialisation
1 : creation of a iframe tag
2 : the iframe is loaded
3 : creation of a script tag
4 : the script is loaded & callable


Compatibility :
---------------

Firefox 3.5+
IE 7+
Chrome
Safari
Opera