// Its a 'after' type BR who runs when state in task table changes to cancel or close status
// and uses only update status



(function executeRule(current, previous /*null when async*/) {

	var gr = new GlideRecord("sn_customerservice_task");
	gr.addEncodedQuery("stateNOT IN3,5^u_case="+current.getValue("u_case"));
	gr.query();
	if (gr.getRowCount() == 0){
		var caseOpen = new GlideRecord("sn_customerservice_case");
		caseOpen.get(current.getValue("u_case"));
		caseOpen.u_open_task = false;
		caseOpen.update();
	}	
	
})(current, previous);