# Desativar contas de anúncio

Durante o processo de conexão de um número de WhatsApp à **API Oficial da Meta via QR Code**, pode acontecer a criação automática de uma **conta de anúncios (Ads Account)** dentro do **Business Manager (BM)** vinculado ao número. Essa conta não é necessária para o uso da API e pode ser desativada para manter a organização do BM e evitar acúmulo de contas inativas.

Este artigo orienta como localizar e desativar essas contas de anúncio.

::: tip Pré-requisitos
* Acesso ao **Business Manager** com permissões administrativas.
* Acesso à seção de **Configurações de Negócios** da Meta.
:::

## Passo a Passo para desativar a conta de anúncio

### Passo 1: Acesse o Gerenciador de Negócios (Business Manager)

* Vá até o link: [https://business.facebook.com/](https://business.facebook.com/)
* Faça login com o usuário administrador da conta.
* Selecione o **Business Manager (BM)** onde a conta de anúncio foi criada.
* Na lateral esquerda clique na opção: **Configurações da conta de anúncios.**

![Configurações da conta de anúncios](/images/conexao-whatsapp/desativar-ads-01.png)

### Passo 2: Localizar opção de desativação

Uma nova aba será exibida. Logo abaixo da seção "**Pagamentos da empresa**", localize a opção **"Desativar conta de anúncios"** e clique nela.

![Desativar conta de anúncios](/images/conexao-whatsapp/desativar-ads-02.png)

### Passo 3: Confirmar desativação

Um pop-up será exibido. Selecione o motivo mais adequado para a desativação da conta e, em seguida, clique em **"Desativar conta de anúncios"**. A tela será atualizada e a conta removida.

![Confirmar desativação](/images/conexao-whatsapp/desativar-ads-03.png)

## Considerações Finais

::: info Por que isso acontece?
A criação automática da conta de anúncio pela Meta é parte do processo padrão e não interfere na funcionalidade do número conectado.
:::

::: warning Limite de Contas de Anúncio
Ao realizar a conexão por QR Code Oficial (modo de coexistência) da API do WhatsApp, pode ocorrer a mensagem informando que o número de contas de anúncio excedeu o limite permitido no Gerenciador de Negócios da Meta.

**Por que isso acontece?**
Durante o processo de conexão, a Meta cria automaticamente uma nova conta de anúncios vinculada ao negócio. Quando esse limite é atingido, novas conexões são bloqueadas.

**Como resolver?**
É necessário desativar manualmente as contas de anúncio criadas anteriormente e que não estão em uso, seguindo o passo a passo acima. Isso liberará espaço para novas conexões via QR Code Oficial.
:::
