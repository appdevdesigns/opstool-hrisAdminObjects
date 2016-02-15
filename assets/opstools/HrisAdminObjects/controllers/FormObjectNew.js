
steal(
        // List your Controller's dependencies here:
        'opstools/HrisAdminObjects/views/FormObjectNew/FormObjectNew.ejs',
function(){
System.import('appdev').then(function() {
    steal.import('appdev/ad',
                        'appdev/control/control',
                        'appdev/comm/hub').then(function() {

    AD.Control.extend('opstools.HrisAdminObjects.FormObjectNew', {

        init: function( element, options ) {
            var self = this;
            this.options = AD.defaults({
                    templateDOM: '/opstools/HrisAdminObjects/views/FormObjectNew/FormObjectNew.ejs'
            }, options);

            // call parent init()
            this._super(element, options);

            this.dataSource = this.options.dataSource; // AD.models.Projects;

            this.element.hide();

            this.initDOM();

			// listen for resize notifications
            AD.comm.hub.subscribe('opsportal.resize', function (key, data) {

				self.element.find(".opsportal-stage-container").css("height", data.height + "px");
				
            });

            // listen for any hris.form request
            AD.comm.hub.subscribe('hris.form.**', function(key, data) {

                if (key == 'hris.form.object.new') {
                    self.element.show();
                } else {
                    self.element.hide();
                }
            })

        },



        initDOM: function() {

            this.element.html(can.view(this.options.templateDOM, {} ));

        },



        '.ad-item-add click': function($el, ev) {

            ev.preventDefault();
        }


    });


});
});
});