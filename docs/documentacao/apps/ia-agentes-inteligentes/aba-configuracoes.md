# Aba Configurações

A aba **“Configurações”** é o painel de controle do seu Agente de IA. Aqui você define desde seu modelo de raciocínio até como ele deve se comportar em situações de transferência e no controle de suas respostas.

Abaixo, detalhamos cada opção disponível nesta tela.

## 1. Definições Principais do Agente

* **Provedor e Modelo de Raciocínio:** Confirma o provedor de IA (ex: ChatGPT) e o modelo específico (ex: gpt-4o) que este agente utilizará. Esta escolha impacta diretamente na capacidade, velocidade e custo do agente.
* **Temperatura / Nível de Criatividade:** Ajusta o quão criativas ou factuais serão as respostas da IA.
  * **Restrito:** Gera respostas mais diretas, previsíveis e focadas nos fatos.
  * **Criativo:** Permite maior liberdade, ideal para personalidades mais conversacionais.

## 2. Controle de Transferência para Atendimento Humano

Esta seção oferece controle total sobre como e quando o agente deve encaminhar uma conversa para sua equipe.

* **Habilitar transferência para atendimento humano:**
  * **Regra de Negócio:** Este é o controle principal. Se esta caixa for desmarcada, o Agente de IA não transferirá o atendimento para um humano em nenhuma hipótese, mesmo que o cliente solicite. Por padrão, ela vem marcada.
* **Transferir para esta equipe em solicitações de atendimento humano:**
  * Define qual equipe específica de atendentes receberá as conversas quando um transbordo for necessário.
* **Enviar mensagem de transferência:**
  * **Regra de Negócio:** Se marcado (padrão), uma mensagem de aviso será enviada ao cliente. Se desmarcado, a transferência ocorre de forma silenciosa. O campo de texto logo abaixo permite que você personalize completamente esta mensagem.

## 3. Controle do Tamanho e Velocidade das Respostas

Aqui você refina a forma e o ritmo da comunicação da IA.

### Limite de tokens por mensagem

* Ativa um teto para o tamanho das respostas, controlando o consumo e garantindo objetividade.
* **Como funciona:**
  1. Por padrão, a função vem desabilitada.
  2. Marque a caixa de seleção para ativar o controle de limite de tokens.
  3. No campo numérico que aparecerá, defina o número máximo de tokens (unidades de texto que incluem palavras, pontuações e símbolos) que a IA poderá usar para formular uma resposta.

::: warning ⚠️ Regras de Negócio e Pontos de Atenção
* Ao ativar esta função, é obrigatório definir um limite com um valor mínimo de 50 tokens. Isso garante que a IA tenha espaço suficiente para formular respostas claras e coerentes.
* O limite de tokens definido aqui não se aplica apenas à resposta final enviada ao cliente, mas a todas as operações internas que o modelo executa. Isso inclui consultas à base de conhecimento e chamadas de APIs. Um limite muito baixo pode impedir que o agente encontre a informação correta para responder.
:::

### Dica de Uso - Encontrando o Equilíbrio Ideal

* **Valores baixos (ex: 100-200):** Ideais para respostas rápidas e diretas, como confirmações ou perguntas de "sim" ou "não".
* **Valores altos (ex: 700+):** Recomendados quando o agente precisa fornecer explicações detalhadas, resumos de informações ou dados mais complexos.

### Simular Tempo de Digitação

* Adiciona um atraso em segundos antes de cada resposta para humanizar a interação, simulando o tempo que uma pessoa levaria para digitar.
* **Regra de Negócio:** Por padrão, a opção “Imediatamente” vem selecionada. Você pode escolher um valor entre 1 e 40 segundos para o atraso.
