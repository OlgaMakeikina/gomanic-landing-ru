# 🇧🇷 Gomanic Brazil Landing

Landing page profissional para serviços de manicure em Florianópolis - SC, Brasil.

## ✅ ESTRUTURA COMPLETA PREPARADA

### 🔧 Configurações
- ✅ Next.js 14 с App Router
- ✅ TypeScript готов к использованию
- ✅ Tailwind CSS настроен
- ✅ Переменные окружения защищены
- ✅ SEO оптимизирован
- ✅ Google Analytics 4 + Facebook Pixel
- ✅ API для форм подготовлен

### 🔌 Интеграции  
- ✅ Fresha CRM (заготовка)
- ✅ Mercado Pago (заготовка)
- ✅ WhatsApp Business (заготовка)
- ✅ SMTP Email (заготовка)

### 🚀 Deploy готов
- ✅ Nginx конфигурация
- ✅ PM2 настройки
- ✅ SSL сертификаты
- ✅ Скрипты проверки

## 🚀 Quick Start

### Desenvolvimento Local

```bash
# Clonar repositório
git clone https://github.com/OlgaMakeikina/gomanic-landing-br.git
cd gomanic-landing-br

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com valores reais

# Iniciar servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3001`

## 🔧 Configuração

### Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha com valores reais:

- **NEXT_PUBLIC_SITE_URL**: URL do seu domínio
- **GOOGLE_ANALYTICS_ID**: ID do Google Analytics 4
- **FRESHA_API_KEY**: Chave da API do Fresha (CRM)
- **MERCADO_PAGO_ACCESS_TOKEN**: Token do Mercado Pago

### Integrações

- **CRM**: Fresha para agendamento
- **Pagamentos**: Mercado Pago
- **Analytics**: Google Analytics 4 + Facebook Pixel
- **WhatsApp**: Link direto para atendimento

## 🌐 Deploy em VPS

### Pré-requisitos no Servidor

```bash
# Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2 para gerenciar processos
npm install -g pm2

# Nginx como proxy reverso
sudo apt install nginx

# SSL Certificate
sudo apt install certbot python3-certbot-nginx
```

### Processo de Deploy

```bash
# 1. Clonar no servidor
git clone https://github.com/OlgaMakeikina/gomanic-landing-br.git
cd gomanic-landing-br

# 2. Configurar ambiente
cp .env.example .env.local
# Editar .env.local com valores de produção

# 3. Verificar deploy
npm run deploy-check

# 4. Iniciar com PM2
pm2 start npm --name "brazil-landing" -- start
pm2 save
pm2 startup

# 5. Configurar Nginx (ver nginx.conf.example)
sudo ln -s /path/to/nginx.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# 6. SSL Certificate
sudo certbot --nginx -d seu-dominio.com.br
```

## 📁 Estrutura do Projeto

```
gomanic-landing-br/
├── public/                 # Assets estáticos
│   ├── images/            # Imagens do site
│   ├── fonts/             # Fontes customizadas  
│   └── favicon.ico
├── src/
│   ├── app/               # App Router (Next.js 13+)
│   ├── components/        # Componentes React
│   │   └── sections/      # Seções da landing page
│   └── utils/             # Utilitários e configurações
├── scripts/               # Scripts de deploy
├── .env.example          # Template de variáveis
└── README.md
```

## 🎯 Seções da Landing Page

1. **Header** - Navegação e logo
2. **Hero** - Chamada principal  
3. **Promoções** - Pacotes e preços
4. **Portfolio** - Galeria de trabalhos
5. **Qualidade** - Diferenciais e certificações
6. **Depoimentos** - Social proof
7. **Como Funciona** - Processo de atendimento  
8. **VIP** - Programa de fidelidade
9. **Contato** - Formulário de agendamento
10. **Footer** - Informações da empresa

## 🔒 Segurança

- ✅ Variáveis sensíveis em `.env.local` (não no repositório)
- ✅ Headers de segurança configurados
- ✅ Validação de formulários
- ✅ Rate limiting em APIs
- ✅ HTTPS obrigatório em produção

## 📊 Analytics e SEO

- Google Analytics 4 configurado
- Meta tags otimizadas para SEO
- Open Graph para redes sociais
- Schema.org markup
- Sitemap.xml automático
- Robots.txt configurado

## 🛠️ Comandos Úteis

```bash
npm run dev          # Servidor desenvolvimento
npm run build        # Build de produção  
npm run start        # Servidor produção
npm run lint         # Verificar código
npm run type-check   # Verificar TypeScript
npm run deploy-check # Verificar deploy
```

## 📞 Suporte

Para dúvidas sobre o deploy ou configuração, entre em contato com a equipe de desenvolvimento.

---

**🔗 Links Importantes:**
- Site: [https://seu-dominio.com.br](https://seu-dominio.com.br)
- Instagram: [@unhas_cinco_estrelas](https://instagram.com/unhas_cinco_estrelas)
- WhatsApp: [+55 48 99673-7351](https://wa.me/5548996737351)
