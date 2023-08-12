'use client';
import { useAppDispatch, useAppSelector } from '@/hooks/store';
/* eslint-disable @next/next/no-img-element */
import { DeleteIcon } from './Icons';
import { removeProduct, resetCart } from '@/store/cart/cartReducer';

const CartMenu = () => {
  const products = useAppSelector((state) => state.cart.products);
  const dispatch = useAppDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => (total += product.quantity * product.price));
    return total.toFixed(2);
  };

  return (
    <section className="absolute top-[var(--navbar-height)] right-5 z-40 bg-white p-5 shadow-md flex flex-col gap-7 max-w-lg">
      <h3 className="text-gray-500 font-normal text-2xl">Products in your cart</h3>
      {products?.map((product) => (
        <article key={product.id} className="flex items-center gap-5">
          <img
            src={(process.env.NEXT_PUBLIC_STRAPI_IMAGES_URL as string) + product.img}
            className="w-20 h-24 object-cover"
            alt="Product image"
          />
          <div>
            <h4 className="text-lg font-medium">{product.title}</h4>
            <p className="text-gray-500 mb-5 text-sm">{product.description.substring(0, 100)}</p>
            <div className="text-blue-500">
              {product.quantity} x ${product.price}
            </div>
          </div>
          <button onClick={() => dispatch(removeProduct(product.id))}>
            <DeleteIcon />
          </button>
        </article>
      ))}
      <div className="flex justify-between text-lg font-medium">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className="w-64 p-2 font-medium bg-blue-500 text-white flex items-center justify-center gap-5">
        Proceed to checkout
      </button>
      <span className="text-red-500 text-xs cursor-pointer" onClick={() => dispatch(resetCart())}>
        Reset Card
      </span>
    </section>
  );
};

export default CartMenu;
