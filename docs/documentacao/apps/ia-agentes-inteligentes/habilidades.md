# Habilidades

As Habilidades são as ações práticas que seu Agente de IA pode executar. É aqui que você transforma a capacidade de conversação do agente em resultados tangíveis, como transferir um atendimento, criar um card no CRM ou atualizar dados de um contato.

Para começar, na aba **“Habilidades”**, clique em **“+ Adicionar habilidade”**. Uma janela se abrirá com todas as ações disponíveis.

## Campos Comuns a Todas as Habilidades

Antes de detalhar cada habilidade, entenda os campos que aparecem em quase todas elas:

* **Nome da habilidade:** Um nome interno para você identificar a ação (ex: "Transferir para Suporte").
* **Definição de uso:** Este é o campo mais importante. Aqui você descreve em linguagem natural *quando* a IA deve usar esta habilidade. Quanto mais claro e detalhado, mais assertivo será o agente. (ex: "Use quando o cliente disser que quer falar com um especialista ou atendente humano.").
* **Não enviar resposta após execução:**
  * **Regra de Negócio:** Se marcado, a habilidade é executada de forma silenciosa, sem enviar uma mensagem ao cliente. Ideal para ações de bastidores, como aplicar uma etiqueta. Por padrão, esta opção vem desmarcada.

## Habilidades Disponíveis

### 1. Etiquetas do Contato

* **Objetivo:** Adicionar ou remover etiquetas de um contato para segmentação e organização.
* **Campos Específicos:**
  * **Ação:** Escolha entre Adicionar etiqueta ou Remover etiqueta.
  * **Etiquetas:** Selecione as etiquetas que serão aplicadas ou removidas.

### 2. Transferir Atendimento

* **Objetivo:** Encaminhar a conversa para uma equipe de atendimento humano.
* **Campos Específicos:**
  * **Quando transferir:** Campo para detalhar a condição da transferência.
  * **Equipe:** Selecione a equipe que receberá o atendimento.
  * **Finalizar atuação da IA após a transferência:**
    * **Regra de Negócio:** Se marcado (padrão), a IA encerra sua participação. Se desmarcado, a IA transfere mas continua ativa na conversa.

### 3. Concluir Atendimento

* **Objetivo:** Finalizar a conversa com o cliente de forma automática.
* **Campos Específicos:**
  * **Mensagem de encerramento do atendimento:** O texto que o cliente receberá ao final da conversa.
  * **Informações sobre o encerramento:** Um campo para um resumo ou nota interna sobre o motivo do encerramento.

### 4. Criar Card no CRM

* **Objetivo:** Criar um novo card (tarefa, oportunidade, etc.) no seu CRM integrado.
* **Campos Específicos:**
  * **Painel e Etapa:** Selecione o quadro e a coluna onde o card será criado.
  * **Título e Descrição:** Defina o título e o conteúdo do card.
  * **Vencimento e Etiquetas:** Adicione prazo e tags ao card.

### 5. Acionar API

* **Objetivo:** Conectar-se e enviar dados para sistemas externos através de uma chamada de API.
* **Campos Específicos:**
  * **URL da API:** O endereço do endpoint que será chamado.
  * **Método:** O método HTTP da requisição (POST, GET, etc.).
  * **Headers:** Cabeçalhos da requisição (ex: autenticação).
  * **Body:** O corpo dos dados a serem enviados (ex: JSON).

### 6. Acionar Fluxo do Chatbot

* **Objetivo:** Direcionar o cliente para um fluxo específico do seu chatbot construtor (Builder).
* **Campos Específicos:**
  * **Informações do direcionamento no chatbot:** Campo para selecionar ou identificar o fluxo de destino.

### 7. Alterar Campo do Contato

* **Objetivo:** Atualizar uma informação no perfil do contato (ex: email, telefone, campo customizado).
* **Campos Específicos:**
  * **Campo do contato:** Selecione qual atributo do contato será modificado.
  * **Ação:** Defina a operação (ex: "Alterar por").
  * **Valor:** Insira o novo valor para o campo.

### 8. Consultor Servidor MCP

* **Objetivo:** Realizar consultas a um servidor específico (MCP) para buscar informações.
* **Campos Específicos:**
  * **URL da API:** O endereço do endpoint de consulta no servidor MCP.
  * **Header de autenticação:** Dados de autenticação, se necessários.

![Criando Habilidades](./assets/habilidades-criando.gif)
