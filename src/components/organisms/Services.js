// components/ServicesSlider.js
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { dataSite } from '@/data';

// La estructura de servicios que proporcionaste
const services = dataSite.services;

const ServicesSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    const carouselWidth = carouselRef.current.scrollWidth;
    const viewportWidth = carouselRef.current.offsetWidth;
    setWidth(carouselWidth - viewportWidth);
  }, []);

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, y: -10, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <section id='services' className='bg-white py-20 lg:py-28 w-full'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 mb-12'>
        <h2 className='text-4xl md:text-5xl font-serif text-gray-900 text-center'>
          Our Professional Services
        </h2>
      </div>

      <motion.div
        ref={carouselRef}
        className='cursor-grab overflow-hidden'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className='flex space-x-4 sm:space-x-6 px-4 sm:px-6 lg:px-8'
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 20 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className='relative flex-shrink-0 w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[24vw] h-[60vh] rounded-2xl overflow-hidden shadow-lg group'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Image
                src={service.image}
                alt={service.title}
                layout='fill'
                objectFit='cover'
                className='z-0 transition-transform duration-500 ease-in-out group-hover:scale-110'
              />
              {/* Gradiente para legibilidad del texto */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10'></div>

              <div className='absolute bottom-0 left-0 p-6 text-white z-20 w-full'>
                <h3 className='text-2xl font-bold leading-tight'>
                  {service.title}
                </h3>
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.p
                      className='text-sm mt-2 text-gray-200'
                      variants={descriptionVariants}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSlider;
