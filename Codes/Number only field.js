//Client script onChange, on field thats changes

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    //Variable created containing the regex that validates if the value entered is WHOLE NUMBER ONLY

    var regExTest = /(^[0-9]*$)|(^[0-9]+,[0-9]*$)|(^[0-9]+,[0-9]+,[0-9]*$)|(^[0-9]+,[0-9]+,[0-9]+,[0-9]*$)/;

    //Validation condition using the REGEX variable.

    if ((newValue == 0) || (!regExTest.test(newValue))) {
        alert('Please enter only Numbers. For Example: (1 or 1000 or 1000000) - Without "." and either ","!'); //Enter THERE the MESSAGE to ALERT that you would like the USER to receive when typing wrong.
        g_form.setValue('volumes', ''); //Insert your field to be cleared after the ALERT confirmation.
    }

}