import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { AdminLayout } from '../components/admin/layout/AdminLayout';
import { AdminTabs } from '../components/admin/layout/AdminTabs';
import { DishForm } from '../components/admin/dishes/DishForm';
import { DishTable } from '../components/admin/dishes/DishTable';
import { PackageForm } from '../components/admin/packages/PackageForm';
import { PackageTable } from '../components/admin/packages/PackageTable';
import { FormSubmissionsTable } from '../components/admin/forms/FormSubmissionsTable';
import { CallbackRequestsTable } from '../components/admin/forms/CallbackRequestsTable';
import { useBuffetItems } from '../hooks/useBuffetItems';
import { usePackages } from '../hooks/usePackages';
import { useFormSubmissions } from '../hooks/useFormSubmissions';
import { useCallbackRequests } from '../hooks/useCallbackRequests';
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';
import type { Dish } from '../types/dish';
import type { BuffetPackage } from '../types/package';

export const AdminBuffetPage: React.FC = () => {
  const { user, loading: authLoading } = useSupabaseAuth();
  const { dishes, loading: dishesLoading, error: dishesError, addDish, editDish, removeDish } = useBuffetItems();
  const { packages, loading: packagesLoading, error: packagesError, addPackage, editPackage, removePackage } = usePackages();
  const { submissions, loading: submissionsLoading } = useFormSubmissions();
  const { callbacks, loading: callbacksLoading } = useCallbackRequests();
  
  const [activeTab, setActiveTab] = useState<'dishes' | 'packages' | 'forms' | 'callbacks'>('dishes');
  const [editingDish, setEditingDish] = useState<Dish | null>(null);
  const [editingPackage, setEditingPackage] = useState<BuffetPackage | null>(null);
  const [showDishForm, setShowDishForm] = useState(false);
  const [showPackageForm, setShowPackageForm] = useState(false);

  if (authLoading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/admin/login" replace />;

  const loading = dishesLoading || packagesLoading || submissionsLoading || callbacksLoading;
  const error = dishesError || packagesError;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const renderContent = () => {
    switch (activeTab) {
      case 'dishes':
        return (
          <div className="space-y-6">
            {/* Add Dish Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowDishForm(true)}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Add Dish</span>
              </button>
            </div>

            {/* Dish Form */}
            {showDishForm && (
              <DishForm
                initialData={editingDish}
                onSubmit={async (data) => {
                  try {
                    if (editingDish) {
                      await editDish(editingDish.id, data);
                    } else {
                      await addDish(data);
                    }
                    setEditingDish(null);
                    setShowDishForm(false);
                  } catch (err) {
                    console.error('Error saving dish:', err);
                    alert('Error saving dish. Please try again.');
                  }
                }}
                onCancel={() => {
                  setEditingDish(null);
                  setShowDishForm(false);
                }}
              />
            )}

            {/* Dish Table */}
            <DishTable
              dishes={dishes}
              onEdit={(dish) => {
                setEditingDish(dish);
                setShowDishForm(true);
              }}
              onDelete={removeDish}
            />
          </div>
        );

      case 'packages':
        return (
          <div className="space-y-6">
            {/* Add Package Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setShowPackageForm(true)}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-5 h-5" />
                <span>Add Package</span>
              </button>
            </div>

            {/* Package Form */}
            {showPackageForm && (
              <PackageForm
                initialData={editingPackage}
                availableDishes={dishes}
                onSubmit={async (data) => {
                  try {
                    if (editingPackage) {
                      await editPackage(editingPackage.id, data);
                    } else {
                      await addPackage(data);
                    }
                    setEditingPackage(null);
                    setShowPackageForm(false);
                  } catch (err) {
                    console.error('Error saving package:', err);
                    alert('Error saving package. Please try again.');
                  }
                }}
                onCancel={() => {
                  setEditingPackage(null);
                  setShowPackageForm(false);
                }}
              />
            )}

            {/* Package Table */}
            <PackageTable
              packages={packages}
              onEdit={(pkg) => {
                setEditingPackage(pkg);
                setShowPackageForm(true);
              }}
              onDelete={removePackage}
            />
          </div>
        );

      case 'forms':
        return <FormSubmissionsTable submissions={submissions} />;

      case 'callbacks':
        return <CallbackRequestsTable callbacks={callbacks} />;

      default:
        return null;
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <AdminTabs activeTab={activeTab} onTabChange={setActiveTab} />
        {renderContent()}
      </div>
    </AdminLayout>
  );
};