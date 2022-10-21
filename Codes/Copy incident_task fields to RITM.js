//Business Rule, type after update, with conditions to create a RITM and Update INCIDENT


(function executeRule(current, previous /*null when async*/ ) {

	var gr_incident = new GlideRecord('incident');
    gr_incident.addQuery('sys_id', current.incident);
    gr_incident.query();

    if (current.u_aprovacao_melhoria == 0) {

        if (gr_incident.next()) {
            gr_incident.setValue('state', 2);
            gr_incident.update();
        }

    } else if (current.u_aprovacao_melhoria == 1) {

        if (gr_incident.next()) {

            var gr_request = new GlideRecord('sc_request');
            gr_request.initialize();
            gr_request.setValue('requested_for', gr_incident.caller_id);
            gr_request.setValue('stage', 'fulfillment');
            gr_request.insert();

            var gr_ritm = new GlideRecord('sc_req_item');
            gr_ritm.initialize();
            gr_ritm.setValue('company', gr_incident.company);
            gr_ritm.setValue('contact_type', gr_incident.contact_type);
            gr_ritm.setValue('state', 1);
            gr_ritm.setValue('impact', gr_incident.impact);
            gr_ritm.setValue('urgency', gr_incident.urgency);
            gr_ritm.setValue('priority', gr_incident.priority);
            gr_ritm.setValue('short_description', gr_incident.short_description);
            gr_ritm.setValue('description', gr_incident.description);
            gr_ritm.setValue('assigned_to', gr_incident.assigned_to);
            gr_ritm.setValue('request', gr_request.getUniqueValue());
			gr_ritm.setValue('u_incidente_pai', gr_incident.getUniqueValue());
			gr_ritm.setValue('cat_item', gr_incident.u_item);
            gr_ritm.insert();

            gr_incident.setValue('u_ritm_melhoria', gr_ritm.getUniqueValue());
            gr_incident.setValue('state', 6);
            gr_incident.update();
			
            gr_ritm.setValue('assignment_group', '190d45161b1f3c107129eca0f54bcbd3'); //Melhorias Funcional SAP - Precificação
            gr_ritm.update();

            GlideSysAttachment.copy('incident', gr_incident.getUniqueValue(), 'sc_req_item', gr_ritm.getUniqueValue());

        }

    }

})(current, previous);