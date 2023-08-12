/* eslint-disable @next/next/no-img-element */
import FilterProduct from '@/components/FilterProduct';
import ListProducts from '@/components/ListProducts';

const ProductsPage = () => {
  return (
    <main>
      <FilterProduct />
      <section>
        <img
          className=""
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Categories Image"
        />
        <ListProducts />
      </section>
    </main>
  );
};

export default ProductsPage;
