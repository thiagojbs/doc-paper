import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paper Vines",
  srcDir: './docs',
  base: '/',
  description: "Documentação Oficial da Paper Vines",
  head: [
    ['script', { src: 'https://unpkg.com/lucide@latest' }],
    ['script', {}, `
      (function() {
        const saved = localStorage.getItem('vitepress-theme-appearance');
        if (!saved) {
          localStorage.setItem('vitepress-theme-appearance', 'light');
          document.documentElement.classList.remove('dark');
        }
      })();
    `]
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo-paper.png',
    siteTitle: false,

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true
          }
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pesquisar',
                buttonAriaLabel: 'Pesquisar'
              },
              modal: {
                displayDetails: 'Mostrar detalhes',
                resetButtonTitle: 'Limpar',
                backButtonTitle: 'Voltar',
                noResultsText: 'Nenhum resultado para',
                footer: {
                  selectText: 'selecionar',
                  navigateText: 'navegar',
                  closeText: 'fechar'
                }
              }
            }
          }
        }
      }
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'API Reference', link: '/api-reference/introducao/autenticacao' }
    ],

    sidebar: {
      '/api-reference/': [
        {
          text: 'INTRODUÇÃO',
          items: [
            { text: 'Autenticação', link: '/api-reference/introducao/autenticacao' },
            { text: 'Paginação', link: '/api-reference/introducao/paginacao' },
            { text: 'Rate limiting', link: '/api-reference/introducao/rate-limiting' }
          ]
        },
        {
          text: 'GUIAS',
          items: [
            { text: 'Login integrado', link: '/api-reference/guias/login-integrado' },
            { text: 'Webhooks', link: '/api-reference/guias/webhooks' },
            { text: 'Webhook no Chatbot', link: '/api-reference/guias/webhook-no-chatbot' },
            { text: 'Rastreio de campanha UTM', link: '/api-reference/guias/rastreio-de-campanha-utm' },
            { text: 'Informações para Firewall', link: '/api-reference/guias/informacoes-para-firewall' },
            {
              text: 'Integração com IA',
              collapsed: true,
              items: [
                { text: '1. Criar um assistente', link: '/api-reference/guias/integracao-com-ia/1-criar-um-assistente' },
                { text: '2. Criar o loop no chatbot', link: '/api-reference/guias/integracao-com-ia/2-criar-o-loop-no-chatbot' },
                { text: '3. Como ler e responder textos', link: '/api-reference/guias/integracao-com-ia/3-como-ler-e-responder-textos' },
                { text: '4. Como processar áudios', link: '/api-reference/guias/integracao-com-ia/4-como-processar-audios' },
                { text: '5. Como processar imagens', link: '/api-reference/guias/integracao-com-ia/5-como-processar-imagens' }
              ]
            },
            {
              text: 'Integrações sem código',
              collapsed: true,
              items: [
                { text: 'Criar token para integração', link: '/api-reference/guias/integracoes-sem-codigo/criar-token-para-integracao' },
                { text: 'MAKE', link: '/api-reference/guias/integracoes-sem-codigo/make' },
                { text: 'N8N', link: '/api-reference/guias/integracoes-sem-codigo/n8n' }
              ]
            }
          ]
        },
        {
          text: 'CORE',
          items: [
            { text: 'Arquivos', link: '/api-reference/core/arquivos' },
            { text: 'Campos', link: '/api-reference/core/campos' },
            { text: 'Carteiras', link: '/api-reference/core/carteiras' },
            { text: 'Contatos', link: '/api-reference/core/contatos' },
            { text: 'Equipes', link: '/api-reference/core/equipes' },
            { text: 'Etiquetas', link: '/api-reference/core/etiquetas' },
            { text: 'Horários de Atendimento', link: '/api-reference/core/horarios-de-atendimento' },
            { text: 'Usuários', link: '/api-reference/core/usuarios' },
            { text: 'Webhooks', link: '/api-reference/core/webhooks' }
          ]
        },
        {
          text: 'CHAT',
          items: [
            { text: 'Canais de Atendimento', link: '/api-reference/chat/canais-de-atendimento' },
            { text: 'Chatbots', link: '/api-reference/chat/chatbots' },
            { text: 'Conversas', link: '/api-reference/chat/conversas' },
            { text: 'Mensagens', link: '/api-reference/chat/mensagens' },
            { text: 'Mensagens Agendadas', link: '/api-reference/chat/mensagens-agendadas' },
            { text: 'Modelos de Mensagem', link: '/api-reference/chat/modelos-de-mensagem' },
            { text: 'Sequências', link: '/api-reference/chat/sequencias' }
          ]
        },
        {
          text: 'CRM',
          items: [
            { text: 'Cards', link: '/api-reference/crm/cards' },
            { text: 'Painéis', link: '/api-reference/crm/paineis' }
          ]
        }
      ],
      '/': [
        {
          text: 'Comece Aqui',
          link: '/',
          items: [
            {
              text: 'Portfólio Empresarial',
              link: '/atalhos/faq/portfolio-empresarial',
              collapsed: true,
              items: [
                { text: 'Criar portfólio empresarial', link: '/atalhos/faq/portfolio-empresarial/criar-portfolio-empresarial' },
                { text: 'Verificar portfólio empresarial', link: '/atalhos/faq/portfolio-empresarial/verificar-portfolio-empresarial' },
                { text: 'Informações do portfólio', link: '/atalhos/faq/portfolio-empresarial/informacoes-do-portfolio' },
                { text: 'Incluir administradores', link: '/atalhos/faq/portfolio-empresarial/incluir-administradores' },
                { text: 'Alterar logomarca do portfólio', link: '/atalhos/faq/portfolio-empresarial/alterar-logomarca-do-portfolio' },
                { text: 'Desativar autenticação em dois fatores', link: '/atalhos/faq/portfolio-empresarial/desativar-autenticacao-em-dois-fatores' }
              ]
            },
            {
              text: 'Conexão WhatsApp',
              link: '/atalhos/faq/conexao-whatsapp',
              collapsed: true,
              items: [
                { text: 'Conexão via QR Code', link: '/atalhos/faq/conexao-whatsapp/conexao-via-qr-code' },
                { text: 'Conexão WhatsApp Cloud API', link: '/atalhos/faq/conexao-whatsapp/conexao-whatsapp-cloud-api' },
                { text: 'Remover conexão QR Code', link: '/atalhos/faq/conexao-whatsapp/remover-conexao-qr-code' },
                { text: 'Portabilidade de número', link: '/atalhos/faq/conexao-whatsapp/portabilidade-de-numero' },
                { text: 'Remover número do portfólio', link: '/atalhos/faq/conexao-whatsapp/remover-numero-do-portfolio' },
                { text: 'Desativar contas de anúncio', link: '/atalhos/faq/conexao-whatsapp/desativar-contas-de-anuncio' }
              ]
            },
            {
              text: 'Configurações do WhatsApp',
              link: '/atalhos/faq/configuracoes-whatsapp',
              collapsed: true,
              items: [
                { text: 'Alterar display name', link: '/atalhos/faq/configuracoes-whatsapp/alterar-display-name' },
                { text: 'Alterar perfil do WhatsApp', link: '/atalhos/faq/configuracoes-whatsapp/alterar-perfil-do-whatsapp' }
              ]
            },
            {
              text: 'Pagamentos',
              link: '/atalhos/faq/pagamentos',
              collapsed: true,
              items: [
                { text: 'Configurar pagamento', link: '/atalhos/faq/pagamentos/configurar-pagamento' },
                { text: 'Consultar extrato de pagamento', link: '/atalhos/faq/pagamentos/consultar-extrato-de-pagamento' }
              ]
            },
            {
              text: 'Erros e Problemas',
              link: '/atalhos/faq/erros-e-problemas',
              collapsed: true,
              items: [
                { text: 'Códigos de erros da Meta', link: '/atalhos/faq/erros-e-problemas/codigos-de-erros-da-meta' },
                { text: 'Solicitar revisão de banimento', link: '/atalhos/faq/erros-e-problemas/solicitar-revisao-de-banimento' },
                { text: 'Mensagens do Instagram não chegam', link: '/atalhos/faq/erros-e-problemas/mensagens-do-instagram-nao-chegam' },
                { text: 'Acessar página de suporte', link: '/atalhos/faq/erros-e-problemas/acessar-pagina-de-suporte' }
              ]
            },
            {
              text: 'Integrações',
              link: '/atalhos/faq/integracoes',
              collapsed: true,
              items: [
                { text: 'Renovar token do Instagram e Messenger', link: '/atalhos/faq/integracoes/renovar-token-do-instagram-e-messenger' },
                { text: 'Transcrição de áudio', link: '/atalhos/faq/integracoes/transcricao-de-audio' }
              ]
            }
          ]
        },
        {
          text: 'DOCUMENTAÇÃO',
          items: [
            {
              text: 'Atendimento',
              link: '/documentacao/atendimento',
              collapsed: true,
              items: [
                {
                  text: 'Central de Atendimento',
                  link: '/documentacao/atendimento/central-de-atendimento',
                  collapsed: true,
                  items: [
                    { text: 'Acessando a Plataforma pelo Aplicativo Móvel', link: '/documentacao/atendimento/central-de-atendimento/acessando-pelo-app' },
                    { text: 'Acessando a Plataforma pela Web', link: '/documentacao/atendimento/central-de-atendimento/acessando-pela-web' },
                    { text: 'Abas, Filtros e Ações em Massa', link: '/documentacao/atendimento/central-de-atendimento/abas-filtros-acoes' },
                    { text: 'Dados do Contato e Gestão Rápida', link: '/documentacao/atendimento/central-de-atendimento/dados-contato-gestao' }
                  ]
                },
                {
                  text: 'Operações no Atendimento',
                  link: '/documentacao/atendimento/operacoes-no-atendimento',
                  collapsed: true,
                  items: [
                    { text: 'Iniciar Atendimento', link: '/documentacao/atendimento/operacoes-no-atendimento/iniciar-atendimento' },
                    { text: 'Assumir atendimento', link: '/documentacao/atendimento/operacoes-no-atendimento/assumir-atendimento' },
                    { text: 'Transferir atendimento', link: '/documentacao/atendimento/operacoes-no-atendimento/transferir-atendimento' },
                    { text: 'Concluir e Classificar Atendimento', link: '/documentacao/atendimento/operacoes-no-atendimento/concluir-classificar' },
                    { text: 'Reiniciar atendimento', link: '/documentacao/atendimento/operacoes-no-atendimento/reiniciar-atendimento' },
                    { text: 'Preferências de Arquivamento', link: '/documentacao/atendimento/operacoes-no-atendimento/preferencias-arquivamento' }
                  ]
                },
                {
                  text: 'Ferramentas de Interação',
                  link: '/documentacao/atendimento/ferramentas-de-interacao',
                  collapsed: true,
                  items: [
                    { text: 'Enviar Imagem', link: '/documentacao/atendimento/ferramentas-de-interacao/enviar-imagem' },
                    { text: 'Enviar Vídeo', link: '/documentacao/atendimento/ferramentas-de-interacao/enviar-video' },
                    { text: 'Enviar Áudio', link: '/documentacao/atendimento/ferramentas-de-interacao/enviar-audio' },
                    { text: 'Gravar Áudio', link: '/documentacao/atendimento/ferramentas-de-interacao/gravar-audio' },
                    { text: 'Enviar Documento', link: '/documentacao/atendimento/ferramentas-de-interacao/enviar-documento' },
                    { text: 'Modelo de Mensagem', link: '/documentacao/atendimento/ferramentas-de-interacao/modelo-de-mensagem' },
                    { text: 'Mensagens Rápidas', link: '/documentacao/atendimento/ferramentas-de-interacao/mensagens-rapidas' },
                    { text: 'Agendar Mensagem', link: '/documentacao/atendimento/ferramentas-de-interacao/agendar-mensagem' },
                    { text: 'Solicitar Pagamento', link: '/documentacao/atendimento/ferramentas-de-interacao/solicitar-pagamento' },
                    { text: 'Iniciar Chatbot', link: '/documentacao/atendimento/ferramentas-de-interacao/iniciar-chatbot' },
                    { text: 'Notas da Conversa', link: '/documentacao/atendimento/ferramentas-de-interacao/notas-da-conversa' }
                  ]
                },
                {
                  text: 'Integração com o CRM',
                  link: '/documentacao/atendimento/integracao-com-o-crm',
                  collapsed: true,
                  items: [
                    { text: 'Criar Cards no Painel', link: '/documentacao/atendimento/integracao-com-o-crm/criar-cards-no-painel' }
                  ]
                },
                {
                  text: 'Grupos do Whatsapp',
                  link: '/documentacao/atendimento/grupos-do-whatsapp',
                  collapsed: true,
                  items: [
                    { text: 'Criar Grupos (API Oficial)', link: '/documentacao/atendimento/grupos-do-whatsapp/criar-grupos-api-oficial' },
                    { text: 'Criar Grupos (API Não Oficial)', link: '/documentacao/atendimento/grupos-do-whatsapp/criar-grupos-api-nao-oficial' },
                    { text: 'Gerenciar Grupos', link: '/documentacao/atendimento/grupos-do-whatsapp/gerenciar-grupos' }
                  ]
                }
              ]
            },
            {
              text: 'CRM',
              link: '/documentacao/crm',
              collapsed: true,
              items: [
                {
                  text: 'Contato',
                  link: '/documentacao/crm/contato',
                  collapsed: true,
                  items: [
                    { text: 'Cadastrar contato', link: '/documentacao/crm/contato/cadastrar-contato' },
                    { text: 'Importar Contatos em Lote', link: '/documentacao/crm/contato/importar-contatos-em-lote' },
                    { text: 'Pesquisar contato', link: '/documentacao/crm/contato/pesquisar-contato' },
                    { text: 'Bloquear ou Arquivar contato', link: '/documentacao/crm/contato/bloquear-ou-arquivar-contato' }
                  ]
                },
                {
                  text: 'Carteiras',
                  link: '/documentacao/crm/carteiras',
                  collapsed: true,
                  items: [
                    { text: 'Alterar ou excluir uma carteira', link: '/documentacao/crm/carteiras/alterar-ou-excluir-uma-carteira' },
                    { text: 'Criar uma nova carteira', link: '/documentacao/crm/carteiras/criar-uma-nova-carteira' },
                    { text: 'Incluir contato na carteira', link: '/documentacao/crm/carteiras/incluir-contato-na-carteira' },
                    { text: 'Tipos de carteiras', link: '/documentacao/crm/carteiras/tipos-de-carteiras' }
                  ]
                }
              ]
            },
            {
              text: 'Apps',
              collapsed: true,
              items: [
                {
                  text: 'Campanha',
                  link: '/documentacao/apps/campanha',
                  collapsed: true,
                  items: [
                    { text: 'Arquivar campanha', link: '/documentacao/apps/campanha/arquivar-campanha' },
                    { text: 'Criar modelo de mensagem para campanha', link: '/documentacao/apps/campanha/criar-modelo-mensagem' },
                    { text: 'Criar nova campanha', link: '/documentacao/apps/campanha/criar-nova-campanha' },
                    { text: 'Consultar campanha', link: '/documentacao/apps/campanha/consultar-campanha' },
                    { text: 'Exportar campanha', link: '/documentacao/apps/campanha/exportar-campanha' },
                    { text: 'Riscos e custos da campanha', link: '/documentacao/apps/campanha/riscos-e-custos' }
                  ]
                },
                {
                  text: 'Chatbot',
                  link: '/documentacao/apps/chatbot',
                  collapsed: true,
                  items: [
                    { text: 'Tipos de Chatbot', link: '/documentacao/apps/chatbot/tipos-de-chatbot' },
                    { text: 'Criando um chatbot', link: '/documentacao/apps/chatbot/criando-um-chatbot' }
                  ]
                },
                { text: 'Copiar e Colar do Chatbot na plataforma', link: '/documentacao/apps/copiar-e-colar-do-chatbot' },
                {
                  text: 'Pagamentos',
                  link: '/documentacao/apps/pagamentos',
                  collapsed: true,
                  items: [
                    { text: 'Ativar App de pagamento', link: '/documentacao/apps/pagamentos/ativar-app-pagamento' },
                    { text: 'Cancelar Estornar pagamento', link: '/documentacao/apps/pagamentos/cancelar-estornar-pagamento' },
                    { text: 'Consultar pagamento', link: '/documentacao/apps/pagamentos/consultar-pagamento' },
                    { text: 'Integrar com banco Asaas', link: '/documentacao/apps/pagamentos/integrar-com-banco-asaas' }
                  ]
                },
                {
                  text: 'Sequência',
                  link: '/documentacao/apps/sequencia',
                  collapsed: true,
                  items: [
                    { text: 'Adicionar etapa', link: '/documentacao/apps/sequencia/adicionar-etapa' },
                    { text: 'Criar sequência', link: '/documentacao/apps/sequencia/criar-sequencia' },
                    { text: 'Desabilitar / Excluir sequência', link: '/documentacao/apps/sequencia/desabilitar-excluir-sequencia' },
                    { text: 'Finalizar sequência', link: '/documentacao/apps/sequencia/finalizar-sequencia' },
                    { text: 'Incluir contato na sequência', link: '/documentacao/apps/sequencia/incluir-contato-na-sequencia' },
                    { text: 'Objetivo da sequência', link: '/documentacao/apps/sequencia/objetivo-da-sequencia' },
                    { text: 'Reiniciar sequência', link: '/documentacao/apps/sequencia/reiniciar-sequencia' },
                    { text: 'Visualizar contatos', link: '/documentacao/apps/sequencia/visualizar-contatos' }
                  ]
                },
                {
                  text: 'IA - Agentes Inteligentes',
                  link: '/documentacao/apps/ia-agentes-inteligentes',
                  collapsed: true,
                  items: [
                    { text: 'Novo Agente', link: '/documentacao/apps/ia-agentes-inteligentes/novo-agente' },
                    { text: 'Aba Configurações', link: '/documentacao/apps/ia-agentes-inteligentes/aba-configuracoes' },
                    { text: 'Habilidades', link: '/documentacao/apps/ia-agentes-inteligentes/habilidades' },
                    { text: 'Simular Tempo de Digitação', link: '/documentacao/apps/ia-agentes-inteligentes/simular-tempo-de-digitacao' },
                    { text: 'Indicador de Digitando', link: '/documentacao/apps/ia-agentes-inteligentes/indicador-de-digitando' },
                    {
                      text: 'Versões dos Agentes',
                      link: '/documentacao/apps/ia-agentes-inteligentes/versoes-dos-agentes',
                      collapsed: true,
                      items: [
                        { text: 'V.05', link: '/documentacao/apps/ia-agentes-inteligentes/versoes-dos-agentes/v05' },
                        { text: 'V.06', link: '/documentacao/apps/ia-agentes-inteligentes/versoes-dos-agentes/v06' },
                        { text: 'V.07', link: '/documentacao/apps/ia-agentes-inteligentes/versoes-dos-agentes/v07' }
                      ]
                    }
                  ]
                },
                {
                  text: 'Mensagens Agendadas',
                  link: '/documentacao/apps/mensagens-agendadas',
                  collapsed: true,
                  items: [
                    { text: 'Modelo para Mensagens Agendadas', link: '/documentacao/apps/mensagens-agendadas/modelo-para-mensagens-agendadas' },
                    { text: 'Como Gerenciar os Agendamentos', link: '/documentacao/apps/mensagens-agendadas/como-gerenciar-os-agendamentos' },
                    { text: 'Agendamentos pelo CRM', link: '/documentacao/apps/mensagens-agendadas/agendamentos-pelo-crm' }
                  ]
                },
                {
                  text: 'Chat Interno',
                  link: '/documentacao/apps/chat-interno',
                  collapsed: true,
                  items: [
                    { text: 'Ativar e Desativar Funcionalidade', link: '/documentacao/apps/chat-interno/ativar-e-desativar-funcionalidade' },
                    { text: 'Tipos de Conversa', link: '/documentacao/apps/chat-interno/tipos-de-conversa' }
                  ]
                },
                {
                  text: 'Grupos do WhatsApp',
                  link: '/documentacao/apps/grupos-whatsapp',
                  collapsed: true,
                  items: [
                    { text: 'Habilitar o App', link: '/documentacao/apps/grupos-whatsapp/habilitar-o-app' }
                  ]
                },
                {
                  text: 'Tempo de Segurança',
                  link: '/documentacao/apps/tempo-de-seguranca',
                  collapsed: true,
                  items: [
                    { text: 'Como Corrigir Problemas com a Sincronização', link: '/documentacao/apps/tempo-de-seguranca/como-corrigir-problemas' }
                  ]
                },
                {
                  text: 'Distribuição de atendimentos',
                  link: '/documentacao/apps/distribuicao-de-atendimentos',
                  collapsed: true,
                  items: [
                    { text: 'Distribuição de atendimentos', link: '/documentacao/apps/distribuicao-de-atendimentos/distribuicao-de-atendimentos' }
                  ]
                },
                {
                  text: 'Transcrição de áudio com IA',
                  link: '/documentacao/apps/transcricao-de-audio-com-ia',
                  collapsed: true,
                  items: [
                    { text: 'Degustação de Transcrição de Áudio', link: '/documentacao/apps/transcricao-de-audio-com-ia/degustacao-de-transcricao-de-audio' }
                  ]
                },
              ]
            },
            {
              text: 'Relatórios',
              link: '/documentacao/relatorios',
              collapsed: true,
              items: [
                {
                  text: 'Atendimento',
                  link: '/documentacao/relatorios/atendimento',
                  collapsed: true,
                  items: [
                    { text: 'Como exportar relatório na plataforma', link: '/documentacao/relatorios/atendimento/como-exportar-relatorio-na-plataforma' },
                    { text: 'Como exportar mensagens na plataforma', link: '/documentacao/relatorios/atendimento/como-exportar-mensagens-na-plataforma' },
                    { text: 'Como concluir atendimentos em massa', link: '/documentacao/relatorios/atendimento/como-concluir-atendimentos-em-massa' }
                  ]
                },
                { text: 'Consumo de Infraestrutura', link: '/documentacao/relatorios/consumo-de-infraestrutura' }
              ]
            },
            {
              text: 'Ajustes',
              link: '/documentacao/ajustes',
              collapsed: true,
              items: [
                {
                  text: 'Conta',
                  link: '/documentacao/ajustes/conta',
                  collapsed: true,
                  items: [
                    { text: 'Cadastrar Instagram / Facebook Messenger', link: '/documentacao/ajustes/conta/cadastrar-instagram-facebook-messenger' },
                    { text: 'Dados da conta', link: '/documentacao/ajustes/conta/dados-da-conta' },
                    { text: 'Horário de atendimento', link: '/documentacao/ajustes/conta/horario-de-atendimento' },
                    { text: 'Processo de dar permissão para reconectar o número', link: '/documentacao/ajustes/conta/processo-permissao-reconectar-numero' },
                    { text: 'Remover Canal de Atendimento', link: '/documentacao/ajustes/conta/remover-canal-de-atendimento' }
                  ]
                },
                {
                  text: 'Equipes',
                  link: '/documentacao/ajustes/equipes',
                  collapsed: true,
                  items: [
                    { text: 'Cadastrar equipe', link: '/documentacao/ajustes/equipes/cadastrar-equipe' },
                    { text: 'Distribuição e transbordo de atendimento', link: '/documentacao/ajustes/equipes/distribuicao-e-transbordo-de-atendimento' },
                    { text: 'Relação de acessos x conversas', link: '/documentacao/ajustes/equipes/relacao-de-acessos-x-conversas' },
                    { text: 'Tipo de associação usuário x supervisor', link: '/documentacao/ajustes/equipes/tipo-de-associacao-usuario-x-supervisor' }
                  ]
                },
                {
                  text: 'Integrações',
                  link: '/documentacao/ajustes/integracoes',
                  collapsed: true,
                  items: [
                    { text: 'Botão do WhatsApp e tag de rastreamento', link: '/documentacao/ajustes/integracoes/botao-whatsapp-tag-rastreamento' }
                  ]
                },
                {
                  text: 'Modelo de Mensagens',
                  link: '/documentacao/ajustes/modelo-de-mensagens',
                  collapsed: true,
                  items: [
                    { text: 'Como criar modelo de mensagem', link: '/documentacao/ajustes/modelo-de-mensagens/como-criar-modelo-de-mensagem' },
                    { text: 'Conceito de janela de conversa (cobrança)', link: '/documentacao/ajustes/modelo-de-mensagens/conceito-de-janela-de-conversa-cobranca' },
                    { text: 'Conceito de janela de troca de mensagem', link: '/documentacao/ajustes/modelo-de-mensagens/conceito-de-janela-de-troca-de-mensagem' },
                    { text: 'Editar modelos de mensagem', link: '/documentacao/ajustes/modelo-de-mensagens/editar-modelos-de-mensagem' },
                    { text: 'Franquia e custo de mensagem', link: '/documentacao/ajustes/modelo-de-mensagens/franquia-e-custo-de-mensagem' },
                    { text: 'Mensagens com botões, imagem, vídeo e documento', link: '/documentacao/ajustes/modelo-de-mensagens/mensagens-com-botoes-imagem-video-e-documento' },
                    { text: 'Mensagens de Marketing x Mensagens de Utilidade', link: '/documentacao/ajustes/modelo-de-mensagens/mensagens-de-marketing-x-mensagens-de-utilidade' },
                    { text: 'Parâmetros e personalização de mensagens', link: '/documentacao/ajustes/modelo-de-mensagens/parametros-e-personalizacao-de-mensagens' },
                    { text: 'Tipos de modelo de mensagem', link: '/documentacao/ajustes/modelo-de-mensagens/tipos-de-modelo-de-mensagem' }
                  ]
                },
                {
                  text: 'Usuários',
                  link: '/documentacao/ajustes/usuarios',
                  collapsed: true,
                  items: [
                    { text: 'Cadastrar usuários', link: '/documentacao/ajustes/usuarios/cadastrar-usuarios' },
                    { text: 'Editar foto do usuário', link: '/documentacao/ajustes/usuarios/editar-foto-do-usuario' },
                    { text: 'Tipos de perfis de usuários', link: '/documentacao/ajustes/usuarios/tipos-de-perfis-de-usuarios' }
                  ]
                }
              ]
            },
            {
              text: 'Outros',
              link: '/outros',
              collapsed: true,
              items: [
                { text: 'Alterar Informações do Meu Usuário', link: '/outros/alterar-informacoes-do-meu-usuario' },
                { text: 'Como Alternar Entre Contas na plataforma', link: '/outros/como-alternar-entre-contas' },
                { text: 'Como Ativar as Notificações Web na Plataforma', link: '/outros/como-ativar-notificacoes-web' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/thiagojbs/doc-paper' }
    ],

    outline: {
      label: 'Nesta página'
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },

    footer: {
      message: 'Licença Open Source. Sinta-se livre para copiar e clonar.',
      copyright: 'Desenvolvido por: Thiago Barroncas | thiago@barroncas.com | (21) 99658-2140'
    }
  }
})
