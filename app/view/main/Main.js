Ext.define('Locale.view.main.Main', {
    extend : 'Ext.container.Container',
    xtype  : 'app-main',

    requires : [
        'Ext.plugin.Viewport'
    ],

    plugins : 'viewport',

    layout : {
        type : 'border'
    },

    items : [
        {
            xtype  : 'panel',
            title  : '{west-panel-title}{Default Title}', //in en.json but does not match default text
            region : 'west',
            html   : '{west-panel-html}{<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>}', //not in en.json but supports html tags
            width  : 250,
            split  : true,
            tbar   : [
                {
                    text : '{west-button-text}{Button}' //not in en.json
                }
            ]
        },
        {
            xtype  : 'form',
            title  : '{center-form-title}{A Form!}', //not in en.json
            region : 'center',
            items  : [
                {
                    xtype      : 'textfield',
                    fieldLabel : '{field-name}{Name}', //not in en.json
                    name       : 'name'
                },
                {
                    xtype    : 'checkboxfield',
                    boxLabel : '{field-active}{Active}', //is in en.json but does not match default text
                    name     : 'active'
                }
            ]
        }
    ]
});
