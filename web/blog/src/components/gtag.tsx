"use client";
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Gtag({ measurementId }: { measurementId?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId) return;
    if (typeof window === 'undefined') return;
    if (!(window as any).gtag) return;

    const page_path = pathname + (searchParams ? `?${searchParams.toString()}` : '');
    try {
      (window as any).gtag('event', 'page_view', {
        page_location: typeof window !== 'undefined' ? window.location.href : undefined,
        page_path,
        page_title: typeof document !== 'undefined' ? document.title : undefined,
      });
    } catch (e) {
      // ignore
    }
  }, [measurementId, pathname, searchParams]);

  return null;
}
