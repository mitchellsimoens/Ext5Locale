Ext.define('i18n.override.form.FieldSet', {
    override : 'Ext.form.FieldSet',

    initComponent : function () {
        var title = this.title;

        if (title && window.i18n) {
            this.title = i18n.locale(title);
        }

        this.callParent();
    }
});
