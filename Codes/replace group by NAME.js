//Background script to replace groups by name

var gr_incident = new GlideRecord('incident');
    gr_incident.addQuery('number', 'INC0474578');
    gr_incident.query();

if (gr_incident.next()){
    var err = gr_incident.assignment_group.getDisplayValue();
    err = err.toLowerCase();
    gs.print('antes: '+err);



    var newString = err.replace('suporte', 'melhorias');

    gs.print('depois: '+newString);
   
    var nameGroup = new GlideRecord('sys_user_group');
    nameGroup.addEncodedQuery('nameLIKE'+newString);
    nameGroup.query();

    if (nameGroup.next()){
        gs.print(nameGroup.sys_id);
    }
}
