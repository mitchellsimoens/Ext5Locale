Ext.define('Locale.packages.i18n.i18n', {
    _locale : null,

    init : function(options) {
        var me = this;

        me._lang = options.lang;

        Ext.Ajax.request({
            url     : 'locales/' + options.lang + '.json',
            success : function(result) {
                me._locale = Ext.decode(result.responseText);

                Ext.callback(options.callback);
            }
        });
    },

    get : function(key, def) {
        var locale = this._locale;

        if (locale.hasOwnProperty(key)) {
            return locale[key];
        }

        locale[key] = def;

        this.save(key, def);

        return def;
    },

    save : function(key, value) {
        //TODO do a save here
    },

    locale : function(text) {
        var matchRe = /^{([a-z0-9-_]+)}{(.+)}$/i,
            matches = text.match(matchRe);

        if (matches && matches.length) {
            return this.get(matches[1], matches[2]);
        } else {
            return text;
        }
    }
}, function() {
    window.i18n = new this();
});
