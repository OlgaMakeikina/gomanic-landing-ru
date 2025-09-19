import { MasterConfig } from '@/types/master'

export function getCurrentMaster(): string | null {
  if (typeof window === 'undefined') return null
  
  const host = window.location.hostname
  const subdomain = host.split('.')[0]
  
  // Для основного домена не загружаем данные мастера
  if (subdomain === 'gomanic' || subdomain === 'www' || host === 'gomanic.ru') {
    return null
  }
  
  // Для localhost загружаем данные Анастасии для тестирования
  if (subdomain === 'localhost') {
    return 'anastasia-ulianova'
  }
  
  // Маппинг поддоменов на мастеров
  const masterMapping: { [key: string]: string } = {
    'nastya6716': 'anastasia-ulianova'
  }
  
  return masterMapping[subdomain] || subdomain
}

export async function loadMasterData(masterId: string): Promise<MasterConfig | null> {
  try {
    const response = await fetch(`/api/masters/${masterId}`)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error('Error loading master data:', error)
    return null
  }
}
