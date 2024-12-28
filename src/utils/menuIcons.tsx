import React from 'react';
import { 
  Home,
  Utensils, 
  Users,
  Calendar,
  MessageCircle,
  type LucideIcon 
} from 'lucide-react';

interface MenuIcon {
  icon: LucideIcon;
}

const menuIcons: Record<string, MenuIcon> = {
  'home': { 
    icon: Home
  },
  'catering': { 
    icon: Utensils
  },
  'over-ons': { 
    icon: Users
  },
  'reserveren': { 
    icon: Calendar
  },
  'contact': { 
    icon: MessageCircle
  }
};

export const getMenuIcon = (path: string): MenuIcon | undefined => {
  const slug = path.split('/').filter(Boolean)[0];
  return menuIcons[slug];
};