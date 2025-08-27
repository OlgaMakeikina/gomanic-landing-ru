interface BookingData {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  date?: string;
  notes?: string;
}

interface FreSHAResponse {
  success: boolean;
  data?: any;
  error?: string;
}

const FRESHA_API_BASE = 'https://api.fresha.com/v2';
const API_KEY = process.env.FRESHA_API_KEY;

export const createBooking = async (bookingData: BookingData): Promise<FreSHAResponse> => {
  if (!API_KEY) {
    console.error('FRESHA_API_KEY not configured');
    return { success: false, error: 'API key missing' };
  }

  try {
    const response = await fetch(`${FRESHA_API_BASE}/appointments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer: {
          firstName: bookingData.name.split(' ')[0],
          lastName: bookingData.name.split(' ').slice(1).join(' ') || '',
          phone: bookingData.phone,
          email: bookingData.email,
        },
        service: bookingData.service || 'Manicure Gomanic',
        notes: bookingData.notes,
        requestedDate: bookingData.date,
      }),
    });

    if (!response.ok) {
      throw new Error(`FreSHA API error: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('FreSHA booking error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

export const createLead = async (leadData: BookingData): Promise<FreSHAResponse> => {
  if (!API_KEY) {
    return createFallbackLead(leadData);
  }

  try {
    const response = await fetch(`${FRESHA_API_BASE}/customers`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: leadData.name.split(' ')[0],
        lastName: leadData.name.split(' ').slice(1).join(' ') || '',
        phone: leadData.phone,
        email: leadData.email,
        notes: `Lead from Gomanic Landing: ${leadData.notes || ''}`,
      }),
    });

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error('FreSHA lead error:', error);
    return createFallbackLead(leadData);
  }
};

const createFallbackLead = async (leadData: BookingData): Promise<FreSHAResponse> => {
  try {
    const response = await fetch('/api/fallback-booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    });

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error) {
    console.error('Fallback lead error:', error);
    return { success: false, error: 'All booking methods failed' };
  }
};
