import React from 'react';
import { useForm } from 'react-hook-form';
import { Save, X } from 'lucide-react';
import { CategorySelect } from './form/CategorySelect';
import type { Dish } from '../../../types/dish';

interface DishFormProps {
  initialData?: Dish | null;
  onSubmit: (data: Omit<Dish, 'id'>) => Promise<void>;
  onCancel: () => void;
}

export const DishForm: React.FC<DishFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<Omit<Dish, 'id'>>({
    defaultValues: initialData || {
      name: '',
      description: '',
      price: 0,
      type: 'meat',
      category: '',
      subCategory: '',
      history: '',
      imageUrl: '',
      minPeople: 10
    }
  });

  const inputClasses = "mt-1 block w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-sm p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Naam</label>
          <input
            type="text"
            {...register('name', { required: 'Naam is verplicht' })}
            className={inputClasses}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <select
            {...register('type', { required: 'Type is verplicht' })}
            className={inputClasses}
          >
            <option value="meat">Vlees</option>
            <option value="vegetarian">Vegetarisch</option>
            <option value="vegan">Vegan</option>
            <option value="glutenfree">Glutenvrij</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Prijs per persoon</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">€</span>
            </div>
            <input
              type="number"
              step="0.01"
              {...register('price', { 
                required: 'Prijs is verplicht',
                min: { value: 0, message: 'Prijs moet positief zijn' }
              })}
              className={`${inputClasses} pl-7`}
            />
          </div>
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>

        {/* Minimum People */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Minimum aantal personen</label>
          <input
            type="number"
            {...register('minPeople', { 
              required: 'Minimum aantal personen is verplicht',
              min: { value: 1, message: 'Minimaal 1 persoon' }
            })}
            className={inputClasses}
          />
          {errors.minPeople && (
            <p className="mt-1 text-sm text-red-600">{errors.minPeople.message}</p>
          )}
        </div>

        {/* Category Selection */}
        <div className="md:col-span-2">
          <CategorySelect
            register={register}
            watch={watch}
            setValue={setValue}
            error={errors.category?.message}
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Beschrijving</label>
          <textarea
            {...register('description', { required: 'Beschrijving is verplicht' })}
            rows={3}
            className={inputClasses}
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>

        {/* History */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Geschiedenis</label>
          <textarea
            {...register('history')}
            rows={3}
            className={inputClasses}
            placeholder="Optioneel: Voeg historische context of interessante feiten toe over dit gerecht"
          />
        </div>

        {/* Image URL */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">Afbeelding URL</label>
          <input
            type="url"
            {...register('imageUrl')}
            className={inputClasses}
            placeholder="https://voorbeeld.com/afbeelding.jpg"
          />
          {errors.imageUrl && (
            <p className="mt-1 text-sm text-red-600">{errors.imageUrl.message}</p>
          )}
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
          Annuleren
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
        >
          <Save className="w-4 h-4 mr-2 inline" />
          Opslaan
        </button>
      </div>
    </form>
  );
};