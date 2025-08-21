export interface VIPPassData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceCategory: 'premium' | 'deluxe' | 'exclusive';
  validityDays: number;
}

export interface VIPPassResponse {
  success: boolean;
  passCode?: string;
  giftCardId?: string;
  bookingUrl?: string;
  expiryDate?: string;
  error?: string;
}

export interface PassValidationResult {
  isValid: boolean;
  isUsed: boolean;
  isExpired: boolean;
  remainingBalance?: number;
  serviceDetails?: {
    name: string;
    value: number;
    category: string;
  };
  error?: string;
}

export interface FreSHAGiftCardResponse {
  id: string;
  code: string;
  value: number;
  originalValue: number;
  redeemedValue: number;
  status: 'active' | 'redeemed' | 'expired' | 'cancelled';
  expiryDate: string;
  purchaseDate: string;
  activity: Array<{
    date: string;
    action: string;
    amount?: number;
  }>;
}