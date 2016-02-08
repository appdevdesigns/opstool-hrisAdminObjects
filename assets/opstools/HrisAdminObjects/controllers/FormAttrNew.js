
steal(
        // List your Controller's dependencies here:
        'appdev',
        'opstools/HrisAdminObjects/views/FormAttrNew/FormAttrNew.ejs',
function(){


    AD.Control.extend('opstools.HrisAdminObjects.FormAttrNew', {


        init: function( element, options ) {
            var self = this;
            this.options = AD.defaults({
                    templateDOM: '/opstools/HrisAdminObjects/views/FormAttrNew/FormAttrNew.ejs'
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

                if (key == 'hris.form.attribute.new') {
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