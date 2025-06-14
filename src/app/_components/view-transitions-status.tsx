'use client';

import { useEffect, useState } from 'react';

export function ViewTransitionsStatus() {
  const [hasViewTransitions, setHasViewTransitions] = useState<boolean | null>(null);

  useEffect(() => {
    setHasViewTransitions('startViewTransition' in document);
  }, []);

  if (hasViewTransitions === null) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {hasViewTransitions ? (
        <div className="bg-green-100 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg px-3 py-2 text-sm text-green-800 dark:text-green-200">
          ✨ View Transitions Active
        </div>
      ) : (
        <div className="bg-yellow-100 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg px-3 py-2 text-sm text-yellow-800 dark:text-yellow-200">
          ⚠️ View Transitions not supported
        </div>
      )}
    </div>
  );
}
