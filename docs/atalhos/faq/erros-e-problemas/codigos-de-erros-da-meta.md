# Códigos de erros da Meta

Esta página contém os principais códigos de erro retornados pela API da Meta ao utilizar o WhatsApp Business, com explicações detalhadas e soluções para cada caso.

## Erro 131049 - Envio de Template Messenger de Marketing

![Erro 131049](/images/erros-e-problemas/erro-131049.png)

::: danger Mensagem de Erro
Meta recusou enviar esse modelo (Marketing) para manter o engajamento saudável do ecossistema.

Tente novamente mais tarde ou utilize um modelo do tipo Utilidade.

Para saber mais acesse esse link: <https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#user-marketing-template-message-limits>
:::

Ao receber este código de erro, não tente enviar a mensagem novamente. Esse problema está relacionado ao limite de mensagens de marketing que o destinatário recebeu. Tente enviar uma mensagem do tipo utilidade ou espere um tempo maior para enviar mensagens novamente, já que o limite talvez esteja em vigor por diferentes períodos.

### Porque esse erro ocorre

Esse erro ocorre quando você tenta enviar um modelo de mensagem para iniciar ou reiniciar um atendimento. Vale ressaltar que isso **não é um erro da plataforma**, mas sim uma ação da **Meta**, sobre a qual não temos controle.

Em alguns casos, a Meta decide que um número de telefone já recebeu muitas mensagens de **marketing** e, como medida para manter um ambiente saudável para os usuários do WhatsApp, ela **interrompe temporariamente o envio de novas mensagens de marketing** para esse número.

### Soluções

* **Varie os tipos de mensagem**: Ao invés de enviar apenas mensagens de marketing, utilize outro tipo de mensagens, como de **Utilidade.**
* **Ajuste o volume de envio**: Evite o envio excessivo de mensagens do tipo marketing em um curto período de tempo para o mesmo número.
* **Aguarde o desbloqueio**: Se um número for bloqueado, aguarde o período determinado pela Meta (geralmente de algumas horas a dias).

---

## Erro 131056 - Limite de volume de envios de mensagens atingido

![Erro 131056](/images/erros-e-problemas/erro-131056.png)

::: danger Mensagem de Erro
Foram enviadas muitas mensagens do número de telefone do remetente para o mesmo número de telefone do destinatário em um curto período.
:::

### Porque esse erro ocorre

O erro de envio de mensagens acontece principalmente quando muitas mensagens são enviadas para o mesmo contato em um curto período de tempo.

**A plataforma está funcionando corretamente**, mas a **Meta** pode bloquear temporariamente o envio de mensagens de marketing se identificar que um número está recebendo um volume excessivo de mensagens em pouco tempo.

### Soluções

* **Reduza a quantidade de mensagens**: Evite enviar muitas mensagens de marketing para o mesmo número em um curto período.
* **Varie os tipos de mensagens**: Alterne para mensagens do tipo **utilidade**.
* **Monitore a entrega**: Acompanhe o status de entrega na plataforma.

---

## Erro 130472 - Experimento da Meta

![Erro 130472](/images/erros-e-problemas/erro-130472.png)

::: danger Mensagem de Erro
O número do usuário faz parte de um experimento do WhatsApp, não é possível iniciar esta conversa. Escolha uma das opções abaixo.
:::

### Porque esse erro ocorre

Esse erro faz parte de um **experimento da Meta** que está sendo aplicado a **1% dos usuários** do WhatsApp. Durante esse experimento, a Meta está testando uma nova medida para limitar quem pode iniciar conversas com empresas no WhatsApp.

### Soluções

* **Utilize um modelo de mensagem do tipo Utilidade**: Inicie a conversa utilizando um modelo apropriado.
* **Aguarde o usuário iniciar o contato**: Espere que o usuário envie uma mensagem para sua empresa.

---

## Erro 131042 - Problema com pagamento

![Erro 131042](/images/erros-e-problemas/erro-131042.png)

::: danger Mensagem de Erro
A Meta recusou enviar sua mensagem, isso está relacionado à tentativa de faturar conversas no cartão de crédito.

Saiba como adicionar um cartão de crédito neste link: <https://web.facebook.com/business/help/488291839463771>
:::

### Porque esse erro ocorre

O **Erro 131042** ocorre quando a Meta enfrenta dificuldades para processar o pagamento por meio do cartão cadastrado na conta do **portfólio empresarial**. Esse problema geralmente está relacionado a um bug interno no sistema da Meta.

### Soluções

