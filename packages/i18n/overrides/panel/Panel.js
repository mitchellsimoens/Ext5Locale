Ext.define('i18n.override.panel.Panel', {
    override : 'Ext.panel.Panel',

    initComponent : function () {
        var title = this.title;

        if (title && window.i18n) {
            this.title = i18n.locale(title);
        }

        this.callParent();
    }
});
