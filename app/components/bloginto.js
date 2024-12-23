'use client';

import React from 'react';
import Link from 'next/link';

/**
 * BlogIntro component
 * 
 * Displays a hero section for the blog page
 */
const BlogIntro = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ backgroundImage: 'url("/images/blog/img-13.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center text-white pt-6 md:pt-12 lg:pt-40">
  <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
    Impact Stories, Community Updates, and More
  </h1>
  <p className="text-lg mt-4 md:text-xl lg:text-2xl">
    Discover the latest blog posts and news from Impact for Success Foundation
  </p>
  <Link
    href="/blog"
    className="bg-orange-500 text-white px-6 py-3 rounded-full mt-6 inline-block md:px-8 md:py-4 lg:px-10 lg:py-5"
  >
    Read Our Latest Posts
  </Link>
</div>
    </section>
  );
};

export default BlogIntro;