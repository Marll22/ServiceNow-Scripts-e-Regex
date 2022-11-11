// Set the variable 'answer' to a comma-separated list of user ids and/or group ids or an array of user/group ids to add as approvers.
//
// For example:
// answer = [];
// answer.push('id1');
// answer.push('id2');

// ask for approval in WF, no conditions. 


var answer = [];
if (current.request.requested_for.manager==''){
	answer.push(current.request.requested_for.location.u_region.u_it_manager);
		}
else {
	answer.push(current.request.requested_for.manager); 
	}