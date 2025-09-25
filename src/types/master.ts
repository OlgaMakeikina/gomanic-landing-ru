export interface MasterStatus {
  type: 'intern' | 'experienced' | 'model';
  label: string;
  promotion?: {
    text: string;
    isActive: boolean;
  };
}

export interface Review {
  id: string;
  clientName: string;
  rating: number;
  text: string;
  date: string;
  photo?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  isPromo: boolean;
}

export interface MasterConfig {
  subdomain: string;
  personal: {
    name: string;
    photo: string;
    status: MasterStatus;
    strongSide: {
      title: string;
      description: string;
    };
  };
  services: Service[];
  portfolio: {
    photos: string[];
    description?: string;
  };
  reviews: Review[];
  contacts: {
    phone: string;
    whatsapp: string;
    bookingUrl?: string;
    address: {
      full: string;
      city: string;
      metro?: string;
    };
  };
  seo: {
    h1: string;
    h2: string;
    title: string;
    description: string;
  };
  analytics: {
    gaId: string;
    pixelId: string;
    yandexMetrikaId?: string;
  };
}
