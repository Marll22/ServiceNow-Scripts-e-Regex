var gr = new GlideRecord('sn_customerservice_task');
gr.addEncodedQuery('stateNOT IN3,5^u_caseISNOTEMPTY');
gr.query();
while (gr.next()) {
	var caseOpen = new GlideRecord("sn_customerservice_case");
	caseOpen.get(gr.getValue("u_case"));
	caseOpen.u_open_task = true;	
	gr.setWorkflow(false);
	caseOpen.update();
	gr.update();
}