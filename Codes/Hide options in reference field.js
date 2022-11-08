//Script include, by group or role

var sapCheck = Class.create();
sapCheck.prototype = {
        initialize: function() {},

        isSapItem: function(category) {
            var langUser = gs.getUser().getLanguage();
            //var cUser = gs.getUserID();
			var userRole = gs.getUser().hasRole('sap_key_user');
			
            if (category == 'corporate systems') {
				
                /*var gr = new GlideRecord('sys_user_grmember');
                gr.addQuery('user', cUser); // current user
                gr.addQuery('group', 'dab0d48adbf61510249bad2414961916'); // Sap key user
                gr.query();
				
                if (gr.next()) {
				*/
				if (userRole){
                    return 'name=incident^element=subcategory^inactive=false^dependent_value=' + category + '^language=' + langUser;
                } 
				else {
                    return 'name=incident^element=subcategory^inactive=false^dependent_value=' + category + '^language=' + langUser + '^value!=sap';
                }
				
            }
			else{
				return 'name=incident^element=subcategory^inactive=false^dependent_value=' + category; + '^language=' + langUser;
			}
        },
        type: 'sapCheck'
};


// Reference Qualifier, set in variable 

javascript:  new sapCheck().isSapItem(current.variables.category);