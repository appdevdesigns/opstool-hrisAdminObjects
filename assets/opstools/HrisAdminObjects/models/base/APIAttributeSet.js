steal(
        'appdev'
).then( function(){


    AD.models_base.APIAttributeSet = can.Model.extend({
        findAll: 'GET /opstool-hrisAdminObjects/apiattributeset',
        findOne: 'GET /opstool-hrisAdminObjects/apiattributeset/{id}',
        create:  'POST /opstool-hrisAdminObjects/apiattributeset/create',
        update:  'PUT /opstool-hrisAdminObjects/apiattributeset/update/{id}',
        destroy: 'DELETE /opstool-hrisAdminObjects/apiattributeset/destroy/{id}.json',
        describe: function() {
            return {
          "type_id": "integer",
          "object_id": "integer",
          "attributeset_key": "string",
          "attributeset_pkey": "string",
          "attributeset_table": "string",
          "attributeset_relation": "string",
          "attributeset_uniqueKey": "integer",
          "attributeset_icon": "string"
};
        },
        fieldId:'id',
        fieldLabel:'attributeset_key'
    },{
        model: function() {
            return AD.models.APIAttributeSet;
        },
        getID: function() {
            return this.attr(AD.models.APIAttributeSet.fieldId) || 'unknown id field';
        },
        getLabel: function() {
            return this.attr(AD.models.APIAttributeSet.fieldLabel) || 'unknown label field';
        }
    });


});