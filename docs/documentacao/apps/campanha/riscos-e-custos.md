# Riscos e custos da campanha

A realização de uma **campanha bem-sucedida** exige não apenas um **planejamento** e **execução cuidadosos**, mas também uma **compreensão clara** dos riscos e custos envolvidos. Na **plataforma**, essa avaliação é essencial para garantir que os objetivos sejam alcançados de forma eficiente, reduzindo imprevistos e otimizando ao máximo os recursos disponíveis.

::: tip Pré-requisitos
* Definir claramente o objetivo da campanha e identificar os recursos necessários.
* Ter o **modelo de mensagem** do tipo **campanha** aprovado pela **META**.
* Ter acesso ao **Business Manager (BM)** do **Facebook**.
:::

## Riscos de realizar campanhas em uma API Oficial

O **bloqueio de um número** ocorre com base na sua **classificação de qualidade**, que é determinada pelos **feedbacks** dos clientes que receberam suas campanhas. A tabela de **classificação de qualidade** é dividida nos seguintes níveis:

* <span style="color:green;background-color:#e6fffa;padding:2px 5px;border-radius:4px;">Verde</span>: qualidade alta
* <span style="color:#b7791f;background-color:#fefcbf;padding:2px 5px;border-radius:4px;">Amarelo</span>: qualidade média
* <span style="color:red;background-color:#fff5f5;padding:2px 5px;border-radius:4px;">Vermelho</span>: qualidade baixa

### Como ver minha classificação

1. Acesse a **BM** onde o número está conectado.
2. Acesse a opção **"Contas do WhatsApp"**.
3. Clique no **"Gerenciador do WhatsApp"**.
4. Na aba **"Números de telefone"**, na opção **"Insights"**, role a barra para baixo.
5. Verifique a **Qualidade nos últimos 30 dias**.

![Classificação de qualidade](./assets/riscos-qualidade.png)

### Status da qualidade

É possível visualizar os motivos pelos quais a **qualidade** do seu número está **média** ou **baixa**. No **Gerenciador do WhatsApp**, ao passar o ponteiro do mouse sobre o indicador de **qualidade**, você terá acesso a **insights** sobre os motivos do bloqueio. Isso permite que sua empresa compreenda melhor os detalhes do bloqueio e elabore estratégias eficazes para melhorar a qualidade do número.

Se a qualidade do seu número estiver classificada como **"Baixa"** e cair mais um nível, o status mudará para **"Sinalizado"**. Caso a qualidade não melhore dentro de 7 dias, o status retornará para **"Conectado"**, mas com penalidades nos limites de envio de mensagens. Por exemplo: se o limite anterior era de **100 mil mensagens**, ele será reduzido para **10 mil mensagens**.

::: info Saiba mais
[Central de Ajuda da Meta - Sobre a qualidade do número de telefone](https://web.facebook.com/business/help/687938765816627?_rdc=1&_rdr)
:::

## Custos de envio de campanhas

O modelo de **cobrança** adotado pela **API Oficial do WhatsApp Business** baseia-se no conceito de **sessões de conversa**.

Uma **sessão de conversa** é iniciada para cada número inserido em uma campanha. Cada sessão de conversa tem uma duração de **24 horas**. Durante esse período, usuário e empresa podem trocar mensagens e informações de forma ilimitada.

A **cobrança** das conversas é determinada pela categoria do **modelo de mensagem**. Para verificar os valores aplicados, acesse o **Gerenciador do WhatsApp** por meio do **Gerenciador de Negócios** e consulte as **tarifas** definidas pela **Meta**.

::: info Considerações Adicionais
* O custo final de uma campanha dependerá da **quantidade de contatos** incluídos no disparo.
* Ao cancelar uma campanha, não é possível reverter as campanhas que foram disparadas, apenas as que estão na fila.
* O intervalo de disparo entre uma mensagem e outra é de aproximadamente **5 segundos**.
* Após o início da campanha, os dados de seus **relatórios** serão atualizados durante **5 dias**, período este em que a coleta dos dados ainda permanece ativa.
:::
