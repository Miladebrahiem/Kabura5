import React from 'react';
import { useForm } from 'react-hook-form';
import { Save, X } from 'lucide-react';
import type { BuffetPackage } from '../../../types/package';
import type { Dish } from '../../../types/dish';

interface PackageFormProps {
  initialData?: BuffetPackage | null;
  availableDishes: Dish[];
  onSubmit: (data: Omit<BuffetPackage, 'id'>) => void;
  onCancel: () => void;
}

export const PackageForm: React.FC<PackageFormProps> = ({
  initialData,
  availableDishes,
  onSubmit,
  onCancel
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialData || {
      name: '',
      description: '',
      price: 0,
      minPeople: 10,
      category: '',
      dishIds: []
    }
  });

  const inputClasses = "mt-1 block w-full rounded-md border-2 border-secondary shadow-sm focus:border-primary focus:ring focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Package Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className={inputClasses}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            {...register('category', { required: 'Category is required' })}
            className={inputClasses}
          />
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description')}
            rows={3}
            className={inputClasses}
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Price per Person</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">€</span>
            </div>
            <input
              type="number"
              step="0.01"
              {...register('price', { 
                required: 'Price is required',
                min: { value: 0, message: 'Price must be positive' }
              })}
              className={`pl-7 ${inputClasses}`}
            />
          </div>
        </div>

        {/* Minimum People */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum People</label>
          <input
            type="number"
            {...register('minPeople', { 
              required: 'Minimum people is required',
              min: { value: 1, message: 'Minimum must be at least 1' }
            })}
            className={inputClasses}
          />
        </div>

        {/* Image URL */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            {...register('imageUrl')}
            className={inputClasses}
          />
        </div>

        {/* Dishes */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Dishes</label>
          <div className="space-y-2 max-h-60 overflow-y-auto p-4 border-2 border-secondary rounded-lg">
            {availableDishes.map(dish => (
              <label key={dish.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  {...register('dishIds')}
                  value={dish.id}
                  className="rounded border-secondary text-primary focus:ring-primary"
                />
                <span>{dish.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <X className="w-4 h-4 mr-2 inline" />
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
        >
          <Save className="w-4 h-4 mr-2 inline" />
          Save Package
        </button>
      </div>
    </form>
  );
};