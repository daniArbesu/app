import fetchAPI from '@/utils/fetchAPI';
import Card from './Card';

/* const mockData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    img2: 'https://images.unsplash.com/photo-1593164842249-d74fc06dae05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    title: 'Comfortable Yoga Pants',
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    img2: 'https://images.unsplash.com/photo-1619785292489-043ea2cc700c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    title: 'Purple Jacket',
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1563993297290-609c9406efcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    img2: 'https://images.unsplash.com/photo-1563992891888-3a441b92e7c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    title: 'White Crop Top',
    isNew: false,
    oldPrice: 19,
    price: 12
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1595570981046-dbbb4d2afe99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    img2: 'https://images.unsplash.com/photo-1595570980828-d93fc14df0a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
    title: 'Sunflowers Dress',
    isNew: false,
    oldPrice: 19,
    price: 12
  }
]; */

interface Props {
  categoryId: string;
  maxPrice: number;
  sort: string;
  subcategories: string[] | [];
}

const ListProducts: React.FC<Props> = async ({ categoryId, maxPrice, sort, subcategories }) => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const apiExtension = `/products?populate=*&[filters][categories][id]=${categoryId}${subcategories.map(
    (subcat) => `&[filters][subcategories][id]=${subcat}`
  )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;
  const products = await fetchAPI(apiExtension);

  return (
    <section className="flex justify-between flex-wrap gap-5">
      {products?.map((item: any) => <Card key={item.id} item={item} />)}
    </section>
  );
};

export default ListProducts;
