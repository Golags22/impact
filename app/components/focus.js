// components/Programs.js
import { FaSchool, FaUsers, FaTree } from 'react-icons/fa';
import Link from 'next/link';

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
    icon: <FaTree className="text-4xl text-yellow-500" />,
    title: 'Environmental Projects',
    description: 'Promoting sustainability and conservation through various green initiatives.',
    link: '/programs/environment',
  },
];

const Programs = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Key Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Link href={program.link} className="text-blue-500 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
