import React from 'react';
import type { WooProduct } from '../../../types/woocommerce';

interface ProductCardProps {
  product: WooProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden">
    {product.image?.node && (
      <div className="aspect-video">
        <img
          src={product.image.node.sourceUrl}
          alt={product.image.node.altText || product.name}
          className="w-full h-full object-cover"
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
      <div 
        className="text-gray-600 mb-4"
        dangerouslySetInnerHTML={{ __html: product.shortDescription }}
      />
      <div className="flex items-center justify-between mt-4">
        <div className="text-xl font-bold text-primary">
          €{parseFloat(product.regularPrice).toFixed(2)}
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Meer informatie
        </button>
      </div>
    </div>
  </div>
);