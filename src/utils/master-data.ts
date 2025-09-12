import { MasterConfig } from '@/types/master'

const DEFAULT_MASTER_ID = 'anastasia-moscow'

export async function getMasterData(): Promise<MasterConfig | null> {
  try {
    const response = await fetch(`/api/masters/${DEFAULT_MASTER_ID}`)
    if (!response.ok) return null
    return await response.json()
  } catch (error) {
    console.error('Error loading master data:', error)
    return null
  }
}

export function getMasterDataSync(): MasterConfig | null {
  try {
    return require('@/data/masters/anastasia-moscow.json')
  } catch (error) {
    console.error('Error loading master data sync:', error)
    return null
  }
}
