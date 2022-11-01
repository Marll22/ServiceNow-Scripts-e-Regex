// Flow designer action, set flow variable valueqwe2



/*
**Access Flow/Action data using the fd_data object. Script must return a value.
**example: var shortDesc = fd_data.trigger.current.short_description;
**return shortDesc;
*/

var totalTime = fd_data.flow_var.TimeRemaining;
var timeSeg = fd_data._14__update_record.record.monday; 
var timeTer = fd_data._14__update_record.record.tuesday;
var timeQua = fd_data._14__update_record.record.wednesday;
var timeQui = fd_data._14__update_record.record.thursday;
var timeSex = fd_data._14__update_record.record.friday;
var usedTime = timeSeg + timeTer + timeQua + timeQui + timeSex;
var newTotalTime = totalTime - usedTime;

return (newTotalTime);

