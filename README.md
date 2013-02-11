winjsrefcountprogress
=====================

This project includes the `RefProgressControl` control which provides an easy interface for WinJS developers to use against `<progress />` elements to manage when the progress element should be showing or hidden.

## Usage:

`<progress id='p' data-win-control='Rozga.RefProgressControl' />`

	// some helpers
	var u = function() { document.getElementById('p').winControl.use(); };
	var r = function() { document.getElementById('p').winControl.release(); };

	u(); // add a use, progress bar will now be showing
	getPromise1().then(function() {
		// handle the promise
		r(); // release one use, if zero uses, hides progress control
	});

	u(); // add another use
	getPromise2().then(function() {
		// handle the promise
		r(); // release one use, if zero uses, hides progress control
	});

You are also able to use the RefProgressControl.wrap() method to simplify the syntax.

	var p = document.getElementById('p').winControl;

	p.wrap(getPromise1, function() { 
			// handle promise
		}, function(error) {
			// handler error
		});

http://szymonrozga.net/blog/2013/02/a-ref-counted-progress-control-for-winjs/