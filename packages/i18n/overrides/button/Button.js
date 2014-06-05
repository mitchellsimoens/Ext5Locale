Ext.define('i18n.override.button.Button', {
    override : 'Ext.button.Button',

    initComponent : function () {
        var me      = this,
            text    = me.text,
            tooltip = me.tooltip;

        if (window.i18n) {
            if (text) {
                me.text = i18n.locale(text);
            }

            if (tooltip) {
                me.tooltip = i18n.locale(tooltip);
            }
        }

        me.callParent();
    }
});
