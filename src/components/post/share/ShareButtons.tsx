import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-[#1877F2] hover:bg-[#1877F2]/90'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-[#0A66C2] hover:bg-[#0A66C2]/90'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Link gekopieerd!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center bg-gray-100 w-10 h-10 rounded-lg">
          <Share2 className="w-5 h-5 text-gray-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 leading-none">Deel dit artikel</h3>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center h-10 px-4 rounded-lg text-white transition-colors ${link.color}`}
            aria-label={`Deel op ${link.name}`}
          >
            <link.icon className="w-4 h-4" />
            <span className="ml-2 text-sm font-medium leading-none">{link.name}</span>
          </a>
        ))}
        
        <button
          onClick={copyToClipboard}
          className="inline-flex items-center h-10 px-4 rounded-lg text-white bg-gray-600 hover:bg-gray-700 transition-colors"
        >
          <Link2 className="w-4 h-4" />
          <span className="ml-2 text-sm font-medium leading-none">Kopieer link</span>
        </button>
      </div>
    </div>
  );
};