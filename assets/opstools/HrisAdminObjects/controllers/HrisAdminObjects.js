
steal(
        // List your Controller's dependencies here:
        'opstools/HrisAdminObjects/views/HrisAdminObjects/HrisAdminObjects.ejs',
function(){
System.import('appdev').then(function() {
    steal.import('appdev/ad',
                        'appdev/control/control',
                        'appdev/comm/hub',
                        'OpsPortal/classes/OpsTool').then(function() {
                            
    AD.Control.OpsTool.extend('HrisAdminObjects', {

        init: function( element, options ) {
            var self = this;
            options = AD.defaults({
                    templateDOM: '/opstools/HrisAdminObjects/views/HrisAdminObjects/HrisAdminObjects.ejs',
                    resize_notification: 'hrisadminobjects.resize',
                    tool:null   // the parent opsPortal Tool() object
            }, options);
            this.options = options;

            // call parent init()
            this._super(element, options);


            this.dataSource = this.options.dataSource; // AD.models.Projects;

//            this.shouldUpdateUI = true;     // we have not updated our UI for the work area yet.

            this.initDOM();


            AD.Control['new']('opstools.HrisAdminObjects.ObjectList', this.element.find('.hrisadminobject-object-widget'), {});
            AD.Control['new']('opstools.HrisAdminObjects.SetList', this.element.find('.hrisadminobject-set-widget'), {});
            AD.Control['new']('opstools.HrisAdminObjects.AttrList', this.element.find('.hrisadminobject-attr-widget'), {});
            AD.Control['new']('opstools.HrisAdminObjects.FormObjectNew', this.element.find('.tool-hrisadminobject-form-object-new'), {});
            AD.Control['new']('opstools.HrisAdminObjects.FormSetNew', this.element.find('.tool-hrisadminobject-form-set-new'), {});
            AD.Control['new']('opstools.HrisAdminObjects.FormAttrNew', this.element.find('.tool-hrisadminobject-form-attribute-new'), {});


			this.element.find('.tt').tooltip(options);
			this.element.find('.tt-field').tooltip({placement: 'left'});

			this.element.find('.po-help').popover(options);
			this.element.find('.po').popover({
			    html : true,
			    title: function() {
			      return self.element.find('.po-title').html();
			    },
			    content: function() {
			      return self.element.find('.po-content').html();
			    }
			});


        },





        initDOM: function() {

            this.element.html(can.view(this.options.templateDOM, {} ));

        },


/*
        needsUpdate: function() {
            // called by containing ops portal Tool() object when a new
            // has been issued.
            this.shouldUpdateUI = true;
        },



        resize: function( data ) {
            // called by containing ops portal Tool() object when a tool is
            // shown to the user.

            // more importantly it keeps a tool from resizing when it isn't
            // shown, which can introduce css mistakes from false height()
            // values.

            if (this.shouldUpdateUI) {
                AD.comm.hub.publish('hrisadminobjects.resize', data);
                this.shouldUpdateUI = false;
            }

        },

*/

        '.ad-item-add click': function($el, ev) {

            ev.preventDefault();
        }


    });


});
});
});