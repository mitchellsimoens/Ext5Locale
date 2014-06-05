/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Locale.Application', {
    extend: 'Ext.app.Application',

    name: 'Locale',

    requires : [
        'Locale.packages.i18n.i18n'
    ],

    views: [
        'main.Main'
    ],

    launch: function () {
        i18n.init({
            lang     : 'en',
            callback : function () {
                new Locale.view.main.Main();
            }
        });
    }
});
