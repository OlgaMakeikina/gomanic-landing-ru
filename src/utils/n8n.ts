interface N8NSubmissionData {
  name: string;
  phone: string;
  email: string;
}

interface N8NResponse {
  success: boolean;
  data?: any;
  error?: string;
}

// TODO: Replace with actual n8n webhook URL when provided
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL || '';

export const submitToN8N = async (data: N8NSubmissionData): Promise<N8NResponse> => {
  if (!N8N_WEBHOOK_URL) {
    console.error('N8N_WEBHOOK_URL not configured');
    return { 
      success: false, 
      error: 'N8N webhook URL not configured' 
    };
  }

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email,
        source: 'gomanic-landing-br',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`N8N API error: ${response.status}`);
    }

    const responseData = await response.json();
    return { success: true, data: responseData };
  } catch (error) {
    console.error('N8N submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

export default { submitToN8N };