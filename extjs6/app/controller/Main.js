Ext.define('Test.controller.Main', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'main',
        selector: 'app-main'
    },{
        ref: 'list',
        selector: 'mainlist'
    }],

    control: {
        'apppanel': {
            add_record: 'addRecord'
        }
    },

    addRecord: function(panel) {
        var store = this.getList().getStore();
        var rec = store.getModel().create();
        panel.updateRecord(rec);

        store.loadRecords([rec], {addRecords: true});


        this.getMain().getController().showGrid();
    }
});