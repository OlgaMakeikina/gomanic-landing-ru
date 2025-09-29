# Server Deployment Complete - Dual Domain Setup

## ✅ Успешно развернуто

### Домены и порты
- **gomanic.ru** → localhost:3000 (main branch)
- **nastya6716.gomanic.ru** → localhost:3001 (nastya-domain branch)

### Директории на сервере
```
/var/www/gomanic-landing-ru/  → main branch
~/gomanic-nastya-domain/       → nastya-domain branch
```

### PM2 процессы
```
┌────┬────────────────────┬──────┬────────┐
│ id │ name               │ port │ status │
├────┼────────────────────┼──────┼────────┤
│ 0  │ gomanic-ru-landing │ 3000 │ online │
│ 7  │ nastya-landing     │ 3001 │ online │
└────┴────────────────────┴──────┴────────┘
```

### Nginx конфигурация
- **gomanic.ru**: `/etc/nginx/sites-available/gomanic-landing`
  - SSL сертификат активен
  - Проксирование на localhost:3000
  
- **nastya6716.gomanic.ru**: `/etc/nginx/sites-available/nastya6716-gomanic`
  - SSL сертификат активен  
  - Проксирование на localhost:3001

### Yandex.Metrika счетчики
- **gomanic.ru**: 104311353 ✅
- **nastya6716.gomanic.ru**: 104232703 ✅

## 🔄 Команды для обновления

### Обновить gomanic.ru (main)
```bash
wsl sshpass -p "Qaz123wsx2025!" ssh -o StrictHostKeyChecking=no hhivp@45.10.53.158 "cd /var/www/gomanic-landing-ru && git pull && cp .env.main .env.local && npm run build && pm2 restart gomanic-ru-landing"
```

### Обновить nastya6716.gomanic.ru (nastya-domain)
```bash
wsl sshpass -p "Qaz123wsx2025!" ssh -o StrictHostKeyChecking=no hhivp@45.10.53.158 "cd ~/gomanic-nastya-domain && git pull && cp .env.nastya .env.local && npm run build && pm2 restart nastya-landing"
```

## 🧪 Проверка работоспособности
```bash
curl -I https://gomanic.ru
curl -I https://nastya6716.gomanic.ru
```

Оба домена возвращают HTTP/2 200 OK ✅

## 📊 Структура репозитория
- **Branch: main** - для gomanic.ru (счетчик 104311353)
- **Branch: nastya-domain** - для nastya6716.gomanic.ru (счетчик 104232703)

Каждая ветка имеет свой `.env.local` с правильным YANDEX_METRIKA_ID

## ✅ Автозапуск
PM2 процессы сохранены и будут автоматически запускаться при перезагрузке сервера.
