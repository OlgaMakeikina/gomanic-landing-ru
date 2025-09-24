declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    fbq?: (
      command: string,
      eventName: string,
      params?: Record<string, any>
    ) => void;
    ym?: (
      id: number,
      method: string,
      ...params: any[]
    ) => void;
  }
}

export function trackPageView(url: string): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    });
  }
}

export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
): void {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    
    if (window.fbq) {
      window.fbq('track', action, {
        category,
        label,
        value,
      });
    }

    if (window.ym) {
      const yandexId = parseInt(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || '0');
      if (yandexId) {
        window.ym(yandexId, 'reachGoal', action, { category, label, value });
      }
    }
  }
}

export function trackVIPButtonView(): void {
  trackEvent('vip_button_view', 'VIP', 'Button Impression');
}

export function trackVIPButtonClick(): void {
  trackEvent('vip_button_click', 'VIP', 'CTA Click');
}

export function trackSlotsUpdate(remainingSlots: number): void {
  trackEvent('slots_updated', 'VIP', `Slots: ${remainingSlots}`, remainingSlots);
}

export {};
