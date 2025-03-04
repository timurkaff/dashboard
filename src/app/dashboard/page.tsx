'use client'
import { Dashboard } from './ui/Dashboard';
import { Products } from './ui/Products';
import { Favorites } from './ui/Favorites';
import { Inbox } from './ui/Inbox';
import { DefaultContent } from './ui/DefaultContent';

export function DashboardContent({ activeItem }: { activeItem: string }) {
  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Products':
        return <Products />;
      case 'Favorites':
        return <Favorites />;
      case 'Inbox':
        return <Inbox />;
      default:
        return <DefaultContent activeItem={activeItem} />;
    }
  };

  return <div className="container mx-auto px-8 pt-8">{renderContent()}</div>;
}