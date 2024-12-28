import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST, GET_POSTS } from '../lib/queries/posts';
import { Meta } from '../components/SEO/Meta';
import { PostHero } from '../components/post/hero/PostHero';
import { ShareButtons } from '../components/post/share/ShareButtons';
import { RelatedPosts } from '../components/post/related/RelatedPosts';
import { Sidebar } from '../components/knowledge/layout/Sidebar';

export const PostPage: React.FC = () => {
  const { slug } = useParams();
  const { data: postData, loading, error } = useQuery(GET_POST, {
    variables: { slug }
  });
  const { data: postsData } = useQuery(GET_POSTS);

  if (loading) return <div className="container mx-auto px-4 py-8">Laden...</div>;
  if (error) return <div className="container mx-auto px-4 py-8">Error loading post</div>;

  const post = postData?.post;
  if (!post) return <div className="container mx-auto px-4 py-8">Post not found</div>;

  const relatedPosts = postsData?.posts?.nodes?.filter((p: any) => p.slug !== slug).slice(0, 3) || [];
  const currentUrl = window.location.href;

  return (
    <>
      <Meta 
        title={`${post.title} | Kabura Catering`}
        description={post.excerpt.replace(/<[^>]*>/g, '')}
        ogImage={post.featuredImage?.node?.sourceUrl}
        ogUrl={currentUrl}
        ogType="article"
        articlePublishedTime={post.date}
        articleModifiedTime={post.modified}
        articleAuthor="Kabura Catering"
      />

      <div className="bg-gray-50 min-h-screen">
        <PostHero 
          title={post.title}
          date={post.date}
          excerpt={post.excerpt}
          categories={post.categories.nodes}
          featuredImage={post.featuredImage?.node}
        />

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ShareButtons url={currentUrl} title={post.title} />
              
              <div className="bg-white rounded-xl shadow-sm p-8">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>

        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
};