'use client';

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../scrollbtn';
import Loading from "../components/Loader";


export default function Blog() {
  return (
   
        <>
    <div className="bg-gray-100 ">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[100vh]" style={{ backgroundImage: 'url("/images/blog/img-13.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center text-white pt-40">
          <h1 className="text-4xl font-bold">Impact Stories, Community Updates, and More</h1>
          <p className="text-lg mt-4">Discover the latest blog posts and news from Impact for Success Foundation</p>
          <Link href="#latest-posts" className="bg-orange-500 text-white px-6 py-3 rounded-full mt-6 inline-block">Read Our Latest Posts</Link>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Post</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/blog/img-14.jpg" alt="Featured Blog Post" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">How Impact for Success Foundation Changed Lives in 2024</h3>
              <p className="mt-4 text-lg">We have made a big difference this year. Read about our success stories and how we’ve impacted the lives of many people.</p>
              <Link href="/blog/impact-for-success-2024" className="text-orange-500 mt-4 inline-block">Read More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section id="latest-posts" className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/blog/img-13.jpg" alt="Blog Post 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Our Annual Fundraising Gala 2024: A Huge Success</h3>
              <p className="mt-4 text-lg">Our fundraising event helped raise $100K for community education projects...</p>
              <Link href="/images/blog/img-13.jpg" className="text-orange-500 mt-4 inline-block">Read More</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/blog/img-v.jpg" alt="Blog Post 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">The Power of Volunteerism: How You Can Make a Difference</h3>
              <p className="mt-4 text-lg">Our volunteers are the backbone of our work, and you can make an impact by joining our volunteer team.</p>
              <Link href="/blog/volunteerism-power" className="text-orange-500 mt-4 inline-block">Read More</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/blog/img-13.jpg" alt="Blog Post 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">5 Ways You Can Help Support Our Mission Right Now</h3>
              <p className="mt-4 text-lg">Here are simple ways you can contribute to our mission and help us make a bigger impact...</p>
              <Link href="/blog/waystohelp" className="text-orange-500 mt-4 inline-block">Read More</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Past Blog Posts */}
      <section id="latest-posts" className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Past Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/blog/img-13.jpg" alt="Blog Post 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">Our Annual Fundraising Gala 2024: A Huge Success</h3>
              <p className="mt-4 text-lg">Our fundraising event helped raise $100K for community education projects...</p>
              <Link href="/images/blog/img-13.jpg" className="text-orange-500 mt-4 inline-block">Read More</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/blog/img-v.jpg" alt="Blog Post 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">The Power of Volunteerism: How You Can Make a Difference</h3>
              <p className="mt-4 text-lg">Our volunteers are the backbone of our work, and you can make an impact by joining our volunteer team.</p>
              <Link href="/blog/volunteerism-power" className="text-orange-500 mt-4 inline-block">Read More</Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="/images/blog/img-v.jpg" alt="Blog Post 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold">The Power of Volunteerism: How You Can Make a Difference</h3>
              <p className="mt-4 text-lg">Our volunteers are the backbone of our work, and you can make an impact by joining our volunteer team.</p>
              <Link href="/blog/volunteerism-power" className="text-orange-500 mt-4 inline-block">Read More</Link>
            </div>
          </div>

          {/* Video Testimony */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <img
            src="/images/video-placeholder.jpg"
            alt="Video testimony"
            className="w-full h-40 object-cover rounded-md"
          />
          <a
            href="https://fb.watch/wfmJRIt7hY/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-700 mt-4">
         Impact for Xploit Conference 2021 live on Facebook.
        </p>
        <p className="text-sm text-gray-500">- Video Testimony</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <img
            src="/images/video-placeholder.jpg"
            alt="Video testimony"
            className="w-full h-40 object-cover rounded-md"
          />
          <a
            href="https://fb.watch/wfnxNa8irY/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-700 mt-4">
         Impact for Xploit Conference 2021 live on Facebook.
        </p>
        <p className="text-sm text-gray-500">- Video Testimony</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="relative">
          <img
            src="/images/blog/ogbe.jpg"
            alt="Video testimony"
            className="w-full h-40 object-cover rounded-md"
          />
          <a
            href="https://fb.watch/wfnP5SFN-O/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-70 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-12 h-12 text-white"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-700 mt-4">
        Ogbe-ijoh Community Outreach
        </p>
        <p className="text-sm text-gray-500">- Video Testimony</p>
      </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Updated with Our Latest News and Updates</h2>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 mb-4 text-lg rounded"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-4 text-lg rounded"
            required
          />
          <button type="submit" className="bg-orange-500 text-white px-8 py-3 rounded-full">Subscribe</button>
        </form>
      </section>
    </div>
    <ScrollToTopButton />
    <Footer /> 
    </>
)}
