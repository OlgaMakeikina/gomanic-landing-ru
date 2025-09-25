// Утилита для отслеживания кликов на кнопки Дикиди
export const trackDikidiClick = async (buttonText: string, buttonLocation: string) => {
  try {
    // Отправляем событие в Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'dikidi_click', {
        event_category: 'booking',
        event_label: buttonText,
        custom_map: {
          'custom_dimension_1': buttonLocation
        }
      });
    }

    // Генерируем session ID для отслеживания
    const sessionId = Math.random().toString(36).substring(2, 15) + 
                     Math.random().toString(36).substring(2, 15);

    // Отправляем данные в API для email уведомления
    const response = await fetch('/api/dikidi-click', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        buttonText,
        buttonLocation,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        sessionId,
      }),
    });

    if (!response.ok) {
      console.warn('Failed to track dikidi click:', response.statusText);
    }
  } catch (error) {
    console.error('Error tracking dikidi click:', error);
  }
};

// Создание ссылки на Дикиди с отслеживанием
export const createDikidiLink = (buttonText: string, buttonLocation: string) => {
  const dikidiUrl = "https://dikidi.net/1899279?p=3.pi-po-sm-ssm&o=1&m=4107990";
  
  return (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Отслеживаем клик
    trackDikidiClick(buttonText, buttonLocation);
    
    // Открываем Дикиди через небольшую задержку для отправки аналитики
    setTimeout(() => {
      window.open(dikidiUrl, '_blank', 'noopener,noreferrer');
    }, 100);
  };
};
