# Imprevistos do dia:



# Casos antigos pendentes:

# Casos trabalhados:

## GCB
User criteria

## Nexa
User testou errado

## Votorantin

Solicito que na regra existente hoje para incidente quando ele é colocado no estado "Em Espera" e com o motivo "Aguardando Processo de Melhorias" uma tarefa de incidente é aberta automaticamente para o grupo COE-SP-PROCESSOS-MELHORIAS sejam feitas as seguintes alterações:

https://votorantimtest.service-now.com/sys_script.do?sys_id=e02a115f1bb0f090ed76db51f54bcb32&sysparm_record_target=sys_script&sysparm_record_row=31&sysparm_record_rows=153&sysparm_record_list=collection%3Dincident%5EORcollectionINincident%2Ctask%5EORDERBYname


- Solicito que após o encerramento da tarefa 'Aprovação TI', se caso aprovada;

- Abrir uma tarefa com o nome 'Aprovação - MELHORIAS - PRECIFICAÇÃO'  e para o grupo 'ATOS - MELHORIAS - PRECIFICAÇÃO'; 

- O campo de 'Aprovação da Melhoria?' deve estar nessa tarefa 'Aprovação - MELHORIAS - PRECIFICAÇÃO' de ter o mesmo funcionamento das tarefas anteriores;

- Solicito que após o encerramento da tarefa 'Aprovação - MELHORIAS - PRECIFICAÇÃO', se caso aprovada;

- Abrir uma tarefa com o nome 'Aprovação TI' e para o grupo conforme empresa do solicitante'; 

- O campo de 'Aprovação da Melhoria?' deve estar nessa tarefa 'Aprovação TI' de ter o mesmo funcionamento das tarefas anteriores;

- Solicito que após a ultima aprovação, se positiva, a criação de uma RITM, com os mesmos dados e anexos do incidente (como já ocorre hoje) e ser atribuída para o grupo de Melhorias para o mesmo grupo que o incident foi aberto.
Ex: se o incidente foi aberto para o grupo ATOS - Suporte - SAP LES a RITM deve ser aberta para o grupo ATOS - Melhoria - SAP LES) e atribuir para o mesmo consultor que esta atendendo o incidente.

-Encerrar o incidente que gerou a RITM e inserir no campo Anotações de Resolução a informação: "Incidente será tratado como melhoria na RITMXXXXX"

Ficamos no aguardo de seu retorno.


-------------------------------------------------------

TODO

WORD
	gerar o doc atualizado do caso


SNOW
	workflow
		verificar se o item é a primeira task
		verificar se o item é aprovado
		criar tarefa de TI
		verificar se o item é o item de Ti
