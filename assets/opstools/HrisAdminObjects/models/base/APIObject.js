steal(
        'appdev'
).then( function(){


    AD.Model.Base.extend('APIObject', { 
        findAll: 'GET /opstool-hrisAdminObjects/apiobject/find',
        findOne: 'GET /opstool-hrisAdminObjects/apiobject/{id}',
        create:  'POST /opstool-hrisAdminObjects/apiobject/create',
        update:  'PUT /opstool-hrisAdminObjects/apiobject/update/{id}',
        destroy: 'DELETE /opstool-hrisAdminObjects/apiobject/destroy/{id}.json',
        describe: function() {
            return {
                "object_name": "string",
                "object_key": "string",
                "object_table": "string",
                "object_description": "string",
                "object_icon": "string"
            };
        },
        fieldId:'id',
        fieldLabel:'object_name'
    },{
        model: function() {
            return AD.Model.get('APIObject');
        },
        getID: function() {
            return this.attr(this.model().fieldId) || 'unknown id field';
        },
        getLabel: function() {
            return this.attr(this.model().fieldLabel) || 'unknown label field';
        }
    });


});