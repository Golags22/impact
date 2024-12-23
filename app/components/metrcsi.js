
import { FaUsers, FaDollarSign, FaGraduationCap } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';
import React from 'react';

const impactMetrics = [
  { icon: <FaUsers className="text-4xl text-blue-500" />, number: 500, label: "Children Educated" },
  { icon: <FaUsers className="text-4xl text-green-500" />, number: 100, label: "Communities Reached" },
  { icon: <FaDollarSign className="text-4xl text-yellow-500" />, number: 1000000, label: "Raised" },
  { icon: <FaGraduationCap className="text-4xl text-red-500" />, number: 400, label: "Persons Trained" },
  { icon: <FaUsers className="text-4xl text-purple-500" />, number: 900, label: "Lives Impacted" },
];

const ImpactMetrics = () => {
  const ref = React.createRef();
  const isInView = useInView(ref, { threshold: 0.2 });

  return (
    <section id="impact-metrics" className="py-16 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeInOut', delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">{metric.icon}</div>
                <h3 className="text-4xl font-semibold mb-2">
                  {isInView ? (
                    <CountUp
                      start={0}
                      end={metric.number}
                      duration={2.5}
                      separator=","
                      useEasing
                    />
                  ) : (
                    metric.number
                  )}
                </h3>
                <p className="text-xl text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactMetrics;