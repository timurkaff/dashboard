'use client'

import dynamic from 'next/dynamic';
import { Suspense, useState, useEffect } from 'react';

const Dashboard = dynamic(() => import('./ui/Dashboard/Dashboard').then(mod => ({ default: mod.Dashboard })), {
  ssr: false,
  loading: () => <div>Загрузка...</div>
});

export default function DashboardPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const drawerCheckbox = document.getElementById('my-drawer') as HTMLInputElement | null;
    
    const checkDrawerState = () => {
      if (drawerCheckbox) {
        setIsDrawerOpen(drawerCheckbox.checked);
      }
    };
    
    checkDrawerState();
    
    const observer = new MutationObserver(checkDrawerState);
    if (drawerCheckbox) {
      observer.observe(drawerCheckbox, { attributes: true });
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Dashboard isDrawerOpen={isDrawerOpen} />
      </Suspense>
    </div>
  );
}