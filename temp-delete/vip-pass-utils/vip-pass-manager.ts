import { VIPPassData, VIPPassResponse, PassValidationResult, FreSHAGiftCardResponse } from './types';

const FRESHA_API_BASE = 'https://api.fresha.com/v2';
const API_KEY = process.env.FRESHA_API_KEY;

const VIP_PASS_VALUES = {
  premium: 150,   // R$ 150
  deluxe: 250,    // R$ 250 
  exclusive: 400  // R$ 400
} as const;

const VIP_SERVICES = {
  premium: 'Manicure Premium + Pedicure',
  deluxe: 'Manicure Deluxe + Pedicure + Nail Art',
  exclusive: 'Full Gomanic Experience + Exclusive Design'
} as const;

export const createVIPPass = async (passData: VIPPassData): Promise<VIPPassResponse> => {
  if (!API_KEY) {
    return createFallbackVIPPass(passData);
  }

  try {
    const giftCardValue = VIP_PASS_VALUES[passData.serviceCategory];
    const serviceName = VIP_SERVICES[passData.serviceCategory];
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + passData.validityDays);

    const response = await fetch(`${FRESHA_API_BASE}/gift-cards`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: giftCardValue,
        expiryDate: expiryDate.toISOString(),
        customerEmail: passData.customerEmail,
        customerName: passData.customerName,
        customerPhone: passData.customerPhone,
        description: `VIP Pass ${passData.serviceCategory.toUpperCase()} - ${serviceName}`,
        isGift: false,
        restrictions: {
          singleUse: true,
          applicableServices: [serviceName],
          venue: 'gomanic-brasil'
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`FreSHA API error: ${response.status}`);
    }

    const giftCard = await response.json() as FreSHAGiftCardResponse;
    
    return {
      success: true,
      passCode: giftCard.code,
      giftCardId: giftCard.id,
      bookingUrl: generateBookingUrl(giftCard.code, passData.serviceCategory),
      expiryDate: giftCard.expiryDate
    };

  } catch (error) {
    console.error('VIP Pass creation error:', error);
    return createFallbackVIPPass(passData);
  }
};export const validateVIPPass = async (passCode: string): Promise<PassValidationResult> => {
  if (!API_KEY) {
    return { isValid: false, isUsed: false, isExpired: false, error: 'API not configured' };
  }

  try {
    const response = await fetch(`${FRESHA_API_BASE}/gift-cards/${passCode}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return { isValid: false, isUsed: false, isExpired: false, error: 'Pass not found' };
    }

    const giftCard = await response.json() as FreSHAGiftCardResponse;
    const now = new Date();
    const expiryDate = new Date(giftCard.expiryDate);
    
    return {
      isValid: giftCard.status === 'active',
      isUsed: giftCard.status === 'redeemed',
      isExpired: now > expiryDate || giftCard.status === 'expired',
      remainingBalance: giftCard.value - giftCard.redeemedValue,
      serviceDetails: {
        name: extractServiceFromDescription(giftCard),
        value: giftCard.originalValue,
        category: extractCategoryFromDescription(giftCard)
      }
    };

  } catch (error) {
    console.error('VIP Pass validation error:', error);
    return { isValid: false, isUsed: false, isExpired: false, error: 'Validation failed' };
  }
};

const generateBookingUrl = (passCode: string, category: string): string => {
  const baseUrl = 'https://www.fresha.com/a/gomanic-brasil';
  return `${baseUrl}?gift_card=${passCode}&service=${category}`;
};

const createFallbackVIPPass = async (passData: VIPPassData): Promise<VIPPassResponse> => {
  try {
    const response = await fetch('/api/vip-pass/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(passData),
    });

    if (!response.ok) {
      throw new Error('Fallback system failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fallback VIP Pass error:', error);
    return { success: false, error: 'All VIP Pass systems failed' };
  }
};const extractServiceFromDescription = (giftCard: FreSHAGiftCardResponse): string => {
  const description = giftCard.description || '';
  if (description.includes('PREMIUM')) return VIP_SERVICES.premium;
  if (description.includes('DELUXE')) return VIP_SERVICES.deluxe;
  if (description.includes('EXCLUSIVE')) return VIP_SERVICES.exclusive;
  return 'Unknown Service';
};

const extractCategoryFromDescription = (giftCard: FreSHAGiftCardResponse): string => {
  const description = giftCard.description || '';
  if (description.includes('PREMIUM')) return 'premium';
  if (description.includes('DELUXE')) return 'deluxe';
  if (description.includes('EXCLUSIVE')) return 'exclusive';
  return 'unknown';
};

export const revokeVIPPass = async (passCode: string): Promise<boolean> => {
  if (!API_KEY) return false;

  try {
    const response = await fetch(`${FRESHA_API_BASE}/gift-cards/${passCode}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: 'cancelled' }),
    });

    return response.ok;
  } catch (error) {
    console.error('VIP Pass revocation error:', error);
    return false;
  }
};

export const checkPassUsage = async (passCode: string): Promise<boolean> => {
  const validation = await validateVIPPass(passCode);
  return validation.isUsed || validation.isExpired;
};