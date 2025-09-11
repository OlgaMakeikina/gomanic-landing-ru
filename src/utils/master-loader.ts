import { MasterConfig } from '@/types/master'

export function getCurrentMaster(): string | null {
  if (typeof window === 'undefined') return null
  
  const host = window.location.hostname
  const subdomain = host.split('.')[0]
  
  if (subdomain === 'gomanic' || subdomain === 'www' || subdomain === 'localhost') {
    return null
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
