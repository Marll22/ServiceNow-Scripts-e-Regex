//Client script onChange, runs when cell field changes.

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }
	
    var numero = g_form.getValue("question_contact_phone");
    numero = numero.replace(/[^0-9]/g, '');

    switch (numero.length) {
        case 10:
            numero = numero.replace(/(\d{2})(\d{0})(\d{4})(\d{1})/g, "(\$1)\$2 \$3-\$4");
            break;
        case 11:
            numero = numero.replace(/(\d{2})(\d{0})(\d{5})(\d{1})/g, "(\$1)\$2 \$3-\$4");
            break;
        default:
            g_form.clearValue('question_contact_phone');
            g_form.showErrorBox("question_contact_phone", 'Telefone ' + newValue + ' inválido.');
            g_form.showErrorBox("question_contact_phone", 'Formato: (XX) XXXXX-XXXX');
            g_form.showErrorBox("question_contact_phone", 'Digite somente os números - Ex.: 21912345678');
            return;
    }

    g_form.setValue("question_contact_phone", numero);
}