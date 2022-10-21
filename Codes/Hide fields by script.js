function hideAllFields(g_form)
{
	g_form.setVisible('description_of_ticket_provider_pessoa_fisica', false);
	g_form.setVisible('description_of_ticket_provider_pessoa_juridica', false);
	g_form.setVisible('description_of_ticket_provider_transportador_pessoa_fisica', false);
	g_form.setVisible('description_of_ticket_provider_transportador_pessoa_juridica', false);
	g_form.setVisible('description_of_ticket_provider_fornecedor_importacao', false);
	g_form.setVisible('description_of_ticket_provider_fornecedor_pessoa_juridica_raiz_graos', false);
	g_form.setVisible('description_of_ticket_provider_fornecedor_pessoa_fisica_raiz_graos', false);
	g_form.setVisible('description_of_ticket_provider_fornecedor_parceiro_cana_pessoa_juridica', false);
	g_form.setVisible('description_of_ticket_provider_fornecedor_cana_pessoa_juridica', false);
	g_form.setVisible('description_of_ticket_provider_fornecedor_cana_pessoa_fisica', false);
	g_form.setVisible('description_of_ticket_provider_visao_financeira_pessoa_fisica', false);
	g_form.setVisible('description_of_ticket_provider_visao_financeira_pessoa_juridica', false);
	g_form.setVisible('description_of_ticket_provider', false);
}

function onChange(control, oldValue, newValue, isLoading) 
{
	var fieldDescription;

	if (isLoading || newValue == '') 
	{
		hideAllFields(g_form);
		if (newValue == '')
			g_form.setVisible('description_of_ticket_provider', true);
		return;
	}
	switch (newValue)
	{
		case 'individual_provider':
			fieldDescription = 'description_of_ticket_provider_pessoa_fisica';
			break;
		case 'legal_entity_provider':
			fieldDescription = 'description_of_ticket_provider_pessoa_juridica';
			break;
		case 'individual_carrier':
			fieldDescription = 'description_of_ticket_provider_transportador_pessoa_fisica';
			break;
		case 'legal_entity_carrier':
			fieldDescription = 'description_of_ticket_provider_transportador_pessoa_juridica';
			break;
		case 'import_provider':
			fieldDescription = 'description_of_ticket_provider_fornecedor_importacao';
			break;
		case 'root_corporate_provider_grains':
			fieldDescription = 'description_of_ticket_provider_fornecedor_pessoa_juridica_raiz_graos';
			break;
		case 'root_individual_provider_grains':
			fieldDescription = 'description_of_ticket_provider_fornecedor_pessoa_fisica_raiz_graos';
			break;
		case 'provider_partner_cane_legal_entity':
			fieldDescription = 'description_of_ticket_provider_fornecedor_parceiro_cana_pessoa_juridica';
			break;
		case 'vendor_legal_entity':
			fieldDescription = 'description_of_ticket_provider_fornecedor_cana_pessoa_juridica';
			break;
		case 'sugar_cane_provider':
			fieldDescription = 'description_of_ticket_provider_fornecedor_cana_pessoa_fisica';
			break;
		case 'visao_financeira_pessoa_fisica':
			fieldDescription = 'description_of_ticket_provider_visao_financeira_pessoa_fisica';
			break;
		case 'visao_financeira_pessoa_juridica':
			fieldDescription = 'description_of_ticket_provider_visao_financeira_pessoa_juridica';
			break;
		default:
			fieldDescription = 'description_of_ticket_provider';
			break;
	}
	hideAllFields(g_form);
	g_form.setVisible(fieldDescription, true);
}
