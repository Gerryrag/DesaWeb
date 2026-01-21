
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { UMKMProduct } from '../types';

interface Props {
  product: UMKMProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-3 left-3">
          <span className="bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
            {product.owner}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-1">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-bold text-lg">{product.price}</span>
          <button className="p-2.5 bg-gray-900 text-white rounded-lg hover:bg-black transition-colors">
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
