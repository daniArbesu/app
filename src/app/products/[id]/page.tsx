/* eslint-disable @next/next/no-img-element */
'use client';
import { CartIcon, CompareIcon, FavoriteIcon } from '@/components/Icons';
import { useState } from 'react';

const mockImages = [
  'https://images.unsplash.com/photo-1689858266753-937dd7c52986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  'https://images.unsplash.com/photo-1689858266569-77430f81a563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
];

const ItemProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="py-5 px-12 flex gap-12">
      <section className="flex-1 flex gap-5">
        <div className="flex-1 flex flex-col gap-3">
          {mockImages.map((src, index) => (
            <img
              src={src}
              alt="product image"
              key={index}
              className="w-full h-36 object-cover cursor-pointer"
              onClick={() => {
                setSelectedImage(index);
              }}
            />
          ))}
        </div>
        <div className="flex-[5]">
          <img
            src={mockImages[selectedImage]}
            className="w-full max-h-[800] object-cover"
            alt="product image"
          />
        </div>
      </section>
      <section className="flex-1 flex flex-col gap-8">
        <h1>Black Surfer T-Shirt</h1>
        <span className="text-3xl text-blue-500 font-medium">$199</span>
        <p className="text-lg font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere culpa? Eius
          eos repudiandae optio quaerat libero officiis nulla praesentium dolores quia perspiciatis,
          voluptatum adipisci vitae fugit, ea voluptatibus officia?
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
            }}
            disabled={quantity === 1}
            className="w-12 h-12 flex items-center justify-center bg-gray-200 disabled:opacity-25"
          >
            -
          </button>
          {quantity}
          <button
            onClick={() => {
              setQuantity((prevQuantity) => prevQuantity + 1);
            }}
            className="w-12 h-12 flex items-center justify-center bg-gray-200 disabled:opacity-25"
          >
            +
          </button>
        </div>
        <button className="w-64 p-2 font-medium bg-blue-500 text-white flex items-center justify-center gap-5">
          <CartIcon />
          ADD TO CARD
        </button>
        <div className="flex gap-5">
          <div className="flex gap-2 text-blue-500 text-sm uppercase items-center">
            <FavoriteIcon /> Add to wish list
          </div>
          <div className="flex gap-2 text-blue-500 text-sm uppercase items-center">
            <CompareIcon /> Add to compare
          </div>
        </div>
        <div className="flex flex-col gap-2 text-gray-500 text-sm mt-7">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tags: T-shirt, Women, Top</span>
        </div>
        <hr className=" border-gray-100 border" />
        <div className="flex flex-col gap-2 text-gray-500 text-sm mt-7">
          <span>DESCRIPTION</span>
          <hr className="w-52 border-gray-100 border" />
          <span>ADDITIONAL INFORMATION</span>
          <hr className="w-52 border-gray-100 border" />
          <span>FAQ</span>
        </div>
      </section>
    </main>
  );
};

export default ItemProductPage;
