'use client';
import Link from 'next/link';
import { CartIcon, ChevronDownIcon, FavoriteIcon, ProfileIcon, SearchIcon } from './Icons';
import { useState } from 'react';
import CartMenu from './CartMenu';
import { useAppSelector } from '@/hooks/store';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const products = useAppSelector((state) => state.cart.products);

  return (
    <section className="h-20 ">
      <div className="flex items-center justify-between py-2 px-7 h-full text-lg">
        <div className="flex gap-6">
          <div className="flex items-center">
            <span>🇪🇸</span>
            <ChevronDownIcon />
          </div>
          <div className="flex items-center">
            <span>USD</span>
            <ChevronDownIcon />
          </div>
          <div>
            <Link href={'/products/category/1'}>Women</Link>
          </div>
          <div>
            <Link href={'/products/category/2'}>Men</Link>
          </div>
          <div>
            <Link href={'/products/category/7'}>Children</Link>
          </div>
        </div>
        <div className="text-3xl">
          <Link href={'/'}>Dani Store</Link>
        </div>
        <div className="flex gap-6">
          <div>
            <Link href={'/'}>Homepage</Link>
          </div>{' '}
          <div>
            <Link href={'/'}>About</Link>
          </div>{' '}
          <div>
            <Link href={'/'}>Contact</Link>
          </div>
          <div>
            <Link href={'/'}>Store</Link>
          </div>
          <div className="flex gap-4 text-gray-500 cursor-pointer">
            <SearchIcon />
            <ProfileIcon />
            <FavoriteIcon />
            <div
              className="relative"
              onClick={() => {
                setisMenuOpen(!isMenuOpen);
              }}
            >
              <CartIcon />
              <span className="text-xs w-5 h-5 rounded-full bg-blue-500 text-white absolute -right-2 -top-2 flex items-center justify-center">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && <CartMenu />}
    </section>
  );
};

export default Navbar;
