steal(
        'appdev'
).then( function(){


    AD.models_base.APIObject = can.Model.extend({
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
            return AD.models.APIObject;
        },
        getID: function() {
            return this.attr(AD.models.APIObject.fieldId) || 'unknown id field';
        },
        getLabel: function() {
            return this.attr(AD.models.APIObject.fieldLabel) || 'unknown label field';
        }
    });


});