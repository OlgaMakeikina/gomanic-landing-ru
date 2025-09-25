'use client'

import { MasterConfig } from '@/types/master'
import { getCurrentMaster, loadMasterData } from '@/utils/master-loader'
import { useEffect, useState } from 'react'

export function useMasterData() {
  const [masterData, setMasterData] = useState<MasterConfig | null>(null)

  useEffect(() => {
    async function loadData() {
      const masterId = getCurrentMaster()
      if (masterId) {
        const data = await loadMasterData(masterId)
        setMasterData(data)
      }
    }
    loadData()
  }, [])

  return masterData
}
