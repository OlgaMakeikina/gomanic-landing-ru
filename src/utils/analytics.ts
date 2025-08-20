declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
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