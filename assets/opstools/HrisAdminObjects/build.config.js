module.exports={
    // map: {
    // },
    // paths: {
    // },
    shim : {

        //// Don't include our labels in our production.js
        'site/labels/HrisAdminObjects.js' : { packaged:false, ignore:true }
    }
    // ext: {
    //     js: "js",
    //     css: "css",
    //     less: "steal/less/less.js",
    //     coffee: "steal/coffee/coffee.js",
    // }
};
    


