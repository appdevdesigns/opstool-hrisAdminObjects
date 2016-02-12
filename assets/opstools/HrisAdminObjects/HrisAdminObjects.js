steal(
// List your Page's dependencies here:
    'opstools/HrisAdminObjects/hrisAdminObjects.css',
    function () {
        System.import('appdev').then(function () {
            AD.ui.loading.resources(9);

            AD.ui.loading.completed(1);

            loadControllerFiles();
        });
    });

function loadControllerFiles() {
    steal.import(
        "opstools/HrisAdminObjects/controllers/ObjectList",
        "opstools/HrisAdminObjects/controllers/SetList",
        "opstools/HrisAdminObjects/controllers/AttrList",
        "opstools/HrisAdminObjects/controllers/FormAttrNew",
        "opstools/HrisAdminObjects/controllers/FormObjectNew",
        "opstools/HrisAdminObjects/controllers/FormSetNew",
        "site/labels/HrisAdminObjects").then(
            function () {
                AD.ui.loading.completed(7);

                steal.import("opstools/HrisAdminObjects/controllers/HrisAdminObjects")
                    .then(function () {
                        AD.ui.loading.completed(1);
                    });
            }
            );
}