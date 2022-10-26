//Business RUle before update, runs when collab name changes

(function executeRule(current, previous /*null when async*/ ) {

    var req = current.parent.getRefRecord();
    req.u_aux_field_4 = current.u_collaborator_name;
    req.update();

})(current, previous);