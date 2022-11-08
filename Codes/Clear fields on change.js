//Client script onChange, runs when a field value is changed and cleans others fields

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }

    //Type appropriate comment here, and begin script below
    g_form.clearValue('question_symptoms');
    g_form.clearValue('question_systems_modules');
}