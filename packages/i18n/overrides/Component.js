Ext.define('i18n.override.Component', {
    override : 'Ext.Component',

    initComponent : function () {
        var html = this.html;

        if (html && window.i18n) {
            this.html = i18n.locale(html);
        }

        this.callParent();
    }
});
