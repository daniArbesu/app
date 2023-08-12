/* eslint-disable @next/next/no-img-element */

const Footer = () => {
  return (
    <footer className=" flex flex-col mt-24 mb-5 mx-52 gap-12">
      <div className="flex gap-12">
        <div className="flex-1 flex flex-col gap-2 text-justify text-sm text-gray-400">
          <h3 className="text-lg font-medium text-gray-500">Categories</h3>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-justify text-sm text-gray-400">
          <h3 className="text-lg font-medium text-gray-500">Links</h3>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-justify text-sm text-gray-400">
          <h3 className="text-lg font-medium text-gray-500">About</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus exercitationem a, in
            ab cupiditate alias asperiores eveniet tempore, aliquid enim, quos maxime. Quos eius
            excepturi dolorum consequatur esse! Odit!
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-2 text-justify text-sm text-gray-400">
          <h3 className="text-lg font-medium text-gray-500">Contact</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet minus exercitationem a, in
            ab cupiditate alias asperiores eveniet tempore, aliquid enim, quos maxime. Quos eius
            excepturi dolorum consequatur esse! Odit!
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="text-blue-500 font-bold text-2xl">Danistore</span>
          <span className="text-sm text-gray-500">© Copyright 2023. All rights reserved</span>
        </div>
        <div>
          <img src="/images/paymentOptions.png" alt="Payment options" className="h-12 " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
