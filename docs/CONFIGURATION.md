# 🔧 Guia de Configuração - Gomanic Brazil Landing

## 📋 Checklist de Deploy

### ✅ Pré-Deploy (Local)

- [ ] Projeto clonado e dependências instaladas
- [ ] `.env.local` configurado com valores corretos
- [ ] `npm run build` executa sem erros
- [ ] `npm run deploy-check` passou em todas as verificações
- [ ] Todas as imagens necessárias estão em `/public/`
- [ ] Testes de funcionalidade realizados

### ✅ Configuração do Servidor

- [ ] Node.js 18+ instalado
- [ ] PM2 instalado globalmente
- [ ] Nginx instalado e configurado
- [ ] Certificado SSL obtido
- [ ] Firewall configurado (portas 80, 443, 22)
- [ ] Usuário de deploy criado com permissões adequadas

### ✅ Deploy da Aplicação

- [ ] Código clonado no servidor
- [ ] `.env.local` copiado e configurado
- [ ] Build de produção executado
- [ ] PM2 iniciado e configurado para auto-start
- [ ] Nginx configurado e testado
- [ ] SSL certificate instalado
- [ ] Logs funcionando corretamente

### ✅ Verificações Pós-Deploy

- [ ] Site carrega corretamente no domínio
- [ ] HTTPS funciona (redirecionamento automático)
- [ ] Formulário de contato envia dados
- [ ] Analytics rastreando pageviews
- [ ] Links de WhatsApp funcionam
- [ ] Links de Instagram funcionam
- [ ] Galeria de imagens carrega
- [ ] Site responsivo em mobile
- [ ] SEO verificado (robots.txt, sitemap.xml)

---

## 🔑 Variáveis de Ambiente Detalhadas

### Core Settings
```bash
# URL do site (obrigatório)
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com.br

# Ambiente (development/production)
NEXT_PUBLIC_ENVIRONMENT=production
```

### Analytics & Tracking
```bash
# Google Analytics 4 (obrigatório para analytics)
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Facebook Pixel (opcional, mas recomendado)
FACEBOOK_PIXEL_ID=XXXXXXXXXX
```

### CRM Integration (Fresha)
```bash
# API Key do Fresha (obter no painel admin)
FRESHA_API_KEY=your_fresha_api_key_here

# URL do webhook para receber agendamentos
FRESHA_WEBHOOK_URL=https://api.fresha.com/webhooks/your-endpoint
```

### Payment Gateway (Mercado Pago)
```bash
# Token de acesso (obter no painel Mercado Pago)
MERCADO_PAGO_ACCESS_TOKEN=your_mp_access_token

# Chave pública (para frontend)
MERCADO_PAGO_PUBLIC_KEY=your_mp_public_key
```

### Email Service (Opcional)
```bash
# Configurações SMTP para envio de emails
SMTP_HOST=smtp.gmail.com
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-app

# Para Gmail, usar senha de app, não senha da conta
```

### WhatsApp Business API (Opcional)
```bash
# Para integração avançada com WhatsApp Business
WHATSAPP_API_KEY=your_whatsapp_key
WHATSAPP_PHONE_ID=your_phone_id
```

---

## 🌐 Configuração de Domínio

### DNS Records
Configure os seguintes registros no seu provedor de DNS:

```
Tipo    Nome    Valor                    TTL
A       @       IP_DO_SEU_SERVIDOR       300
A       www     IP_DO_SEU_SERVIDOR       300
CNAME   www     seu-dominio.com.br       300
```

### Nginx Virtual Host
O arquivo `nginx.conf.example` deve ser copiado e editado:

```bash
# 1. Copiar template
sudo cp nginx.conf.example /etc/nginx/sites-available/gomanic-brazil

# 2. Editar domínio
sudo nano /etc/nginx/sites-available/gomanic-brazil
# Substituir 'seu-dominio.com.br' pelo domínio real

# 3. Ativar site
sudo ln -s /etc/nginx/sites-available/gomanic-brazil /etc/nginx/sites-enabled/

# 4. Remover site default (opcional)
sudo rm /etc/nginx/sites-enabled/default

# 5. Testar configuração
sudo nginx -t

# 6. Recarregar Nginx
sudo systemctl reload nginx
```

### SSL Certificate
```bash
# Instalar Certbot se não estiver instalado
sudo apt install certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d seu-dominio.com.br -d www.seu-dominio.com.br

# Testar renovação automática
sudo certbot renew --dry-run
```

---

## 🗄️ Configuração de Banco de Dados (Opcional)

Se futuramente precisar de banco de dados:

### PostgreSQL
```bash
# Instalar PostgreSQL
sudo apt install postgresql postgresql-contrib

# Criar banco e usuário
sudo -u postgres psql
CREATE DATABASE gomanic_brazil;
CREATE USER gomanic_user WITH PASSWORD 'senha_segura';
GRANT ALL PRIVILEGES ON DATABASE gomanic_brazil TO gomanic_user;
\q

# Adicionar ao .env.local
DATABASE_URL=postgresql://gomanic_user:senha_segura@localhost:5432/gomanic_brazil
```

