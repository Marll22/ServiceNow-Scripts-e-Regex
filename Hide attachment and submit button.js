//Hide attachment on portal when a specific question is selected

function onChange(control, oldValue, newValue, isLoading) {
	var value;
	var attachmentButton;
	var submitButton;

	value = g_form.getValue('question_update_registration_of');
	attachmentButton = top.document.getElementsByTagName('sp-attachment-button');
	submitButton = top.document.getElementsByClassName('btn btn-primary btn-block ng-binding ng-scope');
	if(value == 'commercial_client' || value == 'pdm_material')
	{
		attachmentButton[0].parentNode.hidden = true;
		submitButton[0].parentNode.hidden = true;
	}
	else
	{
		attachmentButton[0].parentNode.hidden = false;
		submitButton[0].parentNode.hidden = false;
	}
	
	return;
}
