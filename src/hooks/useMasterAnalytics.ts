'use client';

import { useState, useEffect } from 'react';
import { MasterConfig } from '@/types/master';
import { getCurrentMaster, loadMasterData } from '@/utils/master-loader';

export function useMasterAnalytics() {
  const [yandexMetrikaId, setYandexMetrikaId] = useState<string | null>(null);
  const [masterData, setMasterData] = useState<MasterConfig | null>(null);

  useEffect(() => {
    async function loadData() {
      const masterId = getCurrentMaster();
      if (masterId) {
        const data = await loadMasterData(masterId);
        if (data?.analytics?.yandexMetrikaId) {
          setYandexMetrikaId(data.analytics.yandexMetrikaId);
          setMasterData(data);
        }
      }
    }
    loadData();
  }, []);

  return { yandexMetrikaId, masterData };
}
