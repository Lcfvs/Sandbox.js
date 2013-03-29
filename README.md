Sandbox.js
==========

A JavaScript sandboxing
-----------------------

This project is a Web workers alternative under the LGPL 3.0 license (http://www.gnu.org/licenses/lgpl-3.0.txt).

It allows you to create several different threads (knowing window & window.document), each with its own execution context.

Each window has its own sandbox and isn't affected by the prototyping defined by scripts that run outside the current sandbox.


Syntax :
--------

new Sandbox(src, callbackName, onReadyStateChange);


Arguments :
-----------

[required] String src : the script url<br />
[optional] String callbackName : the closure name<br />
[optional] Function onReadyStateChange : the function listening to the sandbox readyState


The Sandbox properties :

String src : the script url<br />
String callbackName : the closure name ('anonymous' if not specified)<br />
Window window : the sandbox window context
Function onReadyStateChange : the function listening to the sandbox readyState<br />
Integer readyState : the sandbox readyState (0 to 4)


The readyState :
----------------

0 : initialisation<br />
1 : creation of a iframe tag<br />
2 : the iframe is loaded<br />
3 : creation of a script tag<br />
4 : the script is loaded & callable


Compatibility :
---------------

Firefox 3.5+<br />
IE 7+<br />
Chrome<br />
Safari<br />
Opera<br />