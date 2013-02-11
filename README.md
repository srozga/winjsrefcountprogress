winjsrefcountprogress
=====================

This project includes the `RefProgressControl` control which provides an easy interface for WinJS developers to use against `<progress />` elements to manage when the progress element should be showing or hidden.

## Usage:

`<progress id='p' data-win-control='Rozga.WinJS.RefProgressControl' />`

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
