// onChange Client Script, runs when requested for field changes

function onChange(control, oldValue, newValue, isLoading) {
	var usr = g_form.getReference('requested_for',setvariables);
 }
 
 function setvariables(usr){	
	g_form.setValue('variables.matricula',usr.u_description);
 }