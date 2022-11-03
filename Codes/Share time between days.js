// Disable BR to set time card
	var br = new GlideRecord('sys_script');
	br.addEcondedQuery('sys_idSTARTSWITH90c0e9169313220064f572edb67ffbc0');
	br.query();
	while(br.next())
	{
		br.active = false;
		br.update();
	}

// Define aobject to store data
	var bag = {
		i: 0,
		resource_plan: '',
		user: '',
		category: '',
		inicio: '',
		fim: '',
		hours: '',
		startWeek: '',
		tc: ''
	};

// Glide record na tabela de ausencia
	var gr = new GlideRecord('resource_plan');
	gr.addQuery('sys_id', inputs.rpl);
	gr.query();

// Salva as info do user e RPL/AUS
	if (gr.hasNext()){
		bag.resource_plan = gr.getValue('number');
		bag.user = gr.getValue('user_resource');
		bag.category = gr.getValue('operational_work_type');
		bag.inicio = gr.getValue('start_date');
		bag.fim = gr.getValue('end_date');
		bag.hours = gr.getValue('planned_hours');
	}

// Define a data do primeiro time card
	if(bag.inicio.getDayOfWeek() == 7)
		bag.startWeek = bag.inicio;
	else
		bag.startWeek = bag.inicio - bag.inicio.getDayOfWeek();

// While com horas restantes para gerar os time cards e registrar infos
	while (hours > 0){
		bag.tc = new GlideRecord('time_card');
		bag.tc.initialize();
		bag.tc.setValue('week_starts_on', startWeek);
		bag.tc.setValue('user', user);
		bag.tc.setValue('category', category);
		bag.tc.setValue('resource_plan', resource_plan);
		bag = setHoursTimeCard(bag);
		bag.tc.insert();
		bag.startWeek += 7;
	}

// Enable BR to set time card
	var br1 = new GlideRecord('sys_script');
	br1.addEcondedQuery('sys_idSTARTSWITH90c0e9169313220064f572edb67ffbc0');
	br1.query();
	while(br1.next())
	{
		br1.active = true;
		br1.update();
	}


// Function to distribute hours
function setHoursTimeCard(bag) {
		if (bag.inicio.getDayOfWeek() == 1){
			if (bag.hours >= 8){
				bag.tc.monday == 8;
				bag.hours -= 8;
				bag.inicio += 1;
			}
			else {
				bag.tc.monday == bag.hours;
				bag.hours -= bag.hours;
				bag.inicio += 1;
			};
		};
		if (bag.inicio.getDayOfWeek() == 2){
			if (bag.hours >= 8){
				bag.tc.tuesday == 8;
				bag.hours -= 8;
				bag.inicio += 1;
			}
			else {
				bag.tc.tuesday == bag.hours;
				bag.hours -= bag.hours;
				bag.inicio += 1;
			};
		};
		if (bag.inicio.getDayOfWeek() == 3){
			if (bag.hours >= 8){
				bag.tc.wednesday == 8;
				bag.hours -= 8;
				bag.inicio += 1;
			}
			else {
				bag.tc.wednesday == bag.hours;
				bag.hours -= bag.hours;
				bag.inicio += 1;
			};
		};
		if (bag.inicio.getDayOfWeek() == 4){
			if (bag.hours >= 8){
				bag.tc.thursday == 8;
				bag.hours -= 8;
				bag.inicio += 1;
			}
			else {
				bag.tc.thursday == bag.hours;
				bag.hours -= bag.hours;
				bag.inicio += 1;
			};
		};
		if (bag.inicio.getDayOfWeek() == 5){
			if (bag.hours >= 8){
				bag.tc.friday == 8;
				bag.hours -= 8;
				bag.inicio += 1;
			}
			else {
				bag.tc.friday == bag.hours;
				bag.hours -= hours;
				bag.inicio += 1;
			};
		}
		return bag;

	}
