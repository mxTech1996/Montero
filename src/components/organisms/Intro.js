// components/CleaningRetailIntro.js
import { useEffect } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { dataSite } from '@/data';

// Reusable component for the animated counter
function Counter({ from = 0, to }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 2, ease: 'easeOut' });
    }
  }, [inView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const CleaningRetailIntro = () => {
  // Data for the "Cleaning Retail Consulting" section
  const coreServices = [
    { number: '01.', title: 'Product Assortment Optimization' },
    { number: '02.', title: 'Inventory & Supply Chain Management' },
  ];

  const stats = [
    { number: 12, label: 'Successful Projects' },
    { number: 5, label: 'Years of Experience' },
    { number: 15, label: 'Satisfied Clients' },
    { number: 20, label: 'Strategies Implemented' },
  ];

  return (
    <section id='intro' className='bg-white py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* --- Top Row --- */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Column: Image with overlay */}
          <motion.div
            className='relative w-full aspect-[4/3]'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              // Ensure this path points to a relevant image
              src={dataSite.services[1].image}
              alt='Clean and organized retail aisle with cleaning products'
              layout='fill'
              objectFit='cover'
              className='rounded-2xl'
            />
            <motion.div
              className='absolute bottom-5 right-5 sm:bottom-10 sm:right-10 bg-gray-900 text-white p-6 rounded-lg shadow-xl'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className='text-lg font-semibold max-w-xs'>
                We develop custom retail strategies for your business.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Text and Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className='text-sm font-bold text-gray-500 uppercase tracking-wider'>
              Excellence in Cleaning Retail
            </p>
            <h2 className='text-3xl md:text-4xl font-serif text-gray-900 mt-2'>
              Driving Success in Your Cleaning Supply Store
            </h2>
            <p className='mt-4 text-gray-600'>
              In a competitive market, efficient management is crucial. We help
              retailers make strategic decisions that optimize operations,
              enhance the customer experience, and drive sustainable growth.
            </p>
            <div className='mt-8 space-y-4'>
              {coreServices.map((service) => (
                <div
                  key={service.number}
                  className='border-t border-gray-200 pt-4'
                >
                  <p className='font-bold text-gray-800'>
                    {service.number} {service.title}
                  </p>
                </div>
              ))}
            </div>
            <a
              href='#about'
              className='inline-block mt-8 bg-lime-300 text-lime-900 font-bold px-8 py-3 rounded-lg hover:bg-lime-400 transition-colors'
            >
              About Us
            </a>
          </motion.div>
        </div>

        {/* --- Bottom Row: Statistics --- */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-24 lg:mt-32'>
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <p className='text-7xl lg:text-8xl font-bold text-gray-200/80'>
                <Counter to={stat.number} />+
              </p>
              <p className='text-sm font-semibold text-gray-500 uppercase tracking-widest -mt-4'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CleaningRetailIntro;
