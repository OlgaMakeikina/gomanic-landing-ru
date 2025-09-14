import { MasterConfig } from '@/types/master'

export function getCurrentMaster(): string | null {
  if (typeof window === 'undefined') return null
  
  const host = window.location.hostname
  const subdomain = host.split('.')[0]
  
  // Для основного домена gomanic.ru загружаем мастера по умолчанию
  if (subdomain === 'gomanic' || subdomain === 'www' || host === 'gomanic.ru') {
    return 'anastasia-moscow'
  }
  
  if (subdomain === 'localhost') {
    return 'anastasia-moscow'
  }
  
  return subdomain
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
