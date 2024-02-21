'use client'

// AllProducts.tsx
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductsComponent from './ProductsComponent';
import AddProductForm from './AddProductForm';
import Navbar from '../Navbar';

const queryClient = new QueryClient();

export default function AllProducts(){
  return (
    <>
    <Navbar />

    <QueryClientProvider client={queryClient}>
      <div className="grid grid-cols-2 gap-8 p-8">
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">All Products</h2>
          <ProductsComponent />
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
          <AddProductForm />
        </div>
      </div>
    </QueryClientProvider>
    </>
    
  );
}

