import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Logo: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <Link to="/home" onClick={handleLogoClick} className="block">
      <img 
        src="https://miladjosofe44.sg-host.com/wp-content/uploads/2024/10/Kabura-catering-logo.jpg"
        alt="Kabura Catering"
        className="h-[3.1rem] sm:h-[3.85rem] lg:h-[4.62rem] w-auto"
      />
    </Link>
  );
};