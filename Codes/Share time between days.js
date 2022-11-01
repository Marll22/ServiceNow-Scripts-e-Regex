/*


week_starts_on
category
resource_plan
user
hours
*/

var i = 0;

// Glide record na tabela de ausencia
var gr = new GlideRecord('resource_plan');
gr.addQuery('sys_id', rpl);
gr.query();

// Salva as info do user e RPL/AUS
if (gr.hasNext()){
	var resource_plan = gr.number;
	var user = gr.user_resource;
	var category = gr.operational_work_type;
	var inicio = gr.start_date;
	var fim = gr.end_date;
	var hours = gr.planned_hours;
}

// Define a data do primeiro time card
if(inicio.getDayOfWeek() == 7)
	var startWeek = inicio;
else
	var startWeek = inicio - inicio.getDayOfWeek();

// While com horas restantes
while (hours > 0){
	gr_task.initialize();
	gr_task.setValue('incident', current.incident);
	gr_task.setValue('short_description', 'Aprovação TI');
}


// Glide record na time card
// Informações populadas da variaveis

// insert





//var dayReceived = 'start_day';
var startDay = '28/10/2022'.getDayOfWeek();
var remainingHours = 48;
var tSeg;
var tTer;
var tQua;
var tQui;
var tSex;
var i;


while (i < 5 || remainingHours > 8) {
	switch (i) {
		case 1:
			if (startDay > 1){
				next
			}
			break;
		case 2:
			break;
		case 3:
			break;
		case 4:
			break;
		case 5:
			break;
	
		default:
			break;
	}
	remainingHours -=8; 
	i++;
}

return day;