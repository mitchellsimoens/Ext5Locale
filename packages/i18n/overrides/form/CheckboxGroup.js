Ext.define('i18n.override.form.CheckboxGroup', {
    override : 'Ext.form.CheckboxGroup',

    initComponent : function () {
        var fieldLabel = this.fieldLabel;

        if (fieldLabel && window.i18n) {
            this.fieldLabel = i18n.locale(fieldLabel);
        }

        this.callParent();
    }
});
