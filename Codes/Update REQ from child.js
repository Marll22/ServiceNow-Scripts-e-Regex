//Business Rule, before update. condition, 'state' changes to closed complete




(function executeRule(current, previous /*null when async*/ ) {

	var req = current.parent.getRefRecord();
	req.variables.need_request_invoice = current.need_request_invoice;
	req.variables.employee_full_name = current.employee_full_name;
	req.variables.accessories = current.accessories;
	req.variables.employee_city = current.employee_city;
	req.variables.sap_code = current.sap_code;
	req.variables.equipment_shipping = current.equipment_shipping;
	req.variables.volumes = current.volumes;
	req.variables.invoice_type = current.invoice_type;
    req.update();
		
})(current, previous);



