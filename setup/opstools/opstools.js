/**
 * This file specifies any default Ops Portal Tool Definitions 
 * provided by this modlue.
 *  
 */
module.exports = [

    { 
        key:'hris.adminobjects', 
        permissions:'hrisadmin.objects', 
        icon:'fa-wrench', 
        controller:'HrisAdminObjects',
        label:'Hris Admin Object - demo',
        // context:'opsportal',
        isController:true, 
        options:{}, 
        version:'0' 
    }

];
