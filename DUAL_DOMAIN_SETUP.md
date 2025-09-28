# Gomanic Landing - Dual Domain Setup

## Структура веток

- **main** - для домена gomanic.ru (Yandex.Metrika: 104311353)
- **nastya-domain** - для домена nastya6716.gomanic.ru (Yandex.Metrika: 104232703)

## Environment Files

### .env.main - для основного домена (gomanic.ru)
```
NEXT_PUBLIC_SITE_URL=https://gomanic.ru
YANDEX_METRIKA_ID=104311353
```

### .env.nastya - для дополнительного домена (nastya6716.gomanic.ru)
```
NEXT_PUBLIC_SITE_URL=https://nastya6716.gomanic.ru
YANDEX_METRIKA_ID=104232703
```

## Деплой

### Основной домен (gomanic.ru)
1. Переключиться на ветку main: `git checkout main`
2. Скопировать настройки: `cp .env.main .env.local`
3. Собрать проект: `npm run build`
4. Задеплоить на gomanic.ru

### Дополнительный домен (nastya6716.gomanic.ru)
1. Переключиться на ветку nastya-domain: `git checkout nastya-domain`
2. Скопировать настройки: `cp .env.nastya .env.local`
3. Собрать проект: `npm run build`
4. Задеплоить на nastya6716.gomanic.ru

## Yandex.Metrika счетчики

### gomanic.ru - 104311353
```html
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104311353', 'ym');
    ym(104311353, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
```

### nastya6716.gomanic.ru - 104232703
```html
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104232703', 'ym');
    ym(104232703, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
```

## Локальная разработка

Для тестирования любого домена локально:
1. Скопировать нужный env файл: `cp .env.main .env.local` или `cp .env.nastya .env.local`
2. Запустить: `npm run dev`
3. Открыть: http://localhost:3000

## Синхронизация изменений

Чтобы синхронизировать изменения между ветками (кроме environment переменных):
1. Внести изменения в main
2. Переключиться на nastya-domain: `git checkout nastya-domain`
3. Сделать rebase: `git rebase main`
4. Решить конфликты в .env.local если есть
