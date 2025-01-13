import {FaGraduationCap, FaHandsHelping, FaHeartbeat, FaChalkboardTeacher } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';
import { motion, useInView } from 'framer-motion';

const programs = [
  {
    icon: <FaGraduationCap className="text-4xl text-blue-500" />,
    title: 'Educational Support',
    description: 'We strive to enhance educational opportunities for those in need through scholarships, tutoring, and access to educational resources. Our goal is to empower individuals with the knowledge and skills they need to succeed academically and professionally.',
    link: '/programs/education',
  },
  {
    icon: <FaHandsHelping className="text-4xl text-green-500" />,
    title: 'Community Development',
    description: 'Our Community Awareness Program (CAP) involves direct outreach to underserved communities. We visit local areas to provide essential resources such as food, clothing, healthcare services, and financial assistance. By addressing immediate needs and raising awareness about important social issues, we support sustainable community growth and well-being.',
    link: '/programs/community',
  },
  {
    icon: <FaHeartbeat className="text-4xl text-yellow-500" />,
    title: 'Health Care',
    description: 'We believe in promoting better health and well-being for all. Our health initiatives include outreach programs, health education, and access to medical care for underserved populations. We work towards building healthier communities by addressing both physical and mental health needs.',
    link: '/programs/environment',
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" />,
    title: 'Training',
    description: 'Our Skill Acquisition Project aims to equip individuals with the tools they need to succeed in the workforce. Offering training in various trades, entrepreneurship, and soft skills, we help individuals build a better future through practical knowledge and hands-on experience.',
    link: '/programs/environment',
  },
];

const Programs = () => {
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section className="py-16 bg-cover bg-center bg-fixed"   ref={ref}
    style={{ backgroundImage: 'url("/fbg.jpg")' }}>
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col items-center text-right">
          <h2 className="text-3xl font-bold mb-10 text-white font-serif" >Key Focus Areas</h2>
          {/* Horizontal line */}
          {/* <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.5 }}
            src="/focus-line.svg"
            alt="Empersonating Communities"
            className="w-full h-12 object-cover object-center mb-9"
            ref={ref}
          /> */}
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
              <div className="mb-4 flex justify-center">{program.icon}</div>
              <h3 className="text-xl text-[#171717] font-bold font-serif mb-2">{program.title}</h3>
              <p className=" mb-4 text-[#171717] text-left font-sans">{program.description}</p>
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