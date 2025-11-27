# Enviar Imagem

Enviar imagens na plataforma é uma funcionalidade essencial para enriquecer a comunicação e fornecer suporte visual ao seu contato. Este artigo guiará você pelo passo a passo de como enviar imagens durante um atendimento e, em seguida, como gerenciar essas mídias.

## Passo 1: Acessar a Opção de Anexo

1. Na tela de Atendimentos, selecione a conversa para a qual deseja enviar a imagem.
2. Na barra de digitação, clique no **ícone de Anexo** (📎).
3. No menu de opções que será exibido, escolha **"Imagem".**

![Menu de anexos](./assets/img-menu-anexo.png)

## Passo 2: Selecionar e Enviar o Arquivo

1. Sua pasta de arquivos local (no computador) será aberta.
2. Selecione a(s) imagem(s) que você deseja enviar.
3. **Opcional:** Antes de enviar, você pode **adicionar uma descrição (legenda)** no campo que aparece abaixo da pré-visualização da imagem
4. Clique em "Abrir".
5. A imagem será carregada e enviada ao contato, ficando disponível para visualização e download.

![Pré-visualização da imagem](./assets/img-preview.png)

## Passo 3: Gerenciando Mídias Enviadas

Após a imagem ser enviada, você terá várias opções para interagir com a mensagem diretamente na tela de atendimento:

### Ações ao Passar o Mouse

Ao passar o mouse sobre a mensagem de mídia, duas ações rápidas aparecem:

* **Responder:** Clique no ícone de seta (↩︎) para citar a imagem em sua próxima mensagem.
* **Baixar:** Clique no ícone de download (↓) para salvar o arquivo em seu computador

![Ações ao passar o mouse](./assets/img-acoes-mouse.png)

### Ações de Seleção

Você também pode selecionar uma ou mais mensagens de mídia clicando na caixa de seleção (checkbox) que aparece no canto. Ao fazer isso, uma barra de ações surgirá na parte inferior da tela com as seguintes opções:

* **Baixar mídia:** Faz o download de todos os itens selecionados.
* **Encaminhar:** Envia as mídias selecionadas para outra conversa.
* **Excluir:** Remove as mídias selecionadas.

![Seleção de mensagens](./assets/img-selecao.png)

![Barra de ações](./assets/img-barra-acoes.png)

### Excluindo uma Mensagem

Ao clicar em **"Excluir"** na barra de ações, um pop-up de confirmação será exibido. Você terá duas opções:

1. **Apagar para mim:** Remove a mensagem apenas da sua visualização.
2. **Apagar para todos:** Remove a mensagem para você e para o contato **(Nota: Esta opção está disponível apenas para canais da API Não Oficial).**

![Opções de exclusão](./assets/img-excluir.png)

### Detalhes da Mensagem (Avançado)

Clicando no menu de três pontos (`...`) ao lado da mensagem, você pode acessar os **"Detalhes da mensagem"**.

* Este painel mostra o status de entrega (Criado, Enviado, Entregue, Lido).
* Para usuários com perfil de **Administrador**, esta tela também exibe o **"ID da mensagem"** e o **"ID do canal"**, informações úteis para auditoria e integrações.

![Detalhes da mensagem](./assets/img-detalhes.png)

## Regras de Formato e Tamanho por Canal

O envio de imagens segue regras específicas de formato e limite de tamanho, que variam de acordo com o canal utilizado:

### 1. Canais API Oficial e API não Oficial

| Restrição                     | Detalhes                                                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Formatos Suportados**       | `.jpeg` e  `.png`                                                                                              |
| **Limite Máximo**             | 5 MB                                                                                                           |
| **Comportamento por Tamanho** | Se o arquivo for maior que 5 MB, o comportamento será diferente (veja o tópico *Validação do Tamanho* abaixo). |

### 2. Canais Instagram e Messenger

| Restrição                     | Detalhes                                                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Formatos Suportados**       | `.jpeg`, `.png` e `.gif`                                                                                       |
| **Limite Máximo**             | 8 MB                                                                                                           |
| **Comportamento por Tamanho** | Se o arquivo for maior que 8 MB, o comportamento será diferente (veja o tópico *Validação do Tamanho* abaixo). |

## Validação do Tamanho de Arquivo

O sistema adapta o formato de envio de imagens para garantir a entrega, seguindo as seguintes regras:

### API Oficial e API não Oficial

[Consulte aqui todas as regras oficiais da Meta](https://developers.facebook.com/docs/whatsapp/cloud-api/messages/image-messages)

| Tamanho do Arquivo        | Forma de Envio                                                        |
| ------------------------- | --------------------------------------------------------------------- |
| **Até 5 MB**              | A imagem é enviada no seu formato original.                           |
| **Entre 5 MB e 100 MB**   | A imagem é enviada como um arquivo                                    |
| **Entre 100 MB e 200 MB** | A imagem é enviada como um link para que o contato faça o *download*. |
| **Acima de 200 MB**       | O envio não será realizado.                                           |

### Instagram e Messenger

[Consulte aqui todas as regras oficiais da Meta](https://developers.facebook.com/docs/messenger-platform/instagram/features/attachment-upload)

| Tamanho do Arquivo      | Forma de Envio                                                        |
| ----------------------- | --------------------------------------------------------------------- |
| **Até 8 MB**            | A imagem é enviada no seu formato original.                           |
| **Entre 8 MB e 200 MB** | A imagem é enviada como um link para que o contato faça o *download*. |
| **Acima de 200 MB**     | O envio não será realizado.                                           |

**Mensagem de Alerta:** Caso o limite de 200 MB seja excedido, o usuário receberá o aviso: "Tamanho máximo permitido é de 200 MB. Tente compactar o arquivo antes de enviar."

![Alerta de tamanho máximo](./assets/alerta-tamanho.png)

::: warning 💡 Nota: Qualidade da Imagem (Compressão vs. Arquivo Original)
Para atender às regras de compatibilidade da Meta, ao usar a opção **"Anexar -> Imagem"**, seu arquivo é otimizado. Este processo envolve **compressão**, o que pode reduzir a qualidade visual (deixando a imagem menos nítida), mas garante uma entrega rápida e a pré-visualização (miniatura) na conversa.

**Para manter a qualidade original (Alta Resolução):** Se você precisa enviar uma imagem sem nenhuma perda de qualidade (como um arquivo para impressão, um design específico ou um documento digitalizado), utilize a opção **"Anexar -> Documento"**.
:::
