import React from 'react';
import { ProductCard } from './ProductCard';
import type { WooProduct } from '../../../types/woocommerce';

interface ProductGridProps {
  products: WooProduct[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);