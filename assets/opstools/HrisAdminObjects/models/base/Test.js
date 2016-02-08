steal(
        'appdev',
function(){

    // Namespacing conventions:
    // AD.Model.Base.extend("[application].[Model]" , { static }, {instance} );  --> Object
    AD.Model.Base.extend("opstools.HrisAdminObjects.Test", {
        findAll: 'GET /test/find',
        findOne: 'GET /test/{id}',
        create:  'POST /test/create',
        update:  'PUT /test/update/{id}',
        destroy: 'DELETE /test/destroy/{id}.json',
        describe: function() {
            return {
                      "myname": "string",
                      "mynumber": "integer"
            };
        },
        fieldId:'id',
        fieldLabel:'myname'
    },{
        model: function() {
            return AD.Model.get('opstools.HrisAdminObjects'); //AD.models.opstools.HrisAdminObjects.Test;
        },
        getID: function() {
            return this.attr(this.model().fieldId) || 'unknown id field';
        },
        getLabel: function() {
            return this.attr(this.model().fieldLabel) || 'unknown label field';
        }
    });


});