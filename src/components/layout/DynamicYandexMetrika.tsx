'use client';

import { useEffect } from 'react';
import { useMasterAnalytics } from '@/hooks/useMasterAnalytics';
import YandexMetrika from '@/components/layout/RootLayout/YandexMetrika';

export default function DynamicYandexMetrika() {
  const { yandexMetrikaId } = useMasterAnalytics();

  if (!yandexMetrikaId) {
    return null;
  }

  return <YandexMetrika counterId={yandexMetrikaId} />;
}
