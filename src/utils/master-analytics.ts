import { getCurrentMaster, loadMasterData } from '@/utils/master-loader';

let masterYandexId: string | null = null;

export async function initMasterAnalytics() {
  const masterId = getCurrentMaster();
  if (masterId) {
    const masterData = await loadMasterData(masterId);
    masterYandexId = masterData?.analytics?.yandexMetrikaId || null;
  }
}

export const trackMasterFormSubmission = (formType: string): void => {
  if (masterYandexId && typeof window !== 'undefined' && window.ym) {
    window.ym(masterYandexId, 'reachGoal', 'form_submit', { form_type: formType });
  }
};

export const trackMasterButtonClick = (buttonName: string): void => {
  if (masterYandexId && typeof window !== 'undefined' && window.ym) {
    window.ym(masterYandexId, 'reachGoal', 'button_click', { button_name: buttonName });
  }
};

export const trackMasterBooking = (serviceId: string): void => {
  if (masterYandexId && typeof window !== 'undefined' && window.ym) {
    window.ym(masterYandexId, 'reachGoal', 'booking_started', { service_id: serviceId });
  }
};

export const trackMasterContact = (contactType: string): void => {
  if (masterYandexId && typeof window !== 'undefined' && window.ym) {
    window.ym(masterYandexId, 'reachGoal', 'contact_click', { contact_type: contactType });
  }
};
