'use client';

import { useEffect } from 'react';
import { useMasterAnalytics } from '@/hooks/useMasterAnalytics';

export default function DynamicSEO() {
  const { masterData } = useMasterAnalytics();

  useEffect(() => {
    if (masterData?.seo && typeof document !== 'undefined') {
      document.title = masterData.seo.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', masterData.seo.description);
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', masterData.seo.title);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', masterData.seo.description);
      }
    }
  }, [masterData]);

  return null;
}
