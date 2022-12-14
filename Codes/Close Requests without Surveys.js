
var queryRecords;
var querySurvey;
var queryBR;

queryRecords = 'numberINRITM0879664,RITM0884307,RITM0886557,RITM0892636,RITM0896133,RITM0906193,RITM0906379,RITM0915058,RITM0916436,RITM0917623,RITM0937568,';

querySurvey = 'sys_id=72464c65db539850d10d16f35b9619f1^ORsys_id=98d8664e4728851091127d01e36d437f^ORsys_id=ab66f549db485010ee414540399619c5^ORsys_id=4df21899db366380ee414540399619e2^ORsys_id=3591d19ed7331100828320300e6103ba^ORsys_id=1b56c64fdbe76700ee41454039961932^ORsys_id=502a2c44d7211100158ba6859e6103a3^ORsys_id=09f0660bdb2b6700ee41454039961973^ORsys_id=0eca60a9534000102905ddeeff7b12d0^ORsys_id=87186844d7211100158ba6859e610378^ORsys_id=ae1a2c44d7211100158ba6859e61038f^ORsys_id=b1483c2307c41010ec5627219cd30056';

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

// Disable surveys
var gr = new GlideRecord('asmt_metric_type');
gr.addQuery(querySurvey);
gr.query();
while(gr.next())
{
    gr.active = false;
    gr.update();
}

// Set records to resolved
var gr2 = new GlideRecord('sc_req_item');
gr2.addEncodedQuery(queryRecords);
gr2.addQuery("sys_created_on", ">=", "2018-06-24 00:00:00");
gr2.addQuery("sys_created_on", "<=", "2022-08-18 00:00:00");
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

// Enable surveys
var gr4 = new GlideRecord('asmt_metric_type');
gr4.addQuery(querySurvey);
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
