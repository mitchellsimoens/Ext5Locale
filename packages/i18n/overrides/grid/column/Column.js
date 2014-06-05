Ext.define('i18n.override.grid.column.Column', {
    override : 'Ext.grid.column.Column',

    initComponent : function () {
        var text = this.text;

        if (text && window.i18n) {
            this.text = i18n.locale(text);
        }

        this.callParent();
    }
});
