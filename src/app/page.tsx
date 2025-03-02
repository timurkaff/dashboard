'use client'
import SidebarMenu from '@/shared/Sidebar_menu';
import { DashboardContent } from './dashboard/page';
import { useState } from 'react';

export default function Home() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  return (
    <div>
      <SidebarMenu activeItem={activeItem} setActiveItem={setActiveItem} />
      <main>
        <DashboardContent activeItem={activeItem} />
      </main>
    </div>
  );
}