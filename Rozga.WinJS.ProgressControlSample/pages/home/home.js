/* Copyright (c) 2013 Szymon Rozga
 *
 * See the file LICENSE.txt for copying permission. */
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: function (element, options) {

            var p = document.getElementById('p').winControl;

            p.wrap(WinJS.Promise.timeout(2500), function () {
                // handler
            });

            document.getElementById('navigate').addEventListener('click', function () {
                document.getElementById('p').winControl.clear();
                WinJS.Navigation.navigate('/pages/otherpage/other.html', null);
            });
        }
    });
})();
