import React from 'react';
import { usePackages } from '../../../hooks/usePackages';
import { PackageCard } from './PackageCard';

interface StandardPackagesProps {
  peopleCount: number;
}

const DEFAULT_PACKAGES = [
  {
    id: 'basic',
    name: 'Basis Buffet',
    description: 'Een heerlijke selectie van onze meest populaire gerechten',
    price: 24.95,
    minPeople: 10,
    category: 'Standaard Buffetten',
    dietaryTypes: ['meat', 'vegetarian', 'vegan'],
    dishIds: [],
    imageUrl: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&q=80'
  },
  {
    id: 'premium',
    name: 'Premium Buffet',
    description: 'Een uitgebreide selectie met onze meest exclusieve gerechten',
    price: 34.95,
    minPeople: 15,
    category: 'Standaard Buffetten',
    dietaryTypes: ['meat', 'vegetarian', 'vegan', 'glutenfree'],
    dishIds: [],
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80'
  },
  {
    id: 'vegan',
    name: 'Vegan Buffet',
    description: '100% plantaardig buffet met authentieke Afghaanse smaken',
    price: 29.95,
    minPeople: 10,
    category: 'Speciale Buffetten',
    dietaryTypes: ['vegan', 'glutenfree'],
    dishIds: [],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80'
  }
];

export const StandardPackages: React.FC<StandardPackagesProps> = ({ peopleCount }) => {
  const { packages: dbPackages, loading, error } = usePackages();

  // Use default packages if loading or error, otherwise use packages from database
  const packages = loading || error ? DEFAULT_PACKAGES : dbPackages.length > 0 ? dbPackages : DEFAULT_PACKAGES;

  // Group packages by category
  const groupedPackages = packages.reduce((acc, pkg) => {
    if (!acc[pkg.category]) {
      acc[pkg.category] = [];
    }
    acc[pkg.category].push(pkg);
    return acc;
  }, {} as Record<string, typeof packages>);

  return (
    <div className="space-y-12">
      {Object.entries(groupedPackages).map(([category, packages]) => (
        <div key={category} className="space-y-6">
          <h2 className="text-2xl font-bold text-secondary">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packages.map(pkg => (
              <PackageCard 
                key={pkg.id} 
                package={pkg} 
                peopleCount={peopleCount}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};