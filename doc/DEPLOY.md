# 🚀 ИНСТРУКЦИИ ПО ДЕПЛОЮ

## 📋 ЧТО ГОТОВО

✅ **Полная структура проекта скопирована**
✅ **Все конфиги настроены и защищены**  
✅ **API endpoints подготовлены**
✅ **SEO оптимизация готова**
✅ **Интеграции заложены (Fresha, MercadoPago)**
✅ **Nginx + PM2 конфиги готовы**

---

## 🔥 СЛЕДУЮЩИЕ ШАГИ

### 1. **ЗАГРУЗИТЬ В GITHUB** 
```bash
cd D:\projects\gomanic-landing-br
git init
git add .
git commit -m "Initial commit: Brazil landing ready for production"
git remote add origin https://github.com/OlgaMakeikina/gomanic-landing-br.git
git push -u origin main
```

### 2. **НА VPS - ДЕПЛОЙ**
```bash
# Клонировать
git clone https://github.com/OlgaMakeikina/gomanic-landing-br.git
cd gomanic-landing-br

# Настроить переменные окружения
cp .env.example .env.local
nano .env.local  # заполнить реальными значениями

# Проверить готовность
npm run deploy-check

# Установить в продакшн
npm install --production
npm run build

# Запустить с PM2
pm2 start pm2.config.json
pm2 save
pm2 startup
```

### 3. **NGINX НАСТРОЙКА**
```bash
# Скопировать конфиг
sudo cp nginx.conf.example /etc/nginx/sites-available/gomanic-brazil
# Отредактировать домен
sudo nano /etc/nginx/sites-available/gomanic-brazil
# Включить сайт
sudo ln -s /etc/nginx/sites-available/gomanic-brazil /etc/nginx/sites-enabled/
# Проверить и перезагрузить
sudo nginx -t
sudo systemctl reload nginx
```

### 4. **SSL СЕРТИФИКАТ**
```bash
sudo certbot --nginx -d ваш-домен.com.br
```

---

## 🔐 БЕЗОПАСНОСТЬ ОБЕСПЕЧЕНА

- ❌ **НЕТ секретных ключей в коде**
- ✅ **Все переменные в .env.local** (не в репозитории)
- ✅ **Gitignore защищает чувствительные файлы**
- ✅ **Headers безопасности настроены**
- ✅ **Rate limiting включен**

---

## 📊 ИНТЕГРАЦИИ ГОТОВЫ К НАСТРОЙКЕ

### **Google Analytics 4**
- Добавить `GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX` в .env.local
- Код уже встроен в layout.tsx

### **Fresha CRM**  
- Добавить `FRESHA_API_KEY=...` в .env.local
- API endpoint готов: `/api/contact`

### **MercadoPago**
- Добавить `MERCADO_PAGO_ACCESS_TOKEN=...` в .env.local
- Логика платежей подготовлена

### **WhatsApp Business**
- Номер уже настроен: +55 48 99673-7351
- API заготовка готова для расширения

---

## 🎯 РЕЗУЛЬТАТ

**Полностью готовый к продакшену проект:**
- 🔗 **GitHub**: https://github.com/OlgaMakeikina/gomanic-landing-br  
- 🌐 **Домен**: настроить на VPS
- 📱 **Адаптивный**: работает на всех устройствах
- ⚡ **Быстрый**: оптимизирован для скорости
- 🔍 **SEO**: готов к индексации Google

---

## 📞 ПОДДЕРЖКА

Если возникнут вопросы при деплое:
1. Проверить логи: `pm2 logs gomanic-brazil-landing`
2. Проверить Nginx: `sudo nginx -t`
3. Проверить переменные: файл `.env.local` заполнен
4. Проверить порт: `netstat -tlnp | grep 3001`

**🎉 Готово к запуску в продакшн!**