**Confirme os dados do cartão:**
1. Acesse **Contas** > **Contas do WhatsApp** > **Configurações de pagamento**.
2. Verifique o saldo disponível.
3. Se houver falha, ajuste o valor manualmente para um valor menor.
4. Realize o pagamento com o valor reduzido.

**Atualize o método de pagamento:**
1. Acesse **Configurações de pagamento**.
2. Clique em **Adicionar forma de pagamento**.
3. Adicione as informações do cartão e clique em **Salvar**.

---

## Erro 131026 - Número não registrado no WhatsApp

![Erro 131026](/images/erros-e-problemas/erro-131026.png)

::: danger Mensagem de Erro
Não foi possível entregar a mensagem. O número de telefone do destinatário não está registrado no WhatsApp ou o destinatário não aceitou os novos Termos de Serviço e a nova Política de Privacidade.
:::

### Porque esse erro ocorre

O **Erro 131026** ocorre quando uma tentativa de enviar uma mensagem para um número de WhatsApp falha porque o número informado **não está registrado no WhatsApp**.

**Causas comuns:**
* Número sem conta no WhatsApp
* Mudança de número pelo usuário
* Erro ao digitar o número
* Desativação da conta pelo usuário

### Soluções

* **Verifique o número**: Tente realizar uma chamada usando **wa.me/[número]**.
* **Confirme o formato**: Certifique-se de que o número está no formato internacional (+55 para Brasil).
* **Teste com outro número**: Envie a mesma mensagem para outro número ativo para verificar se o problema é o número ou o template.

---

## Erro 131000 - Erro desconhecido

![Erro 131000](/images/erros-e-problemas/erro-131000.png)

::: danger Mensagem de Erro
Falha ao enviar a mensagem devido a um erro desconhecido.
:::

### Por que esse erro acontece?

O **Erro 131000** ocorre quando há um problema técnico ao tentar enviar uma mensagem pelo WhatsApp através da API da Meta. Geralmente está relacionado a configurações incorretas ou instabilidades nos servidores.

### Soluções

