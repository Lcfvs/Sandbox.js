Sandbox.js
==========

A JavaScript sandboxing
-----------------------

This project is a Web workers alternative under the LGPL 3.0 license (http://www.gnu.org/licenses/lgpl-3.0.txt).

It allows you to create several different threads (knowing window & window.document), each with its own execution context.

Each window has its own sandbox and isn't affected by the prototyping defined by scripts that run outside the current sandbox.


Syntax :
--------

<strong>new Sandbox(src, callbackName, onReadyStateChange);</strong>


Arguments :
-----------

[required] String <strong>src</strong> : the script url<br />
[optional] String <strong>callbackName</strong> : the closure name<br />
[optional] Function <strong>onReadyStateChange</strong> : the function listening to the sandbox readyState


The Sandbox properties :
------------------------

String <strong>src</strong> : the script url<br />
String <strong>callbackName</strong> : the closure name ('anonymous' if not specified)<br />
Window <strong>window</strong> : the sandbox window context
Function <strong>onreadystatechange( callback )</strong> : the function listening to the sandbox readyState<br />
Integer <strong>readyState</strong> : the sandbox readyState (0 to 4)


The readyState :
----------------

<strong>0</strong> : initialisation<br />
<strong>1</strong> : creation of a iframe tag<br />
<strong>2</strong> : the iframe is loaded<br />
<strong>3</strong> : creation of a script tag<br />
<strong>4</strong> : the script is loaded & callable


Compatibility :
---------------

Firefox 3.5+<br />
IE 7+<br />
Chrome<br />
Safari<br />
Opera<br />
