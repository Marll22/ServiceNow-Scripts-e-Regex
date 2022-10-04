//Create a Client Script, type onChange
//Select the table for the changes, in this example the table is 'sc_req_item'
//Select the field name, in this case is 'status'

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    if (newValue == 6) {
		var especifique = g_form.getValue('variables.specify');
		
		if (especifique == 'Tablet' || especifique == 'Smartphone'){
			g_form.setMandatory('variables.question_observacoes_gerais', true);
			g_form.setMandatory('variables.question_responsavel_pela_homologacao', true);
			g_form.setMandatory('variables.question_aprovado', true);
			g_form.setMandatory('variables.question_resultado_final_da_avaliacao', true);
			g_form.setMandatory('variables.question_suporte_de_seguranca', true);
			g_form.setMandatory('variables.question_dispositivo_recomendado', true);
			g_form.setMandatory('variables.question_dispositivo_possui_minimo_storage', true);
			g_form.setMandatory('variables.question_atende_requisitos_seguranca', true);
			g_form.setMandatory('variables.question_preco_aproximado', true);
			g_form.setMandatory('variables.question_motivo_homologacao', true);
			g_form.setMandatory('variables.question_especificacoes_tecnicas', true);
			g_form.setMandatory('variables.question_descricao_do_equipamento_homologado', true);
			g_form.setMandatory('variables.question_modelo', true);
			g_form.setMandatory('variables.question_marca', true);			
		}
		else if (especifique == 'Firewall' || especifique == 'Router' || especifique == 'Switch') {
			g_form.setMandatory('variables.campo_homologacao', true);	
		}
		else if (especifique == 'Authenticator' || especifique == 'Cash machine' || especifique == 'Desktop' || especifique == 'Printer' || especifique == 'Barcode reader' || especifique == 'Notebook' || especifique == 'Pin Pad' || especifique == 'Check Scanner' || especifique == 'Server') {
			g_form.setMandatory('variables.question_observacoes_gerais', true);
			g_form.setMandatory('variables.question_responsavel_pela_homologacao', true);
			g_form.setMandatory('variables.question_aprovado', true);
			g_form.setMandatory('variables.question_resultado_final_da_avaliacao', true);
			g_form.setMandatory('variables.question_atende_requisitos_seguranca', true);
			g_form.setMandatory('variables.question_motivo_homologacao', true);
			g_form.setMandatory('variables.question_especificacoes_tecnicas', true);
			g_form.setMandatory('variables.question_descricao_do_equipamento_homologado', true);
			g_form.setMandatory('variables.question_modelo', true);
			g_form.setMandatory('variables.question_marca', true);	
		}
		else {
			g_form.setMandatory('variables.campo_homologacao', true);	
		}
	}
}
