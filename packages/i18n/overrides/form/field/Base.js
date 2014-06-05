Ext.define('i18n.override.form.field.Base', {
    override : 'Ext.form.field.Base',

    initComponent : function () {
        var me         = this,
            fieldLabel = me.fieldLabel,
            emptyText  = me.emptyText;

        if (window.i18n) {
            if (fieldLabel) {
                me.fieldLabel = i18n.locale(fieldLabel);
            }

            if (emptyText) {
                me.emptyText = i18n.locale(emptyText);
            }
        }

        me.callParent();
    }
});
