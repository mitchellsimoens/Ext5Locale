Ext.define('i18n.override.grid.column.Action', {
    override : 'Ext.grid.column.Action',

    initComponent : function () {
        var tooltip = this.tooltip;

        if (text && window.i18n) {
            this.tooltip = i18n.locale(tooltip);
        }

        this.callParent();
    }
});
