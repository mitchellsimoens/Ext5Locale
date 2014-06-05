Ext.define('i18n.override.panel.Table', {
    override : 'Ext.panel.Table',

    initComponent : function() {
        var emptyText = this.emptyText;

        if (emptyText && window.i18n) {
            this.emptyText = i18n.locale(emptyText);
        }

        this.callParent();
    }
});
