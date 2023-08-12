'use client';
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { type APIProductData } from '../../../types';

interface Props {
  product: APIProductData;
}

const SingleProductImages: React.FC<Props> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    (process.env.STRAPI_IMAGES_URL as string) + product.attributes?.img?.data.attributes.url,
    (process.env.STRAPI_IMAGES_URL as string) + product.attributes?.img2?.data.attributes.url
  ];

  console.log(images[selectedImage]);

  return (
    <section className="flex-1 flex gap-5">
      <div className="flex-1 flex flex-col gap-3">
        <img
          src={images[0]}
          alt="product image"
          className="w-full h-36 object-cover cursor-pointer"
          onClick={() => {
            setSelectedImage(0);
          }}
        />
        <img
          src={images[1]}
          alt="product image"
          className="w-full h-36 object-cover cursor-pointer"
          onClick={() => {
            setSelectedImage(1);
          }}
        />
      </div>
      <div className="flex-[5]">
        <img
          src={images[selectedImage]}
          className="w-full max-h-[800] object-cover"
          alt="product image"
        />
      </div>
    </section>
  );
};

export default SingleProductImages;
