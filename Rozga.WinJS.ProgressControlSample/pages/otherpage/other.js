/* Copyright (c) 2013 Szymon Rozga
 *
 * See the file LICENSE.txt for copying permission. */
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/otherpage/other.html", {
        ready: function (element, options) {
            var p = document.getElementById('p').winControl;

            p.wrap(WinJS.Promise.timeout(1500), function () {
                // handler
            });
        }
    });
})();
