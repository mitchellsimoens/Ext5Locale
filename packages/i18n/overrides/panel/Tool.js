Ext.define('i18n.override.panel.Tool', {
    override : 'Ext.panel.Tool',

    initComponent : function () {
        var tooltip = this.tooltip;

        if (tooltip && window.i18n) {
            this.tooltip = i18n.locale(tooltip);
        }

        this.callParent();
    }
});