---

## 📊 Configuração de Monitoramento

### PM2 Monitoring
```bash
# Instalar PM2 Plus para monitoramento avançado (opcional)
pm2 install pm2-server-monit

# Configurar keymetrics (opcional)
pm2 set pm2:sysmonit true
pm2 update
```

### Log Rotation
```bash
# Configurar rotação de logs Nginx
sudo nano /etc/logrotate.d/nginx

# Adicionar:
/var/log/nginx/gomanic-brazil.*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    create 644 www-data www-data
    postrotate
        /bin/kill -USR1 `cat /run/nginx.pid 2>/dev/null` 2>/dev/null || true
    endscript
}
```

### System Monitoring
```bash
# Instalar htop para monitoramento visual
sudo apt install htop

# Verificar status do sistema
htop                    # Monitor interativo
df -h                   # Espaço em disco
free -h                 # Memória RAM
sudo netstat -tlnp      # Portas abertas
```

---

## 🔒 Configuração de Segurança

### Firewall (UFW)
```bash
# Ativar UFW
sudo ufw enable

# Regras básicas
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw status

# Bloquear tentativas de brute force SSH (opcional)
sudo apt install fail2ban
```

### Usuário de Deploy
```bash
# Criar usuário específico para deploy
sudo useradd -m -s /bin/bash deployer
sudo usermod -aG sudo deployer

# Configurar chaves SSH
sudo mkdir /home/deployer/.ssh
sudo cp ~/.ssh/authorized_keys /home/deployer/.ssh/
sudo chown -R deployer:deployer /home/deployer/.ssh
sudo chmod 700 /home/deployer/.ssh
sudo chmod 600 /home/deployer/.ssh/authorized_keys
```

### Backup Automático
```bash
# Script de backup diário
sudo nano /usr/local/bin/backup-gomanic.sh

#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/gomanic"
PROJECT_DIR="/var/www/gomanic-brazil"

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/gomanic-backup-$DATE.tar.gz \
    $PROJECT_DIR/.env.local \
    $PROJECT_DIR/public \
    /etc/nginx/sites-available/gomanic-brazil

# Manter apenas últimos 7 backups
find $BACKUP_DIR -name "gomanic-backup-*.tar.gz" -mtime +7 -delete

# Tornar executável
sudo chmod +x /usr/local/bin/backup-gomanic.sh

# Adicionar ao crontab
sudo crontab -e
# Adicionar linha: 0 2 * * * /usr/local/bin/backup-gomanic.sh
```

---

## 🎛️ Configurações Avançadas

### Performance Tuning
```bash
# PM2 Cluster Mode (para alta demanda)
# Editar pm2.config.json:
{
  "instances": "max",  # Usar todos os cores CPU
  "exec_mode": "cluster"
}

# Nginx Caching
# Adicionar ao nginx.conf:
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=static:10m inactive=60m;
proxy_cache static;
proxy_cache_valid 200 1h;
```

### Custom Domain Email
```bash
# Configurar email personalizado @seu-dominio.com.br
# Usar Google Workspace, AWS SES, ou Mailgun
# Adicionar registros MX no DNS

# Exemplo para Google Workspace:
MX  @  1  aspmx.l.google.com
MX  @  5  alt1.aspmx.l.google.com
MX  @  5  alt2.aspmx.l.google.com
```

---

## 🧪 Testes de Configuração

### Teste de Performance
```bash
# Instalar Apache Bench
sudo apt install apache2-utils

# Teste de carga básico
ab -n 1000 -c 10 https://seu-dominio.com.br/

# Análise de velocidade
curl -o /dev/null -s -w "%{time_total}\n" https://seu-dominio.com.br/
```

### Teste de SSL
```bash
# Verificar configuração SSL
openssl s_client -connect seu-dominio.com.br:443

# Teste online: https://www.ssllabs.com/ssltest/
```

### Teste de SEO
```bash
# Verificar robots.txt
curl https://seu-dominio.com.br/robots.txt

# Verificar sitemap
curl https://seu-dominio.com.br/sitemap.xml

# Teste de meta tags com curl
curl -s https://seu-dominio.com.br | grep -i "<meta"
```

---

## 📈 Próximos Passos

Após deploy inicial bem-sucedido:

1. **Configurar Analytics** - Verificar dados no Google Analytics
2. **Testar Integrações** - Envio de formulários, pagamentos
3. **Configurar Backups** - Automatizar backup diário
4. **Monitorar Performance** - Acompanhar métricas de velocidade
5. **SEO Audit** - Verificar indexação no Google
6. **Configurar Alertas** - Notificações em caso de problemas

---

**💡 Dica:** Mantenha esta documentação atualizada conforme novas configurações forem adicionadas ao projeto.
