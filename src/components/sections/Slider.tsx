'use client';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons';
import { useState } from 'react';

const imgsrc = [
  {
    src: 'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Woman standing'
  },
  {
    src: 'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Woman with our clothes'
  },
  {
    src: 'https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Man with our clothing standing'
  }
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? imgsrc.length - 1 : (current) => current - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === imgsrc.length - 1 ? 0 : (current) => current + 1);
  };

  const moveSlides = ['', '-translate-x-[100vw]', '-translate-x-[200vw]'];

  return (
    <section className="h-[calc(100svh-80px)] w-screen relative overflow-hidden">
      <div
        className={`w-[300vw] flex h-full  ${moveSlides[currentSlide]} transition-all duration-1000`}
      >
        {imgsrc.map(({ src, alt }, index) => (
          <img src={src} alt={alt} key={index} className="w-screen h-full object-cover" />
        ))}
      </div>
      <div className="absolute left-0 right-0 m-auto w-fit flex bottom-24 gap-3">
        <div
          className="w-12 h-12 border-solid border-2 border-gray-300 flex items-center justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <ChevronLeftIcon />
        </div>
        <div
          className="w-12 h-12 border-solid border-2 border-gray-300 flex items-center justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <ChevronRightIcon />
        </div>
      </div>
    </section>
  );
};

export default Slider;
