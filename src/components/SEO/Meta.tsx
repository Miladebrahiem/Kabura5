import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
}

export const Meta: React.FC<MetaProps> = ({
  title = 'Kabura - Authentiek Afghaanse Catering',
  description = 'Ontdek authentieke Afghaanse catering voor uw evenement. Professionele catering services voor bruiloften, bedrijfsevenementen en meer.',
  keywords = 'afghaanse catering, catering rotterdam, halal catering, bruiloft catering, bedrijfscatering',
  ogImage = 'https://miladjosofe44.sg-host.com/wp-content/uploads/2024/10/Kabura-catering-logo.jpg',
  ogUrl = 'https://kabura.nl',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Kabura" />
      <meta property="og:locale" content="nl_NL" />
      
      {/* Article Specific Tags */}
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Dutch" />
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
};