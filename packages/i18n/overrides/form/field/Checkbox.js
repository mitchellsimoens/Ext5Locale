Ext.define('i18n.override.form.field.Checkbox', {
    override : 'Ext.form.field.Checkbox',

    initComponent : function () {
        var boxLabel = this.boxLabel;

        if (boxLabel && window.i18n) {
            this.boxLabel = i18n.locale(boxLabel);
        }

        this.callParent();
    }
});
