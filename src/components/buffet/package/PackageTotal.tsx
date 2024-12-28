import React from 'react';

interface PackageTotalProps {
  total: number;
}

export const PackageTotal: React.FC<PackageTotalProps> = ({ total }) => (
  <div className="border-t pt-4">
    <div className="flex justify-between items-center font-bold">
      <span>Totaal</span>
      <span className="text-primary">€{total.toFixed(2)}</span>
    </div>
  </div>
);