* Verifique o [**status da API da Meta**](https://metastatus.com/)
* Verifique a conexão com a internet
* Tente enviar outra mensagem

::: info Observação
Caso esse erro ocorra logo após a conexão do número na API Oficial, exclua todas as informações relacionadas no **portfólio empresarial** e conecte o número novamente.
:::

---

## Erro 135000 - Falha ao enviar mensagem

![Erro 135000](/images/erros-e-problemas/erro-135000.png)

::: danger Mensagem de Erro
Falha ao enviar a mensagem devido a um erro desconhecido com seus parâmetros de solicitação.
:::

### Por que esse erro acontece?

O erro 135000 ocorre quando o atendente tenta enviar um modelo de mensagem em um atendimento, mas o envio falha devido a problemas de configuração ou validação do modelo pela Meta.

### Soluções

::: tip Dica
Solicite a um usuário com permissão de **super administrador** que sincronize os modelos de mensagem com a **Meta**.
:::

**Passos para corrigir:**
1. Acesse os Modelos de Mensagem
2. Duplique o modelo que apresentou erro
3. Aguarde a aprovação da Meta
4. Teste o envio novamente com o modelo duplicado

---

## Erro 131047 - Mais de 24h sem contato

![Erro 131047](/images/erros-e-problemas/erro-131047.png)

::: danger Mensagem de Erro
Mais de 24 horas se passaram desde que o destinatário respondeu pela última vez ao número do remetente. Envie uma mensagem iniciada pela empresa usando um modelo de mensagem.
:::

### Por que esse erro acontece?

O erro 131047 ocorre porque as políticas do WhatsApp limitam o tempo em que uma empresa pode responder a uma mensagem de um cliente. Após 24 horas desde a última interação do cliente, o WhatsApp bloqueia o envio de mensagens que não sejam iniciadas pela empresa.

### Solução

* Envie um **modelo de mensagem aprovado** para retomar o atendimento.

::: info Observação
Se o número do contato for editado durante uma conversa (ex: adicionar o nono dígito), esse erro poderá ocorrer.
:::

---

## Erro 131048 - Parâmetro ausente ou inválido

![Erro 131048](/images/erros-e-problemas/erro-131048.png)

::: danger Mensagem de Erro
Falha ao enviar a mensagem devido a um limite de envios que pode ser feito deste número de telefone.
:::

### Por que esse erro acontece?

O erro **Meta 131048** ocorre quando há um parâmetro ausente ou inválido na sua mensagem, ou quando você atingiu um **limite de envio** devido a uma baixa qualidade de mensagens ou potencial atividade de spam.

**Causas Comuns:**
* Parâmetro ausente ou inválido
* Limite de qualidade/spam atingido
* Excesso de mensagens enviadas

### Soluções

* Confirme se todos os dados estão presentes e no formato correto
* Diminua a quantidade de mensagens enviadas
* Verifique o status da qualidade da conta no WhatsApp Manager
* Evite enviar mensagens idênticas e repetitivas

---

## Erro 132001 - Modelo não existe

![Erro 132001](/images/erros-e-problemas/erro-132001.png)

::: danger Mensagem de Erro
O modelo não existe no idioma especificado ou não foi aprovado.
:::

### Por que esse erro acontece?

O erro 132001 ocorre quando você tenta enviar um **modelo de mensagem** que não está registrado ou não é reconhecido pela API do WhatsApp.

**Causas:**
* O modelo foi excluído no Gerenciador de Negócios
* Nome do modelo digitado incorretamente
* Modelo ainda em processo de aprovação
* Modelo foi rejeitado pela Meta

### Soluções

* Solicite a um **super administrador** que sincronize os modelos com a Meta
* Crie um novo modelo e aguarde aprovação
* Reenvie para aprovação caso esteja reprovado
* Siga as [diretrizes para modelos de mensagem](https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/)

---

## Erro 131031 - Conta restrita ou bloqueada

![Erro 131031](/images/erros-e-problemas/erro-131031-1.png)

::: danger Mensagem de Erro
A conta do WhatsApp Business associada ao app foi restringida ou desabilitada por violar uma política da plataforma.
:::

### Por que esse erro acontece?

O erro 131031 ocorre quando a conta do WhatsApp Business está **restrita** ou **bloqueada** pela Meta.

**Causas comuns:**
* Violações das políticas da Meta
* Reclamações de usuários (bloqueios ou denúncias de spam)
* Atividades suspeitas (envio em massa ou automatizações excessivas)

### Soluções

**Verifique mensagens da Meta:**
1. Faça login na Business Manager
2. No menu lateral, clique em ![](/images/erros-e-problemas/erro-131031-icon.png)
3. Clique em **'Página Inicial do Suporte para empresas'**
4. Verifique se há notificações da Meta

![Página de Suporte](/images/erros-e-problemas/erro-131031-2.png)

**Outras ações:**
* Revise as políticas de uso da Meta
* Responda às notificações da Meta
* Corrija práticas inadequadas
* Reduza envio para listas extensas
* Certifique-se de ter opt-in documentado

---

## Erro 100 - Mensagem não suportada

![Erro 100](/images/erros-e-problemas/erro-100.png)

::: danger Mensagem de Erro
Solicitação POST não suportada. O objeto com o ID 'messages' não existe, não pode ser carregado devido a permissões ausentes, ou não suporta esta operação. Por favor, leia a documentação da Graph API em <https://developers.facebook.com/docs/graph-api>.
:::

### Por que esse erro acontece?

**Causas:**
* Parâmetros inválidos ou ausentes
* Recurso inexistente ou inacessível
* Permissões insuficientes
* Problemas com URLs

### Soluções

* Verifique os parâmetros da requisição
* Confirme as permissões do aplicativo
* Valide os recursos
* Teste as URLs com o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

---

## Erro 131051 - Mensagem não suportada pela API

![Erro 131051](/images/erros-e-problemas/erro-131051.png)

::: danger Mensagem de Erro
**"Mensagem não suportada pela API"**

Essa mensagem aparece quando o contato envia um tipo de conteúdo que **não é compatível com a API oficial da Meta**. A plataforma não consegue exibir ou processar esse conteúdo porque a Meta não disponibiliza suporte para esse formato via API.
:::

### Em quais casos essa mensagem pode aparecer?

**Exemplos comuns:**
* Reações a mensagens (emojis de curtir ou reagir)
* Figurinhas animadas (stickers personalizados)
* Notas de voz enviadas como áudio temporário
* Arquivos ou formatos muito recentes
* Mensagens enviadas por bots externos

### O que fazer quando essa mensagem aparecer?

* **Informe ao cliente** que o conteúdo não é compatível
* **Peça que reenvie** em outro formato (texto, imagem ou documento padrão)
* **Não é erro da plataforma**, mas sim limitação da API da Meta

### Considerações finais

* Esse comportamento é controlado pela Meta e não pode ser alterado
* A conversa não é perdida — o restante do conteúdo permanece acessível
* Instrua o cliente a evitar reações, figurinhas animadas ou formatos não convencionais
