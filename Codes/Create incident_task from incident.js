//Business Rule type after update to create a incident_task from fields of incident

(function executeRule(current, previous /*null when async*/ ) {

    var gr_task = new GlideRecord('incident_task');
	
    gr_task.initialize();
	gr_task.setValue('incident', current.getUniqueValue());
	gr_task.setValue('short_description', 'Aprovação CoE');
	gr_task.setValue('description', 'Tarefa para aprovação do CoE do processo de melhorias');
	gr_task.setValue('assignment_group', 'c29d1ed31b3078507129eca0f54bcb6c'); //CoE SP
	gr_task.setValue('u_tipo_tarefa', 1);
	gr_task.setValue('company', current.getValue('u_company1'));
    gr_task.insert();

})(current, previous);