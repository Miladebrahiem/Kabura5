import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { DishForm } from './DishForm';
import { DishTable } from './DishTable';
import { useBuffetItems } from '../../../hooks/useBuffetItems';
import type { Dish } from '../../../types/dish';

export const DishList: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingDish, setEditingDish] = useState<Dish | null>(null);
  const { dishes, loading, error, addDish, editDish, removeDish } = useBuffetItems();

  if (loading) return <div>Loading dishes...</div>;
  if (error) return <div>Error loading dishes: {error.message}</div>;

  return (
    <div className="space-y-6">
      {/* Add Dish Button */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Add Dish</span>
        </button>
      </div>

      {/* Dish Form */}
      {showForm && (
        <DishForm
          initialData={editingDish}
          onSubmit={async (data) => {
            try {
              if (editingDish) {
                await editDish(editingDish.id, data);
              } else {
                await addDish(data);
              }
              setShowForm(false);
              setEditingDish(null);
            } catch (error) {
              console.error('Error saving dish:', error);
              alert('Error saving dish. Please try again.');
            }
          }}
          onCancel={() => {
            setShowForm(false);
            setEditingDish(null);
          }}
        />
      )}

      {/* Dish Table */}
      <DishTable
        dishes={dishes}
        onEdit={(dish) => {
          setEditingDish(dish);
          setShowForm(true);
        }}
        onDelete={removeDish}
      />
    </div>
  );
};