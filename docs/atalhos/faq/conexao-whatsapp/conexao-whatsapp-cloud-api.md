# Conexão WhatsApp Cloud API

A conexão **WhatsApp Cloud API** da **plataforma** é o método tradicional utilizado para vincular sua conta de WhatsApp à plataforma de forma segura e eficiente. Esse processo é essencial para garantir a comunicação entre a API e o WhatsApp Business, permitindo o envio e recebimento de mensagens dentro do sistema.

::: info Pré-requisitos
Antes de iniciar a conexão **WhatsApp Cloud API**, certifique-se de atender aos seguintes requisitos:

* Ter um número de telefone cadastrado no **WhatsApp Business**.
* Ter um **Portfólio empresarial.**
* Ser um usuário com perfil de **administrador** na **plataforma**.
* Ter a página do **Facebook** atrelada a conta do **WhatsApp Business**.
* Ter acesso ao aplicativo **WhatsApp Business** no celular para receber o código de verificação.
* Este método requer que o número seja desconectado do WhatsApp Business App durante a conexão.
:::

## Passo 1: Acesse a Integração do WhatsApp

No menu principal da **plataforma**, clique em **"Ajustes"**. Em seguida, acesse **"Conta"**.

![Ajustes - Conta](/images/conexao-whatsapp/qr-08.png)

## Passo 2: Canais de Atendimento

Em seguida clique em **"Canais de Atendimento"** e por fim no **ícone** ![](/images/conexao-whatsapp/icon-plus.png).

![Canais de Atendimento](/images/conexao-whatsapp/qr-09.png)

## Passo 3: Inicie a conexão

Dentro da seção de **"Canais de Atendimento"**, clique em **"WhatsApp Cloud API"**.

## Passo 4: Entrar com Facebook

Clique em **"Entrar com Facebook"**.

![Entrar com Facebook](/images/conexao-whatsapp/qr-11.png)

## Passo 5: Faça login com sua conta Facebook

Faça login com sua conta **Facebook**.

![Login Facebook](/images/conexao-whatsapp/qr-12.png)

![Autenticação Facebook](/images/conexao-whatsapp/qr-13.png)

## Passo 6: Selecione o Portfólio empresarial

Selecione o **"Portfólio empresarial"** e confira os **dados da empresa** (nome, site e país), em seguida clique em **"Avançar"**.

![Selecionar Portfólio](/images/conexao-whatsapp/qr-14.png)

## Passo 7: Informe o número

Informe o número do País (BR+55) e insira o número que deseja conectar.

![Informar número](/images/conexao-whatsapp/qr-16.png)

## Passo 8: Insira o código

A Meta enviará um código para o **"aplicativo do WhatsApp"**. Insira o código recebido e clique em **"Avançar"**.

![Inserir código](/images/conexao-whatsapp/qr-17.png)

## Passo 9: Confirme o Display name

Confirme o **Display name** e o **fuso horário** em seguida clique em **"Avançar"**.

![Display name](/images/conexao-whatsapp/qr-18.png)

## Passo 10: Recebimento do código de verificação

Uma mensagem será enviada para o **WhatsApp Business** com um código de 6 dígitos.

## Passo 11: Insira o código de 6 dígitos

Insira o código de 6 dígitos recebido no WhatsApp Business e clique em **"Verificar"**.

## Passo 12: Adicionar forma de pagamento

Clique em **adicionar forma de pagamento** em seguida clique em **"Continuar"**.

![Forma de pagamento](/images/conexao-whatsapp/qr-22.png)

## Passo 13: Selecione o número

Para finalizar a conexão, selecione o número que está integrando e em seguida clique em **"Continuar"**.

![Selecionar número](/images/conexao-whatsapp/qr-23.png)

## Passo 14: Finalizar

Clique em **"Finalizar"** para concluir o processo.

![Finalizar](/images/conexao-whatsapp/qr-24.png)

## Considerações Finais

::: warning Limitações e Observações Importantes

**Quando usar este método:**
* **Este é o método de conexão recomendado quando o número não é elegível para conexão via QR Code.** A **Meta** avalia o histórico de uso do número e pode determinar que alguns números não são elegíveis para a conexão via QR Code. Caso isso aconteça, você deve utilizar este método (WhatsApp Cloud API).

**Diferenças importantes:**
* **Atualmente, o WhatsApp Desktop para Windows não é compatível com a Cloud API.** As mensagens enviadas e recebidas pelo WhatsApp Desktop deixarão de funcionar.
* **Neste método, o número precisará ser desconectado do WhatsApp Business App.** Diferente da conexão via QR Code, este método não permite o uso simultâneo do número no app e na API.
* O número conectado via método convencional **não pode ser usado simultaneamente no WhatsApp Business App**.

**Funcionalidades e Limitações:**
* **Neste momento, a sincronização de contatos, números e conversas ainda não está disponível.**
* Algumas funcionalidades não são suportadas na API Oficial, como **Canais, Status, Grupos, enquetes, eventos e localização em tempo real**.
* **O uso de modelos de mensagem e a janela de conversa/cobrança continuam seguindo as regras da API Oficial**, mas há a possibilidade de abrir a janela diretamente pelo app.

**Regras de Uso:**
* Após **reiniciar a conversa** com um contato pelo App, é necessário esperar o mesmo responder para continuar a conversa pela plataforma.
* O aplicativo **WhatsApp Business** deve ser utilizado pelo menos uma vez a cada 15 dias para manter a conexão ativa.
* **É possível vincular e desvincular o número a qualquer momento.**

**O que altera no app WhatsApp Business:**
* **Não será possível usar o número no WhatsApp Business App enquanto estiver conectado à API.**
* Todos os outros dispositivos como **WhatsApp Web** serão desconectados, mas poderão ser reconectados após o vínculo.
* **Não será possível mais editar e excluir mensagens.**
* Mensagens que desaparecem e visualização única **não poderão** ser mais usadas.
:::

**Documentação oficial:** [**Clique aqui**](https://developers.facebook.com/docs/whatsapp/embedded-signup/custom-flows/onboarding-business-app-users)
