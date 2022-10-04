(function runTransformScript(source, map, log, target /*undefined onStart*/ ) {

        var cnpj = source.getValue('u_cnpj');

        var company = new GlideRecord("core_company");
        company.addQuery("u_cnpj", cnpj);
        company.query();

        if (company.next()) {
			    if (action == 'insert'){
            ignore = true;
				    gs.log('Foi');
			    }
        }

})(source, map, log, target);
