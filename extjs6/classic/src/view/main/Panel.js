Ext.define('Test.view.main.Panel', {
    extend: 'Ext.form.Panel',
    xtype: 'apppanel',
    requires: [
        'Test.view.main.PanelController'
    ],

    controller: 'panel',

    title: 'Add Record',

    layout: 'anchor',
    defaults: {
        anchor: '100%',
        allowBlank: false
    },

    defaultType: 'textfield',

    items: [
        {
            fieldLabel: 'Name',
            name: 'name'
        }, {
            fieldLabel: 'Email',
            vtype: 'email',
            name: 'email'
        }, {
            fieldLabel: 'Phone',
            minLength: 2,
            name: 'phone'
        }
    ],

    buttonAlign: 'center',
    buttons: [
        {
            text: 'Add Record',
            listeners: {
                click: 'addRecord'
            }
        }
    ]
});
