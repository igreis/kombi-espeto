import React from 'react';
import ButtonCardapio from './buttonCardapio'

interface CardProps {
  title: string;
  description: string;
  price: number;
  image: string;
}

const cardDestaque: React.FC<CardProps> = ({ title, description, price, image }) => {
  return (
    <div className="mx-auto max-w-[340px] w-full lg:max-w-full max-h-[325px] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
    data-aos="fade-up-right">
      <div className="sm:h-44 h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">R$ {price.toFixed(2)}</span>
          <ButtonCardapio
            variant="primary"
            size="sm"
          >
            Adicionar
          </ButtonCardapio>
        </div>
      </div>
    </div>
  );
};

export default cardDestaque;
