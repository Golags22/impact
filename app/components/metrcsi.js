import { FaUsers, FaDollarSign, FaGraduationCap } from 'react-icons/fa';
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

const impactMetrics = [
  { icon: <FaUsers className="text-4xl text-blue-500" />, number: 500, label: "Children Educated" },
  { icon: <FaUsers className="text-4xl text-green-500" />, number: 100, label: "Communities Reached" },
  { icon: <FaDollarSign className="text-4xl text-yellow-500" />, number: 1000000, label: "Raised" },
  { icon: <FaGraduationCap className="text-4xl text-red-500" />, number: 400, label: "Persons Trained" },
  { icon: <FaUsers className="text-4xl text-purple-500" />, number: 900, label: "Lives Impacted" },
];

const ImpactMetrics = () => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const metricsSection = document.querySelector('#impact-metrics');
      const rect = metricsSection.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsInView(true); // Trigger counter when the section is in view
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="impact-metrics" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
