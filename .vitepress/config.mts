import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Paper Vines",
  srcDir: './docs',
  base: '/',
  description: "Documentação Oficial da Paper Vines",
  head: [
    ['script', { src: 'https://unpkg.com/lucide@latest' }]
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo-paper.png',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
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
              { text: 'Contato', link: '/documentacao/crm/contato' },
              { text: 'Carteiras', link: '/documentacao/crm/carteiras' }
            ]
          },
          {
            text: 'Apps',
            collapsed: true,
            items: [
              { text: 'Campanha', link: '/documentacao/apps/campanha' },
              { text: 'Chatbot', link: '/documentacao/apps/chatbot' },
              { text: 'Copiar e Colar do Chatbot na plataforma', link: '/documentacao/apps/copiar-e-colar-do-chatbot' },
              { text: 'Pagamentos', link: '/documentacao/apps/pagamentos' },
              { text: 'Sequência', link: '/documentacao/apps/sequencia' },
              { text: 'IA - Agentes Inteligentes', link: '/documentacao/apps/ia-agentes-inteligentes' },
              { text: 'Mensagens Agendadas', link: '/documentacao/apps/mensagens-agendadas' },
              { text: 'Chat Interno', link: '/documentacao/apps/chat-interno' },
              { text: 'Grupos do WhatsApp', link: '/documentacao/apps/grupos-do-whatsapp' },
              { text: 'Tempo de Segurança', link: '/documentacao/apps/tempo-de-seguranca' },
              { text: 'Distribuição de atendimentos', link: '/documentacao/apps/distribuicao-de-atendimentos' },
              {
                text: 'Transcrição de audio com IA',
                link: '/documentacao/apps/transcricao-de-audio-com-ia',
                collapsed: true,
                items: [
                  { text: 'Degustação de Transcrição de Áudio', link: '/documentacao/apps/transcricao-de-audio-com-ia/degustacao-de-transcricao-de-audio' }
                ]
              }
            ]
          },
          {
            text: 'Relatórios',
            link: '/documentacao/relatorios',
            collapsed: true,
            items: [
              { text: 'Atendimento', link: '/documentacao/relatorios/atendimento' },
              { text: 'Consumo de Infraestrutura', link: '/documentacao/relatorios/consumo-de-infraestrutura' }
            ]
          },
          {
            text: 'Ajustes',
            link: '/documentacao/ajustes',
            collapsed: true,
            items: [
              { text: 'Conta', link: '/documentacao/ajustes/conta' },
              { text: 'Equipes', link: '/documentacao/ajustes/equipes' },
              { text: 'Integrações', link: '/documentacao/ajustes/integracoes' },
              { text: 'Modelo de Mensagens', link: '/documentacao/ajustes/modelo-de-mensagens' },
              { text: 'Usuários', link: '/documentacao/ajustes/usuarios' }
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/papervines' }
    ]
  }
})
