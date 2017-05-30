Ext.define('Test.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',

        'Test.view.main.MainController',
        'Test.view.main.MainModel',
        'Test.view.main.List',
        'Test.view.main.Panel'
    ],
    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'card'
    },
    activeItem: 'mainlist',

    buttonAlign: 'right',
    buttons: [
        {
            text: 'Grid',
            listeners: {
                click: 'showGrid'
            }
        }, {
            text: 'Add',
            listeners: {
                click: 'showPanel'
            }
        }
    ],

    items: [
        {
            xtype: 'mainlist',
            itemId: 'mainlist'
        }, {
            xtype: 'apppanel',
            itemId: 'apppanel'
        }

    ]
});
