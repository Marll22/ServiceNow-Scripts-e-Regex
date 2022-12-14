
var queryRecords;
var queryNotifications;
var queryBR;

queryRecords = '';

queryNotifications = 'name=(ACN) [EN] Survey User Invite^ORname=OCL:  Survey IT notification^ORname=(ACN) [PB] RITM BR0 Solicitacao fechada^ORname=(ACN) [PB] RITM BR0 Solicitacao resolvid^ORname=(ACN) [PB] R. Item resolved (ExtUsers)^ORname=2 (ACN) [EN] RITM CTR Resolved^ORname=(ACN) [PB] RITM CTR Resolved^ORname=(ACN) [PB] Survey User Invite^ORname=(ACN) [EN] RITM CTR Resolved^ORname=(ACN) [EN] REQUEST PROCESSED^ORname=OCL - [PB] RITM BRFAC Solicitacao resolvid^ORname=(ACN) [PB] RITM BR0 Informacao de cancel ^ORname=(ACN) [FR] Survey User Invite ^ORname=(ACN) [NL] Survey User Invite^ORname=(ACN) [EN] Survey User Invite ^ORname=(ACN) [FR] Survey User Invite ^ORname=(ACN) [FR] Survey User Invite^ORname=(ACN) [EN] Survey User Invite ^ORname= (ACN) [FR] Survey User Invite ';

queryBR = 'nameLIKEOCL: Abort Close Incorrect ';

// Disable BR which prevents closing of requests by scripts
var gr0 = new GlideRecord('sys_script');
gr0.addQuery(queryBR);
gr0.query();
while(gr0.next())
{
    gr0.active = false;
    gr0.update();
}

// Disable notifications
var gr = new GlideRecord('sysevent_email_action');
gr.addQuery(queryNotifications);
gr.query();
while(gr.next())
{
    gr.active = false;
    gr.update();
}

// Set records to resolved
var gr2 = new GlideRecord('sc_req_item');
gr2.addEncodedQuery(queryRecords);
gr2.addQuery("sys_created_on", ">=", "2021-06-24 00:00:00");
gr2.addQuery("sys_created_on", "<=", "2021-08-18 00:00:00");
gr2.query();

while(gr2.next())
{
    var workflow = new Workflow();
    workflow.cancel(gr2);
    gr2.state = 3;
    gr2.stage = 'complete';
    gr2.comments = 'The request has been automatically marked as Completed.';
    gr2.update();
}

// Enable notifications
var gr4 = new GlideRecord('sysevent_email_action');
gr4.addQuery(queryNotifications);
gr4.query();
while(gr4.next())
{
    gr4.active = true;
    gr4.update();
}

// Enable BR which prevents closing of requests by scripts
var gr5 = new GlideRecord('sys_script');
gr5.addQuery(queryBR);
gr5.query();
while(gr5.next())
{
    gr5.active = true;
    gr5.update();
}
