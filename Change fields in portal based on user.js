var gr = new GlideRecord('sys_user_grmember'); // Table stores the mapping of user and group.
gr.addQuery('user', '<sys_id_user>'); // replace <sys_id_user> with actual sys_id of user.
gr.addQuery('group', '<sys_id_group>');// replace <sys_id_group> with actual sys_id of group.
gr.query();

if(gr.next()){
  gs.info("User is Member of Group!");
}
else{
  gs.info("User is Not a Member of Group!");
}
