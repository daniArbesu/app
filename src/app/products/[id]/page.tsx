/* eslint-disable @next/next/no-img-element */
import { CartIcon, CompareIcon, FavoriteIcon } from '@/components/Icons';
import QuantitySelector from '@/components/ui/QuantitySelector';
import SingleProductImages from '@/components/ui/SingleProductImages';
import fetchAPI from '@/utils/fetchAPI';
import type { APIProductData } from '../../../../types';

interface Segment {
  params: { id: string };
}

const ItemProductPage = async ({ params }: Segment) => {
  const productId = params.id;
  const apiExtension = `/products/${productId}?populate=*`;

  const product: APIProductData = await fetchAPI(apiExtension);

  return (
    <main className="py-5 px-12 flex gap-12">
      <SingleProductImages product={product} />
      <section className="flex-1 flex flex-col gap-8">
        <h1>{product.attributes?.title}</h1>
        <span className="text-3xl text-blue-500 font-medium">${product.attributes?.price}</span>
        <p className="text-lg font-light">{product.attributes?.description}</p>
        <QuantitySelector />
        <button className="w-64 p-2 font-medium bg-blue-500 text-white flex items-center justify-center gap-5">
          <CartIcon />
          ADD TO CARD
        </button>
        <div className="flex gap-5">
          <div className="flex gap-2 text-blue-500 text-sm uppercase items-center cursor-pointer">
            <FavoriteIcon /> Add to wish list
          </div>
          <div className="flex gap-2 text-blue-500 text-sm uppercase items-center cursor-pointer">
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
