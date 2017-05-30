/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Test.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    showGrid: function() {
        this.getView().setActiveItem('mainlist');
        var grid = this.getView().getComponent('mainlist');
    },

    showPanel: function() {
        this.getView().setActiveItem('apppanel');
        var panel = this.getView().getComponent('apppanel');
        panel.reset();
    }
});
