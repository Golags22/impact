import { FaSchool, FaUsers, FaTree, FaBolt } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import { motion, useInView } from 'framer-motion';

const programs = [
  {
    icon: <FaSchool className="text-4xl text-blue-500" />,
    title: 'Education Support',
    description: 'Providing access to quality education and resources for underserved communities.',
    link: '/programs/education',
  },
  {
    icon: <FaUsers className="text-4xl text-green-500" />,
    title: 'Community Development',
    description: 'Empowering local communities through skills training and infrastructure development.',
    link: '/programs/community',
  },
  {
    icon: <FaBolt className="text-4xl text-yellow-500" />,
    title: 'Empowering unemployed people',
    description: 'Promoting sustainability and conservation through various green initiatives.',
    link: '/programs/environment',
  },
];

const Programs = () => {
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center text-right">
          <h2 className="text-3xl font-bold mb-10">Key Focus Areas</h2>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.5 }}
            src="/focus-line.svg"
            alt="Empersonating Communities"
            className="w-full h-12 object-cover object-center mb-9"
            ref={ref}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: index * 0.3, // Stagger each card
              }}
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link href={program.link} className="text-blue-500 hover:underline">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;