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

Criar um registro na tabela x_apfsa_csc_apsen_request_parameter para o record producer criado, adicionando o Assignment Group.

Criar notificação conforme o escopo

Criar regra para tornar o anexo obrigatório na tarefa conforme o escopo

------------------------------------------ 

	Solicito que o grupo de atribuição seja 'Suporte - Tecnologia';

Após a criação da RITM seja criada a tarefa: "Separar Acessório - Suporte"
 - SLA: 2 dias úteis 

Solicito que após o encerramento manual da tarefa 'Separar Acessório - Suporte' , ( com o campo de “Existe necessidade de solicitar Nota Fiscal?” = Sim) solicito que seja criada automaticamente a tarefa: "Gerar Nota Fiscal – Governança Financeira”
 - SLA: 3 dias úteis 

IMPORTANTE: Necessário ser apresentada todas as informações preenchidas nos campos “Dados da Nota Fiscal”, da tarefa “Separar Acessório – Suporte”, nesta tarefa, para tratativa da área de Governança Financeira.

Solicito que quando a tarefa tiver o status modificado para Pendente – Motivo: Nota Fiscal, deve ser solicitado o preenchimento obrigatório do campo: Número da Ordem de Nota Fiscal. 

Solicito que ao colocar a tarefa com o estado= pendente e o motivo=Nota Fiscal deve ser encaminhado e-mail para caique.barreto@apsen.com.br, com o conteúdo do campo Número da Ordem de Nota Fiscal preenchido.

Assunto: (Número da Tarefa) - Ordem de Nota Fiscal – Governança Financeira

Corpo da notificação: 

(Campo 'Número da Ordem de Nota Fiscal')

Solicito que  a tarefa só pode ser resolvida/encerrada se houver o anexo da Nota fiscal:
Apresentando o erro: 'Campo anexo obrigatório. Insira o anexo da “Nota Fiscal” para o fechamento da tarefa.

Solicito que ao encerrar a tarefa de 'Gerar Nota Fiscal – Governança Financeira', abrir automaticamente a tarefa “Enviar Acessório – Suporte”
 - SLA: 3 dias úteis 
