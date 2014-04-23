/**
 * APIAttributeSetController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to APIAttributeSetController)
   */

  _config: {}

  // Fixture Data:
  // Use this for initial design and testing
  , find:function(req, res) {
      res.json([

        {
           id: 1,
           type_id : 0,
           object_id:1,
           attributeset_key : "Basic Information",
           attributeset_pkey : "person_id",
           attributeset_table : "hris_person",
           attributeset_relation : "one",
           attributeset_uniqueKey : 0,
           attributeset_icon : "fa-user",
           createdAt:"2013/12/01"
        },

        {
           id: 2,
           type_id : 0,
           object_id:1,
           attributeset_key : "Contact",
           attributeset_pkey : "person_id",
           attributeset_table : "hris_person",
           attributeset_relation : "one",
           attributeset_uniqueKey : 0,
           attributeset_icon : "fa-envelope",
           createdAt:"2013/12/01"
        },

        {
           id: 3,
           type_id : 0,
           object_id:1,
           attributeset_key : "Worker Information",
           attributeset_pkey : "person_id",
           attributeset_table : "hris_person",
           attributeset_relation : "one",
           attributeset_uniqueKey : 0,
           attributeset_icon : "fa-clock-o",
           createdAt:"2013/12/01"
        },
        {
            id: 4,
            type_id : 0,
            object_id:1,
            attributeset_key : "Language",
            attributeset_pkey : "person_id",
            attributeset_table : "hris_person",
            attributeset_relation : "one",
            attributeset_uniqueKey : 0,
            attributeset_icon : "fa-fire",
            createdAt:"2013/12/01"
         },

         {
             id: 5,
             type_id : 0,
             object_id:1,
             attributeset_key : "Medical",
             attributeset_pkey : "person_id",
             attributeset_table : "hris_person",
             attributeset_relation : "one",
             attributeset_uniqueKey : 0,
             attributeset_icon : "fa-medkit",
             createdAt:"2013/12/01"
          },

          {
              id: 6,
              type_id : 0,
              object_id:1,
              attributeset_key : "Legal",
              attributeset_pkey : "person_id",
              attributeset_table : "hris_person",
              attributeset_relation : "one",
              attributeset_uniqueKey : 0,
              attributeset_icon : "fa-legal",
              createdAt:"2013/12/01"
           },

           {
               id: 7,
               type_id : 0,
               object_id:1,
               attributeset_key : "Address",
               attributeset_pkey : "person_id",
               attributeset_table : "hris_person",
               attributeset_relation : "one",
               attributeset_uniqueKey : 0,
               attributeset_icon : "fa-book",
               createdAt:"2013/12/01"
            },

      ]);
  }

  , create:function(req, res) {
      res.json({ status:'created' });
  }

  , update:function(req, res) {
      res.json({status:'updated'});
  }

  , destroy:function(req, res) {
      res.json({status:'destroyed'});
  }


};
