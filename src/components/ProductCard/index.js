
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onViewProduct, onAddToCart, onBuyOnRent }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewProduct={onViewProduct}
          onAddToCart={onAddToCart}
          onBuyOnRent={onBuyOnRent}
        />
      ))}
    </div>
  );
};

export default ProductList;
