import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_PAGE = gql`
  query GetPage($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      content
    }
  }
`;

export const WordPressPage: React.FC = () => {
  const { uri } = useParams();
  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: { uri: uri || '' }
  });

  if (loading) return <div className="container mx-auto px-4 py-8">Loading...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error loading page</div>;

  const page = data?.page;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{page?.title}</h1>
      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: page?.content || '' }}
      />
    </div>
  );
};