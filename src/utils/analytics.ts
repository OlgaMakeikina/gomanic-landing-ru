declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    ym: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID || '';

export const pageview = (url: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const initGA = (): void => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
};

export const trackFormSubmission = (formType: string): void => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formType,
  });
};

export const trackButtonClick = (buttonName: string): void => {
  event({
    action: 'click',
    category: 'interaction',
    label: buttonName,
  });
};

export const trackPageView = (page: string): void => {
  event({
    action: 'page_view',
    category: 'navigation',
    label: page,
  });
};

export const ymEvent = (counterId: string, eventName: string, params?: any): void => {
  if (typeof window !== 'undefined' && window.ym && counterId) {
    window.ym(counterId, 'reachGoal', eventName, params);
  }
};

export const ymPageView = (counterId: string, url?: string): void => {
  if (typeof window !== 'undefined' && window.ym && counterId) {
    window.ym(counterId, 'hit', url || window.location.href);
  }
};

export const trackYandexFormSubmission = (counterId: string, formType: string): void => {
  ymEvent(counterId, 'form_submit', { form_type: formType });
};

export const trackYandexButtonClick = (counterId: string, buttonName: string): void => {
  ymEvent(counterId, 'button_click', { button_name: buttonName });
};
