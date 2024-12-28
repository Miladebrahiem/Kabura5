import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_INFORMATIEMENU } from '../../../../lib/queries';
import { convertWordPressPath } from '../../../../utils/wordpress';
import { Column } from './Column';

export const InformatieColumn: React.FC = () => {
  const { data, loading, error } = useQuery(GET_INFORMATIEMENU);

  if (loading) {
    return (
      <Column 
        title="Informatie" 
        bgColor="primary"
        items={[{ label: 'Menu laden...', href: '#' }]}
      />
    );
  }

  if (error) {
    console.error('Error loading Informatie menu:', error);
    return (
      <Column 
        title="Informatie" 
        bgColor="primary"
        items={[{ label: 'Menu niet beschikbaar', href: '#' }]}
      />
    );
  }

  const menuItems = data?.menu?.menuItems?.nodes?.map((item: any) => ({
    label: item.label,
    href: convertWordPressPath(item.url)
  })) || [];

  return (
    <Column 
      title="Informatie" 
      bgColor="primary"
      items={menuItems}
    />
  );
};