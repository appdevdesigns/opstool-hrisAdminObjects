module.exports = {
    "paths": {
        'opstools/hrisAdminObjects': 'opstools/HrisAdminObjects/HrisAdminObjects.js'
    },
    "bundle": ['opstools/hrisAdminObjects'],
    "meta": {
        "opstools/hrisAdminObjects": {
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