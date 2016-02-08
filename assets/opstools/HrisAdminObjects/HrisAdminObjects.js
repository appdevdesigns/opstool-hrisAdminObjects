steal(
        // List your Page's dependencies here:
        'appdev',
        function() {
            AD.ui.loading.resources(9);
        },
        'opstools/HrisAdminObjects/hrisAdminObjects.css',
        function() {
            AD.ui.loading.completed(1);
            
            loadControllerFiles();
        }
);

function loadControllerFiles() {
    steal(
        "opstools/HrisAdminObjects/controllers/ObjectList.js",
        "opstools/HrisAdminObjects/controllers/SetList.js",
        "opstools/HrisAdminObjects/controllers/AttrList.js",
        "opstools/HrisAdminObjects/controllers/FormAttrNew.js",
        "opstools/HrisAdminObjects/controllers/FormObjectNew.js",
        "opstools/HrisAdminObjects/controllers/FormSetNew.js",
        "site/labels/HrisAdminObjects.js",
        function() {
            AD.ui.loading.completed(7);
            
            steal(
                "opstools/HrisAdminObjects/controllers/HrisAdminObjects.js",
                function() {
                    AD.ui.loading.completed(1);
                }
            )
        }
    );
}