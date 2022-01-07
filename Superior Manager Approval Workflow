// Set the variable 'answer' to a comma-separated list of user ids and/or group ids or an array of user/group ids to add as approvers.
//
// For example:
//       answer = [];
//       answer.push('id1');
//       answer.push('id2');


var answer = [];
var grUser = new GlideRecord('sys_user');
grUser.addQuery('sys_id', current.request.requested_for);
var qc = grUser.addQuery('u_superior_manager','!=', ''); 
qc.addOrCondition('u_executive_manager','!=','');
grUser.query();

if(grUser.next())
{
	if(grUser.getValue('u_superior_manager') != null)
  {
		answer.push(grUser.getValue('u_superior_manager').toString());
  } 
  else if (grUser.getValue('u_executive_manager') != null) 
  {
		answer.push(grUser.getValue('u_executive_manager').toString());
	}
	
}
