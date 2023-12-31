/* eslint-disable @next/next/no-img-element */
'use client';
import FilterProduct from '@/components/FilterProduct';
import ListProducts from '@/components/ListProducts';
import { useState } from 'react';

interface Segment {
  params: { id: string };
}

type SubcategoriesState = string[] | [];

const CategoryPage = ({ params }: Segment) => {
  const categoryId = params.id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [subcategories, setSubcategories] = useState<SubcategoriesState>([]);

  return (
    <main className="py-8 px-12 flex">
      <FilterProduct
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        setSort={setSort}
        categoryId={categoryId}
        subcategories={subcategories}
        setSubcategories={setSubcategories}
      />
      <section className="flex-[3] flex flex-col gap-12">
        <img
          className="w-full h-72 object-cover"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Categories Image"
        />
        <ListProducts
          categoryId={categoryId}
          maxPrice={maxPrice}
          sort={sort}
          subcategories={subcategories}
        />
      </section>
    </main>
  );
};

export default CategoryPage;
