steal(
        'appdev'
).then( function(){


    AD.models_base.APIAttribute = can.Model.extend({
        findAll: 'GET /opstool-hrisAdminObjects/apiattribute',
        findOne: 'GET /opstool-hrisAdminObjects/apiattribute/{id}',
        create:  'POST /opstool-hrisAdminObjects/apiattribute/create',
        update:  'PUT /opstool-hrisAdminObjects/apiattribute/update/{id}',
        destroy: 'DELETE /opstool-hrisAdminObjects/apiattribute/destroy/{id}.json',
        describe: function() {
            return {
          "attributeset_id": "integer",
          "attribute_label": "string",
          "attribute_question": "string",
          "attribute_column": "string",
          "attribute_datatype": "string",
          "meta": "string",
          "attribute_permission": "string",
          "attribute_uniqueKey": "integer"
};
        },
        fieldId:'id',
        fieldLabel:'attribute_label'
    },{
        model: function() {
            return AD.models.APIAttribute;
        },
        getID: function() {
            return this.attr(AD.models.APIAttribute.fieldId) || 'unknown id field';
        },
        getLabel: function() {
            return this.attr(AD.models.APIAttribute.fieldLabel) || 'unknown label field';
        }
    });


});