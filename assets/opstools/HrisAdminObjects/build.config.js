module.exports = {
    "paths": {
        'opstools/HrisAdminObjects': 'opstools/HrisAdminObjects/HrisAdminObjects.js'
    },
    "bundle": ['opstools/HrisAdminObjects'],
    "meta": {
        "opstools/HrisAdminObjects": {
            "deps": [
                "opstools/HrisAdminObjects/hrisAdminObjects.css",

                "opstools/HrisAdminObjects/controllers/AttrList",
                "opstools/HrisAdminObjects/controllers/FormAttrNew",
                "opstools/HrisAdminObjects/controllers/FormObjectNew",
                "opstools/HrisAdminObjects/controllers/FormSetNew",
                "opstools/HrisAdminObjects/controllers/HrisAdminObjects",
                "opstools/HrisAdminObjects/controllers/ObjectList",
                "opstools/HrisAdminObjects/controllers/SetList",

                "opstools/HrisAdminObjects/models/APIAttribute",
                "opstools/HrisAdminObjects/models/APIAttributeSet",
                "opstools/HrisAdminObjects/models/APIObject",
            ]
        }
    }
};
