# Conceito de janela de conversa (cobrança)

A **Meta cobra por conversa**, e não por mensagem enviada. Quando uma mensagem enviada por você é entregue ao cliente, a **conversa é iniciada**, e a cobrança é efetuada. Confira mais detalhes abaixo.

## Exemplo de funcionamento da cobrança

A **janela de cobrança** opera da seguinte maneira: imagine que uma empresa envie um **modelo de mensagem (template)** para iniciar uma conversa com um cliente às **15h do dia 30/07/2024**. Assim que o template for enviado, a cobrança será realizada imediatamente.

Caso a conversa continue e atinja **24 horas do primeiro contato** (ou seja, às **15h do dia 31/07/2024**), será feita **uma nova cobrança referente a essa conversa**, mesmo que a janela permaneça ativa durante todo o período.

::: warning Categorias de conversas
Existem **quatro tipos de conversa**, cada um com uma finalidade específica:

* **Conversa de Marketing** – Deve ser iniciada com um **modelo de mensagem pré-definido**. Esse tipo de conversa ajuda a **impulsionar vendas, fortalecer o reconhecimento da marca e redirecionar clientes**.
* **Conversa de Utilidade** – Também iniciada via **modelo de mensagem**, serve para **acompanhar ações e solicitações dos usuários**.
* **Conversa de Autenticação** – Utilizada para **confirmar a identidade dos usuários**, sendo iniciada apenas por **modelos de mensagens específicos**.
* **Conversa de Serviço** – Diferente das demais, **pode ser iniciada com mensagens de formato livre** e serve para responder dúvidas dos clientes.
:::

Para verificar como utilizar cada tipo de modelo: acesse a [documentação oficial](https://developers.facebook.com/docs/whatsapp/updates-to-pricing/new-template-guidelines).

## Regras para iniciar novas conversas

* **Conversas de Marketing, Utilidade e Autenticação** – Como são iniciadas via **template**, há uma verificação ao abrir uma nova conversa:
  * Se já existir uma conversa ativa do **mesmo tipo**, **não será iniciada uma nova conversa**.
  * Se for de um **tipo diferente** ou tiverem se passado **mais de 24 horas**, uma **nova conversa será iniciada** e cobrada.
* **Conversas de Serviço** – Ao enviar uma mensagem de formato livre para o cliente, o sistema verifica se há uma conversa ativa:
  * Se **já existir uma conversa em andamento**, ela será **continuada sem nova cobrança**.
  * Se **não houver conversa ativa**, será iniciada **uma nova conversa**, válida por **24 horas**.

Acesse a documentação oficial da **Meta** a respeito de janela de conversas clicando [aqui](https://developers.facebook.com/docs/whatsapp/pricing?locale=pt_BR).

Acesse a documentação oficial do WhatsApp para saber mais sobre os valores cobrados pelos modelos de mensagens [aqui](https://business.whatsapp.com/products/platform-pricing?lang=pt_BR&country=Brasil&currency=D%C3%B3lar%20\(USD\)&category=Utilidade).
