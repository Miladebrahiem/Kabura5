import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';
import { MainNav } from './Navigation/MainNav';
import { HeaderActions } from './HeaderActions';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-primary">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-between h-[var(--header-height)]">
          <div className="flex items-center gap-4 lg:gap-8">
            <Logo />
            <MainNav />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <HeaderActions />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center gap-2 bg-secondary text-white px-4 py-2.5 rounded-lg"
            >
              <Menu className="w-5 h-5" />
              <span className="font-medium text-sm">Ontdek ons</span>
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  );
};