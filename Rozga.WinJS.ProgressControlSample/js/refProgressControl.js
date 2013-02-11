/* Copyright (c) 2013 Szymon Rozga
 * RefProgressControl
 * https://github.com/srozga/winjsrefcountprogress
 *
 * See the file LICENSE.txt for copying permission. */
WinJS.Namespace.define('Rozga', {
    RefProgressControl: WinJS.Class.define(function (el, options)
    {
        this.el = el;
        this.count = 0;
        this.hide();

        WinJS.Utilities.addClass(this.el, 'refprogress-control'); // set the default style and position
    },
    {
        _hiddencssclass: 'refprogress-control-hidden',
        hide: function () { WinJS.Utilities.addClass(this.el, this._hiddencssclass); },
        show: function () { WinJS.Utilities.removeClass(this.el, this._hiddencssclass); },

        toggle: function() {
            if (this.count > 0) this.show();
            else this.hide();
        },
        use: function () {
            this.count++;
            this.toggle();
        },
        release: function () {
            if (this.count > 0) this.count--;
            this.toggle();
        },
        clear: function () {
            this.count = 0;
            this.toggle();
        },
        wrap: function (promise, handler, errorHandler, progressHandler) {
            this.use();

            promise.then(
                function (result) {
                    this.release();
                    handler(result);
                }.bind(this),

                function (error) {
                    this.release();
                    errorHandler(error);
                }.bind(this),

                function (progress) {
                    progressHandler(progress);
                });
        }
    })
});