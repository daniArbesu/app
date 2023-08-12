/* eslint-disable @next/next/no-img-element */
import { DeleteIcon } from './Icons';

const mockData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1593164842264-854604db2260?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    img2: 'https://images.unsplash.com/photo-1593164842249-d74fc06dae05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    title: 'Comfortable Yoga Pants',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis laboriosam, sapiente minus, in omnis consequuntur earum adipisci voluptate laudantium illo necessitatibus deserunt quia! Modi deserunt ad qui facere eaque?',
    isNew: true,
    oldPrice: 19,
    price: 12
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1619785292559-a15caa28bde6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    img2: 'https://images.unsplash.com/photo-1619785292489-043ea2cc700c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    title: 'Purple Jacket',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis laboriosam, sapiente minus, in omnis consequuntur earum adipisci voluptate laudantium illo necessitatibus deserunt quia! Modi deserunt ad qui facere eaque?',
    isNew: true,
    oldPrice: 19,
    price: 12
  }
];

const CartMenu = () => {
  return (
    <section className="absolute top-[var(--navbar-height)] right-5 z-40 bg-white p-5 shadow-md flex flex-col gap-7 max-w-lg">
      <h3 className="text-gray-500 font-normal text-2xl">Products in your cart</h3>
      {mockData?.map((item) => (
        <article key={item.id} className="flex items-center gap-5">
          <img src={item.img} className="w-20 h-24 object-cover" alt="Product image" />
          <div>
            <h4 className="text-lg font-medium">{item.title}</h4>
            <p className="text-gray-500 mb-5 text-sm">{item.description.substring(0, 100)}</p>
            <div className="text-blue-500">1 x ${item.price}</div>
          </div>
          <DeleteIcon />
        </article>
      ))}
      <div className="flex justify-between text-lg font-medium">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className="w-64 p-2 font-medium bg-blue-500 text-white flex items-center justify-center gap-5">
        Proceed to checkout
      </button>
      <span className="text-red-500 text-xs cursor-pointer">Reset Card</span>
    </section>
  );
};

export default CartMenu;
