// components/MinimalistTestimonials.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dataSite } from '@/data';

// La estructura de testimonios que proporcionaste
const references = dataSite.references;

const MinimalistTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const variants = {
    enter: { opacity: 0, y: 20 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  // Lógica para separar el nombre del cargo/empresa si existe
  const [authorName, authorTitle] =
    references[activeIndex].name.split(/, | from /);

  return (
    <section className='bg-white py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative min-h-[300px]'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={activeIndex}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='flex items-start'
          >
            {/* Línea decorativa verde */}
            <div className='w-1 h-24 bg-emerald-400 mr-8 flex-shrink-0'></div>

            <div className='flex-grow'>
              <blockquote className='text-2xl lg:text-3xl text-gray-800 leading-relaxed'>
                {references[activeIndex].description}
              </blockquote>
              <div className='mt-8'>
                <p className='text-sm font-semibold uppercase tracking-[0.3em] text-gray-900'>
                  {authorName}
                </p>
                {authorTitle && (
                  <p className='text-base text-gray-500 mt-1'>{authorTitle}</p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- Puntos de Navegación --- */}
        <div className='absolute bottom-0 right-0 flex items-center space-x-3'>
          {references.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300
                                ${
                                  activeIndex === index
                                    ? 'bg-gray-800'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }
                            `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinimalistTestimonials;
