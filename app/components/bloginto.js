'use client'

import React from 'react'
import Link from 'next/link';
const Bloginto = () => {
  return (
    <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: 'url("/images/blog/img-13.jpg")' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="relative container mx-auto text-center text-white pt-40">
      <h1 className="text-4xl font-bold">Impact Stories, Community Updates, and More</h1>
      <p className="text-lg mt-4">Discover the latest blog posts and news from Impact for Success Foundation</p>
      <Link href="/blog" className="bg-orange-500 text-white px-6 py-3 rounded-full mt-6 inline-block">Read Our Latest Posts</Link>
    </div>
  </section>
  )
}

export default Bloginto