//Business Rule after update, that runs when state changes to closed complete


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
            var group = gr_incident.assignment_group;
        }

        var gr_task = new GlideRecord('incident_task');
		var companies = current.company.toString();
		
		gr_task.initialize();
        gr_task.setValue('incident', current.incident);
        gr_task.setValue('short_description', 'Aprovação TI');
        gr_task.setValue('description', 'Tarefa para aprovação do TI do processo de melhorias');
        gr_task.setValue('u_tipo_tarefa', 2);
		gr_task.setValue('company', companies);
		gr_task.setValue('description', companies);
        
		
		switch(companies) {
			case '8f1bcb261b1b0510cd5043bbe54bcb61': //Auren
				gr_task.setValue('assignment_group', 'd915f60bdb6a1d90ac580fbca3961977');
				break;

			case '7b30d2b91b175858304a0f60f54bcb13': //VOTORANTIM CIMENTOS
				gr_task.setValue('assignment_group', 'fa58be671b823850304a0f60f54bcb9a');
				break;

			case 'e850d5c00f770300a47e4d6a42050e5e': //NEXA
				gr_task.setValue('assignment_group', 'b6c876ab1b823850304a0f60f54bcbac');
				break;

			case '6172d3cadb303f0068729d40ba9619d0': //VCNA
				gr_task.setValue('assignment_group', '8159feef1b823850304a0f60f54bcb30');
				break;

			case 'f66b14e1c611227b0166c3a0df4046ff':  //VOTORANTIM S/A
				gr_task.setValue('assignment_group', 'c29d1ed31b3078507129eca0f54bcb6c');
				break;

			case '0581d0abdbbdab00045832ffaa961967':   //VOTORANTIM S/A CURITIBA
				gr_task.setValue('assignment_group', '8df8722f1b823850304a0f60f54bcb8a');
				break;

			case '2f5c8a0edb4ed8d4ca1532ffaa96197a':  //CBA
				gr_task.setValue('assignment_group', '327872e71b823850304a0f60f54bcb44');
				break;

			default:
				gr_task.setValue('assignment_group', '');
				break;
		}	
        gr_task.insert();
    }

})(current, previous);

