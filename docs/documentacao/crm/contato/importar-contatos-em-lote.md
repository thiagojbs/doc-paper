# Importar Contatos em Lote

A funcionalidade de **importação de contatos** na plataforma permite integrar informações de outras fontes diretamente na plataforma, como **nome, e-mail, telefone, etiquetas** e **campos personalizados**, desde que os dados estejam organizados de forma adequada.

É importante que **cada tipo de dado esteja em uma coluna separada** no arquivo de origem, garantindo que a importação seja precisa e eficiente.

::: tip Pré-requisitos
* **Apenas usuários com perfil de administrador** podem realizar a importação de contatos na plataforma.
* Os dados de origem devem estar em um dos formatos compatíveis: **planilha Google**, **MS Excel**, **arquivo CSV** (texto separado por ponto e vírgula) ou **arquivo vCard**.
* É importante que a fonte de origem contenha **no máximo 5000 linhas** para cada importação.
* Caso seja necessário importar várias etiquetas para um mesmo contato, basta colocá-las **na mesma célula, separadas por vírgula**.
:::

## Passo 1: Iniciar a importação

Acesse o menu **"CRM"** e clique em **"Contatos"**. Em seguida, selecione o botão **"Importar Contatos"** para iniciar o processo de importação.

![Botão importar contatos](./assets/importar-menu.png)

## Passo 2: Selecionar a fonte de dados

Selecione uma das opções disponíveis para a fonte de dados de origem para realizar a importação.

![Opções de fonte de dados](./assets/importar-fonte.png)

* **Copiar/Colar**: O sistema abrirá uma planilha no Google Sheets para que você possa colar as informações dos contatos. Certifique-se de que cada dado esteja organizado em uma coluna.
* **Arquivo Excel**: Selecione a planilha no formato **.xlsx** que contém os dados a serem importados.
* **Arquivo CSV**: Escolha um arquivo de texto com os dados separados por ponto e vírgula (**;**) para a importação.
* **Arquivo vCard**: Indique o arquivo no formato vCard, comumente usado para exportar contatos de sistemas como Gmail ou dispositivos iPhone.

### Copiar/Colar

Se optar por **Copiar e Colar**, você será direcionado para uma tela com duas etapas simples. Primeiro, abrirá uma nova aba no navegador com uma planilha no Google Sheets para que você cole ou edite os dados de contatos que deseja importar. Após concluir essa etapa, basta retornar à plataforma e clicar na opção para iniciar a importação dos dados.

A planilha no Google Sheets é configurada com colunas padrão, como **Nome, Telefone, Email, Instagram, Etiquetas, Notas Internas e Carteira**. Você pode remover as colunas que não serão usadas (exceto a de **Telefone**, que é obrigatória) ou adicionar novas colunas, como **Data de Nascimento**, se necessário.

Para as demais opções de importação, como **Arquivo Excel**, **CSV** ou **vCard**, será exibida uma janela na plataforma para que você selecione o arquivo que contém os dados que deseja importar.

## Passo 3: Mapear as colunas

Antes de concluir a importação, será necessário mapear as colunas da planilha com os campos correspondentes na plataforma. Se o sistema identificar colunas com nomes idênticos aos campos internos, ele sugerirá automaticamente o local de destino para os dados.

Contudo, você terá a flexibilidade de alterar o campo de destino ou, se preferir, selecionar a opção **Não Importar**, para que o sistema ignore aquela coluna específica.

![Mapeamento de colunas](./assets/importar-mapear.png)

## Passo 4: Resolver conflitos

Durante o processo de importação, o sistema pode identificar **conflitos entre os dados importados e aqueles já existentes na plataforma**, como **números duplicados** ou **contatos repetidos na planilha**. Quando isso ocorrer, você será notificado e deverá decidir qual ação tomar.

Será possível escolher **qual contato com o mesmo número deve ser mantido**, permitindo que você **substitua os dados existentes**, **combine informações** ou **ignore o novo dado importado**.

![Resolução de conflitos](./assets/importar-conflitos.png)

::: info Nota
Marcando a opção **Arquivar contatos que não existem nesta planilha**, o sistema vai arquivar todos aqueles contatos que já existam cadastrados na conta, mas que não estejam presentes na planilha.
:::

## Passo 5: Validação de segurança

Para prosseguir com a ação de importação, será necessário **informar o código de validação**. Esse código será **enviado automaticamente para o e-mail e/ou número do WhatsApp associado ao usuário logado**.

Após receber o código, insira-o na plataforma para concluir a validação e continuar com o processo de importação.

![Código de validação](./assets/importar-validacao.png)

## Passo 6: Conclusão

Se a **importação for concluída com sucesso**, basta **fechar a janela de confirmação** exibida na tela.

No entanto, se ocorrer algum erro durante o processo, é importante **verificar a fonte de dados** utilizada, **corrigir os problemas apontados pela plataforma** e, em seguida, **tentar realizar a importação novamente**.

![Importação concluída](./assets/importar-sucesso.png)

::: warning Considerações Adicionais
* Etiquetas na planilha que **não existam na plataforma serão criadas automaticamente durante a importação.**
* Recomenda-se **excluir todas as linhas e colunas que não precisam ser importadas** (estejam elas com dados ou não).
* Caso precise importar **mais de 5000 contatos**, **divida o arquivo de origem em vários arquivos**, cada um com até 5000 linhas.
* A importação **não duplica contatos**, sendo assim ao importar um contato que já exista na plataforma, será feita uma atualização dos dados existentes, e não a inclusão de um novo.
* Durante a importação, **as novas etiquetas substituirão todas as etiquetas já associadas aos contatos**.
* A coluna **Carteira** só aparecerá na planilha se a **função estiver habilitada** na plataforma.
:::
