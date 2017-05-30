Ext.define('Test.view.main.PanelController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.panel',

    addRecord: function() {
        var view = this.getView();

        if (view.isValid()) {
            view.fireEvent('add_record', view);
        }
    }
});
