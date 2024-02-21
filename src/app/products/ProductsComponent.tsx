// ProductsComponent.tsx
import React, { useState } from 'react';
import { useQuery } from 'react-query';

interface Product {
  id: number;
  title: string;
  price: number;
}

const fetchProducts = async (): Promise<{ products: Product[] }> => {
  const response = await fetch('https://dummyjson.com/products?limit=5&skip=96&select=title,price');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

const ProductsComponent: React.FC = () => {
  const { data, isLoading, isError } = useQuery<{ products: Product[] }>('products', fetchProducts);
  const [newProduct, setNewProduct] = useState<Product | null>(null); // State to hold the newly added product

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching products</div>;

  // Check if a new product has been added
  if (newProduct) {
    // Add the new product to the products list
    data!.products.unshift(newProduct);
    // Reset the newProduct state to null to avoid infinite re-renders
    setNewProduct(null);
  }

  return (
    <div>
      <ul className="space-y-2">
        {data!.products.map(product => (
          <li key={product.id} className="bg-white rounded-md p-4 shadow">
            <strong className="block">{product.title}</strong>
            <p className="text-green-500 font-bold">${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;
