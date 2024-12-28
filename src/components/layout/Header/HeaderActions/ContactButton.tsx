import React from 'react';
import { Link } from 'react-router-dom';

export const ContactButton: React.FC = () => {
  return (
    <Link
      to="/contacteren"
      className="flex items-center gap-2 bg-tertiary text-white px-4 sm:px-6 py-2.5 rounded-lg hover:bg-opacity-90 transition-all group w-full md:w-auto justify-center"
    >
      <div className="relative w-5 sm:w-6 h-5 sm:h-6 group-hover:rotate-12 transition-transform duration-300">
        <img
          src="https://miladjosofe44.sg-host.com//wp-content/uploads/2024/10/FavIcon-04.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <span className="font-medium text-sm sm:text-base">Contact</span>
    </Link>
  );
};