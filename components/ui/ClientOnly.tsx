'use client';

import { useEffect, useState, type ReactNode } from 'react';

/**
 * Renders children only after client-side hydration is complete.
 * Prevents hydration mismatches caused by browser extensions (e.g. bis_skin_checked)
 * that inject attributes into the DOM before React can hydrate.
 */
export default function ClientOnly({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}
