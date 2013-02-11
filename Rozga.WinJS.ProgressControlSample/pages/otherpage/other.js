/* Copyright (c) 2013 Szymon Rozga
 *
 * See the file LICENSE.txt for copying permission. */
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/otherpage/other.html", {
        ready: function (element, options) {
            var u = function () { document.getElementById('p').winControl.use(); };
            var r = function () { document.getElementById('p').winControl.release(); };

            u();
            WinJS.Promise.timeout(1500).then(function () {
                r();
            }, function () {
                r();
            });
        }
    });
})();
