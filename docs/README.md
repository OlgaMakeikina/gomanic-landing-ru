# 📚 Documentação Técnica - Gomanic Brazil Landing

## 📖 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Instalação](#instalação)
4. [Configuração](#configuração)
5. [Desenvolvimento](#desenvolvimento)
6. [Deploy](#deploy)
7. [Integrações](#integrações)
8. [SEO](#seo)
9. [Monitoramento](#monitoramento)
10. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

Este projeto é uma landing page profissional para serviços de manicure em Florianópolis, construída com Next.js 14 e otimizada para conversão e SEO.

### Tecnologias Utilizadas

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript/JavaScript
- **Analytics**: Google Analytics 4, Facebook Pixel
- **CRM**: Fresha Integration
- **Payments**: Mercado Pago
- **Deployment**: Nginx + PM2 + SSL

### Funcionalidades Principais

- ✅ Landing page responsiva e otimizada
- ✅ Formulário de agendamento integrado
- ✅ Galeria interativa de trabalhos
- ✅ Sistema de analytics completo
- ✅ Integração com CRM Fresha
- ✅ Gateway de pagamento Mercado Pago
- ✅ SEO otimizado para Google
- ✅ Schemas estruturados (JSON-LD)

---

## 🏗️ Arquitetura

### Estrutura de Diretórios

```
gomanic-landing-br/
├── docs/                    # Documentação
├── public/                  # Assets estáticos
│   ├── images/             # Imagens otimizadas
│   ├── fonts/              # Fontes customizadas
│   ├── robots.txt          # SEO robots
│   └── sitemap.xml         # Sitemap
├── src/
│   ├── app/                # App Router (Next.js 14)
│   │   ├── layout.tsx      # Layout principal + Analytics
│   │   ├── page.tsx        # Página principal
│   │   └── api/            # API Routes
│   ├── components/         # Componentes React
│   │   └── sections/       # Seções da landing page
│   └── utils/              # Utilitários e configurações
├── scripts/                # Scripts de deploy
└── *.config.js            # Configurações
```

### Componentes Principais

1. **Header** - Navegação fixa
2. **HeroSection** - Chamada principal com vídeo
3. **PromocoesMes2** - Pacotes de serviços e preços
4. **PortfolioSection** - Galeria interativa de trabalhos
5. **SocialProof** - Depoimentos e reviews
6. **ContactSection** - Formulário de agendamento
7. **Footer** - Informações da empresa

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 18+ 
- npm 8+
- Git

### Desenvolvimento Local

```bash
# 1. Clonar o repositório
git clone https://github.com/OlgaMakeikina/gomanic-landing-br.git
cd gomanic-landing-br

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas configurações

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3001`

### Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificar código
npm run type-check   # Verificar TypeScript
npm run deploy-check # Verificar prontidão para deploy
```

---

## ⚙️ Configuração

### Variáveis de Ambiente

Copie `.env.example` para `.env.local` e configure:

#### Obrigatórias
```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br
NEXT_PUBLIC_ENVIRONMENT=production
```

#### Analytics
```bash
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
FACEBOOK_PIXEL_ID=XXXXXXXXXX
```

#### Integrações
```bash
# Fresha CRM
FRESHA_API_KEY=your_fresha_api_key
FRESHA_WEBHOOK_URL=https://api.fresha.com/webhooks/your-endpoint

# Mercado Pago
MERCADO_PAGO_ACCESS_TOKEN=your_mp_token
MERCADO_PAGO_PUBLIC_KEY=your_mp_public_key

# Email (opcional)
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

### Configuração do Next.js

O arquivo `next.config.js` inclui:
- Headers de segurança
- Redirects automáticos
- Otimizações de imagem
- Configurações de build

---

## 💻 Desenvolvimento

### Adicionando Novas Seções

1. Criar componente em `src/components/sections/`
2. Importar no `src/app/page.tsx`
3. Adicionar estilos necessários
4. Testar responsividade

### Customização de Estilos

O projeto usa Tailwind CSS. Principais arquivos:
- `tailwind.config.js` - Configuração do Tailwind
- `src/app/globals.css` - Estilos globais e fontes
- Classes utilitárias inline nos componentes

### Fontes Customizadas

- **Horizon** - Títulos e destaques
- **Garet** - Texto corpo e descrições

Fontes estão em `/public/fonts/` e carregadas via CSS.

---

## 🚀 Deploy

### Deploy em VPS

#### 1. Preparação do Servidor

```bash
# Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2
npm install -g pm2

# Nginx
sudo apt install nginx

# Certbot para SSL
sudo apt install certbot python3-certbot-nginx
```

#### 2. Deploy da Aplicação

```bash
# Clonar projeto
git clone https://github.com/OlgaMakeikina/gomanic-landing-br.git
cd gomanic-landing-br

# Configurar ambiente
cp .env.example .env.local
nano .env.local  # Adicionar valores reais

# Verificar configuração
npm run deploy-check

# Build de produção
npm install --production
npm run build

# Iniciar com PM2
pm2 start pm2.config.json
pm2 save
pm2 startup
```

#### 3. Configuração do Nginx

```bash
# Copiar configuração
sudo cp nginx.conf.example /etc/nginx/sites-available/gomanic-brazil

# Editar domínio
sudo nano /etc/nginx/sites-available/gomanic-brazil

# Ativar site
sudo ln -s /etc/nginx/sites-available/gomanic-brazil /etc/nginx/sites-enabled/

# Testar e recarregar
sudo nginx -t
sudo systemctl reload nginx
```

#### 4. SSL Certificate

```bash
sudo certbot --nginx -d seu-dominio.com.br
```

### Atualizações

```bash
# No servidor
cd gomanic-landing-br
git pull origin main
npm install
npm run build
pm2 restart gomanic-brazil-landing
```

---

## 🔌 Integrações

### Google Analytics 4

**Configuração:**
1. Criar propriedade no Google Analytics
2. Copiar ID (formato: G-XXXXXXXXXX)
3. Adicionar em `.env.local`: `GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX`

**Eventos Rastreados:**
- Agendamento iniciado
- Cliques no WhatsApp
- Visualizações do portfólio
- Cliques nas redes sociais

### Fresha CRM

**Setup:**
1. Obter API key do Fresha
2. Configurar webhook URL
3. Adicionar credenciais no `.env.local`

**Funcionalidades:**
- Envio automático de leads
- Criação de agendamentos
- Sincronização de clientes

### Mercado Pago

**Configuração:**
1. Criar conta Mercado Pago
2. Obter tokens de produção
3. Configurar webhooks para confirmação

**Fluxo de Pagamento:**
1. Cliente escolhe serviço
2. Cria preferência de pagamento
3. Redireciona para Mercado Pago
4. Webhook confirma pagamento
5. Atualiza status no CRM

### WhatsApp Business

Link direto configurado para o número: +55 48 99673-7351
- Mensagens automáticas para diferentes seções
- Rastreamento de cliques via Analytics

---

## 🔍 SEO

### Meta Tags Configuradas

- Title otimizado para palavras-chave locais
- Description atrativa com call-to-action
- Open Graph para redes sociais
- Twitter Cards
- Canonical URLs

### Schema.org (Dados Estruturados)

Implementados:
- **BeautySalon** - Informações do negócio
- **LocalBusiness** - Dados de localização
- **Service** - Serviços oferecidos
- **Review** - Avaliações de clientes

### Sitemap e Robots

- `sitemap.xml` - Páginas indexáveis
- `robots.txt` - Diretrizes para crawlers
- Geração automática baseada na estrutura

### Performance

- Imagens otimizadas (WebP quando possível)
- Lazy loading implementado
- Minificação automática de CSS/JS
- Caching de assets estáticos

---

## 📊 Monitoramento

### Logs de Sistema

```bash
# PM2 logs
pm2 logs gomanic-brazil-landing

# Nginx logs
sudo tail -f /var/log/nginx/gomanic-brazil.access.log
sudo tail -f /var/log/nginx/gomanic-brazil.error.log
```

### Métricas de Performance

- Core Web Vitals via Google Analytics
- Tempo de carregamento de páginas
- Taxa de conversão de formulários
- Origem do tráfego

### Alertas Recomendados

- CPU > 80% por mais de 5 minutos
- Memória > 90% 
- Resposta > 3 segundos
- Taxa de erro > 5%

---

## 🛠️ Troubleshooting

### Problemas Comuns

#### Site não carrega
```bash
# Verificar se PM2 está rodando
pm2 status

# Verificar logs
pm2 logs gomanic-brazil-landing

# Reiniciar aplicação
pm2 restart gomanic-brazil-landing
```

#### Erro 502 Bad Gateway
```bash
# Verificar se aplicação responde
curl http://localhost:3001

# Verificar configuração Nginx
sudo nginx -t

# Verificar logs Nginx
sudo tail -f /var/log/nginx/error.log
```

#### Formulário não funciona
1. Verificar variáveis de ambiente (`.env.local`)
2. Testar endpoint: `curl -X POST http://localhost:3001/api/contact`
3. Verificar logs da aplicação

#### Analytics não rastreia
1. Verificar `GOOGLE_ANALYTICS_ID` no `.env.local`
2. Verificar se domínio está correto no GA4
3. Testar em modo desenvolvimento (debug_mode)

### Comandos Úteis

```bash
# Status geral do sistema
pm2 status
sudo systemctl status nginx
df -h  # Espaço em disco
free -h  # Memória

# Logs em tempo real
pm2 logs --lines 100
sudo tail -f /var/log/nginx/gomanic-brazil.access.log

# Reiniciar serviços
pm2 restart all
sudo systemctl restart nginx

# Backup de configuração
tar -czf backup-$(date +%Y%m%d).tar.gz .env.local nginx.conf.example
```

---

## 📞 Suporte

Para dúvidas técnicas ou problemas no deploy:

1. **Verificar logs** do PM2 e Nginx
2. **Consultar documentação** oficial do Next.js
3. **Testar localmente** com `npm run dev`
4. **Verificar variáveis** de ambiente

**Recursos Úteis:**
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [PM2 Documentation](https://pm2.keymetrics.io/docs/)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

**📅 Última atualização:** Janeiro 2025
**🔢 Versão:** 1.0.0
**👨‍💻 Desenvolvido para:** Unhas 5 Estrelas - Florianópolis, SC
