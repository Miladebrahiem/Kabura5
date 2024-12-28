import React from 'react';
import { useQuery } from '@apollo/client';
import { Column } from './Column';
import { convertWordPressPath } from '../../../../utils/wordpress';

interface DynamicColumnProps {
  title: string;
  bgColor: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  query: any;
}

export const DynamicColumn: React.FC<DynamicColumnProps> = ({ title, bgColor, query }) => {
  const { data, loading, error } = useQuery(query, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return <Column title={title} bgColor={bgColor} items={[]} />;
  }

  if (error) {
    console.error('Error loading menu:', error);
    return <Column title={title} bgColor={bgColor} items={[]} />;
  }

  const menuItems = data?.menu?.menuItems?.nodes?.map((item: any) => ({
    label: item.label,
    href: convertWordPressPath(item.url)
  })) || [];

  return (
    <Column 
      title={title} 
      bgColor={bgColor}
      items={menuItems}
    />
  );
};