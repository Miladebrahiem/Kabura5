import React from 'react';
import { DishList } from './dishes/DishList';
import { AdminHeader } from './common/AdminHeader';

export const DishesAdmin: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <AdminHeader title="Manage Dishes" />
      <DishList />
    </div>
  );
};