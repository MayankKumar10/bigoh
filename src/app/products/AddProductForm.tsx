
// AddProductForm.tsx
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

interface NewProductData {
  title: string;
  price: number;
}

const createProduct = async (newProductData: NewProductData): Promise<any> => {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newProductData),
  });

  if (!response.ok) {
    throw new Error('Failed to create product');
  }

  return response.json();
};

const AddProductForm: React.FC = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(createProduct, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('products');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newProductData: NewProductData = {
      title: formData.get('title') as string,
      price: parseFloat(formData.get('price') as string),
    };

    console.log("newProductData",newProductData);
    
    mutate(newProductData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="font-bold">Product Title:</span>
        <input type="text" name="title" className="block w-full border-gray-300 rounded-md p-2" required />
      </label>
      <label className="block">
        <span className="font-bold">Price:</span>
        <input type="number" name="price" step="0.01" className="block w-full border-gray-300 rounded-md p-2" required />
      </label>
      <button type="submit" disabled={isLoading} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
        {isLoading ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  );
};

export default AddProductForm;
