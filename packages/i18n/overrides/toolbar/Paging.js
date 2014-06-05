Ext.define('i18n.override.toolbar.Paging', {
    override : 'Ext.toolbar.Paging',

    afterPageText  : '{client-toolbar-paging-afterPage}{of {0}}',
    beforePageText : '{client-toolbar-paging-beforePage}{Page}',
    displayMsg     : '{client-toolbar-paging-display}{Displaying {0} - {1} of {2}}',
    emptyMsg       : '{client-toolbar-paging-empty}{No data to display}',
    firstText      : '{client-toolbar-paging-first}{First Page}',
    lastText       : '{client-toolbar-paging-last}{Last Page}',
    nextText       : '{client-toolbar-paging-next}{Next Page}',
    prevText       : '{client-toolbar-paging-prev}{Previous Page}',
    refreshText    : '{client-toolbar-paging-refresh}{Refresh}',

    initComponent : function() {
        var me             = this,
            displayMsg     = me.displayMsg,
            emptyMsg       = me.emptyMsg,
            beforePageText = me.beforePageText,
            afterPageText  = me.afterPageText,
            firstText      = me.firstText,
            prevText       = me.prevText,
            nextText       = me.nextText,
            lastText       = me.lastText,
            refreshText    = me.refreshText;

        if (window.i18n) {
            if (displayMsg) {
                me.displayMsg = i18n.locale(displayMsg);
            }

            if (emptyMsg) {
                me.emptyMsg = i18n.locale(emptyMsg);
            }

            if (beforePageText) {
                me.beforePageText = i18n.locale(beforePageText);
            }

            if (afterPageText) {
                me.afterPageText = i18n.locale(afterPageText);
            }

            if (firstText) {
                me.firstText = i18n.locale(firstText);
            }

            if (prevText) {
                me.prevText = i18n.locale(prevText);
            }

            if (nextText) {
                me.nextText = i18n.locale(nextText);
            }

            if (lastText) {
                me.lastText = i18n.locale(lastText);
            }

            if (refreshText) {
                me.refreshText = i18n.locale(refreshText);
            }
        }

        me.callParent();
    }
});
