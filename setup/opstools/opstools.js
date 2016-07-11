/**
 * This file specifies any default Ops Portal Tool Definitions 
 * provided by this modlue.
 *  
 */
module.exports = [

    { 
        key:'hris.adminobjects', 
        permissions:'adcore.developer, hrisadmin.objects', 
        icon:'fa-wrench', 
        controller:'HrisAdminObjects',
        label:'opp.toolObjectBuilder',
        context:'opsportal',
        isController:true, 
        options:{}, 
        version:'0' 
    }

];
