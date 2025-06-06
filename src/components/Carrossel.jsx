import React, { useState, useEffect } from 'react';

const images = [
  '/carrossel1.jpg',
  '/carrossel2.jpg',
  '/carrossel3.jpg',
  '/carrossel4.jpg',
  '/carrossel5.jpg',
  '/carrossel6.jpg',
  '/carrossel7.jpg',
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="w-full h-[1000px] overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[index]}
        alt={`Imagem ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
      />
    </div>
  );
}
