/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const CategoriesSection = () => {
  return (
    <section className="flex h-[80svh] gap-3 m-3">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="sales categorie"
            className="w-full h-full object-cover"
          />
          <Link
            href={'/products/1'}
            className="absolute min-w-[100] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto w-fit bg-white uppercase flex items-center content-center font-medium"
          >
            Sale
          </Link>
        </div>
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          {' '}
          <img
            src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="categorie"
            className="w-full h-full object-cover"
          />
          <Link
            href={'/products/1'}
            className="absolute min-w-[100] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto w-fit bg-white uppercase flex items-center content-center font-medium"
          >
            Women
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          {' '}
          <img
            src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="categorie"
            className="w-full h-full object-cover"
          />
          <Link
            href={'/products/1'}
            className="absolute min-w-[100] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto w-fit bg-white uppercase flex items-center content-center font-medium"
          >
            New Season
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3 flex-[2]">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 flex gap-3 relative overflow-hidden">
              {' '}
              <img
                src="https://images.unsplash.com/photo-1557684387-08927d28c72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                alt="categorie"
                className="w-full h-full object-cover"
              />
              <Link
                href={'/products/1'}
                className="absolute min-w-[100] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto w-fit bg-white uppercase flex items-center content-center font-medium"
              >
                Men
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex-1 flex gap-3 relative overflow-hidden">
              {' '}
              <img
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                alt="categorie"
                className="w-full h-full object-cover"
              />
              <Link
                href={'/products/1'}
                className="absolute min-w-[100] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto w-fit bg-white uppercase flex items-center content-center font-medium"
              >
                Accesories
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          {' '}
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
            alt="categorie"
            className="w-full h-full object-cover"
          />
          <Link
            href={'/products/1'}
            className="absolute min-w-[100] h-12 p-2 top-0 bottom-0 left-0 right-0 m-auto w-fit bg-white uppercase flex items-center content-center font-medium"
          >
            Shoes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
