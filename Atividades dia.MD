# Imprevistos do dia:



# Casos antigos pendentes:

## JSL
### 20595
	Faltou liberar o dash para os users
	4 users que vem da tabela sap e precisam ser atualizados por la
	Ficou em impedimento devido a umda integração do sap x sn, aguardando resposta do user

## Raizen
### 20703
	5 horas no caso
	No final era um grupo com o nome em branco e o user usava para testar.
	Bia ajudou nos dois casos


# Casos trabalhados:

## Dedalus

### 20815
	Caso de duvidas, levantado as notificações das duas tabelas e apontada conforme solicitado
	Enviado dois arquivos, excel e word com explicações sobre a solicitação
	Olhar task_SLA, provavel que esteja rodando quando atinge uma certa condição, procurar onde afeta a sc_req_item e a incident 
	Aviso de escalonamento, sc_req_item e incident

## Lundin


## Apsen

### 20727
Inativar o item: https://apsendev.service-now.com/sc_cat_item.do?sys_id=227394341b9341500b15eca12b4bcb1f
 

Criar um Record Producer para a tabela x_apfsa_csc_apsen_requests, com as informações solicitadas no escopo, com o mesmo nome e variable sets do item inativado acima.
 

No campo Script do record producer criado inserir o seguinte código:
new NegociosUtils().updateDefaultRP(current, producer, RP);
 

Criar um registro na tabela x_apfsa_csc_apsen_request_parameter para o record producer criado, adicionando o Assignment Group.
 

Criar um workflow para rodar na tabela x_apfsa_csc_apsen_requests, colocando nas condições que o Use Default Workflow é False e o nome do item criado
 



 

 

Criar o fluxo e tarefas conforme o escopo
 

Os campos da tarefa devem ser variáveis no record producer
 

No campo abaixo, criar a choice Nota Fiscal (traduzir):
https://apsendev.service-now.com/sys_dictionary.do?sysparm_query=name%3dx_apfsa_csc_apsen_business_requests_tasks%5eelement%3du_on_hold_reason&sysparm_query_encoded=name%3dx_apfsa_csc_apsen_business_requests_tasks%5eelement%3du_on_hold_reason&sysparm_referring_url=x_apfsa_csc_apsen_task_paytrack.do%3fsys_id%3d5e8bde8e1b1915504392eb1a3b4bcb9f%4099%40sysparm_record_rows%3d35%4099%40sysparm_record_target%3dx_apfsa_csc_apsen_task_paytrack%4099%40sysparm_record_list%3dORDERBYnumber%4099%40sysparm_record_row%3d2&sysparm_view=advanced&sysparm_view_forced=true
 

Criar notificação conforme o escopo
 

Criar regra para tornar o anexo obrigatório na tarefa conforme o escopo
 

QUALQUER DÚVIDA, C