steal(
        // List your Page's dependencies here:
        'appdev',
        function() {
            AD.ui.loading.resources(9);
        },
        '//opstools/HrisAdminObjects/hrisAdminObjects.css'
).then(
        function() {
            AD.ui.loading.completed(1);
        },
        "opstools/HrisAdminObjects/controllers/ObjectList.js",
        "opstools/HrisAdminObjects/controllers/SetList.js",
        "opstools/HrisAdminObjects/controllers/AttrList.js",
        "opstools/HrisAdminObjects/controllers/FormAttrNew.js",
        "opstools/HrisAdminObjects/controllers/FormObjectNew.js",
        "opstools/HrisAdminObjects/controllers/FormSetNew.js",
        "site/labels/HrisAdminObjects.js"
).then(
        function() {
            AD.ui.loading.completed(7);
        },
        "opstools/HrisAdminObjects/controllers/HrisAdminObjects.js"
).then(function(){
        AD.ui.loading.completed(1);
});