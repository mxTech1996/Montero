// components/InfoSection.js
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { dataSite } from '@/data';

// He enriquecido tu data con una imagen para cada servicio para un diseño más visual
const services = [
  {
    title: 'Consulting and Training',
    description:
      'CSL offers audit and training services in cleaning and hygiene, tailored for institutions, the hospitality industry, and the industrial sector.',
    image: dataSite.image_hero,
  },
  {
    title: 'Supply of Products',
    description:
      'We provide a comprehensive range of cleaning and hygiene products, industrial-strength chemicals, and complete systems for direct purchase.',
    image: dataSite.image_hero2,
  },
  {
    title: 'Values',
    description:
      'Our core values are a commitment to comprehensive solutions, deep expertise and professionalism, and building a client-centric partnership.',
    image: dataSite.services[0].image,
  },
  {
    title: 'Product Ingredients',
    description:
      'We prioritize safe and effective formulas, utilizing plant-based surfactants, natural enzymes, and other eco-friendly components.',
    image: dataSite.services[1].image,
  },
  {
    title: 'Clients',
    description:
      'We proudly serve a diverse range of clients across the industrial, institutional, hospitality, domestic, and corporate office sectors.',
    image: dataSite.services[2].image,
  },
];

const InfoSection = () => {
  // Estado para saber qué pestaña está activa. Empezamos con la primera (índice 0).
  const [activeTab, setActiveTab] = useState(0);

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section id='about' className='bg-slate-50/50 py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-4xl md:text-5xl font-serif text-gray-900'>
            Explore Our Core Pillars
          </h2>
          <p className='mt-4 text-gray-700 max-w-2xl mx-auto'>
            Discover the foundational elements of our business, from expert
            consulting to our commitment to quality.
          </p>
        </motion.div>

        {/* --- Navegación de Pestañas --- */}
        <div className='flex justify-center border-b border-gray-200'>
          {services.map((service, index) => (
            <button
              key={service.title}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-sm md:text-base font-semibold transition-colors duration-300
                                ${
                                  activeTab === index
                                    ? 'text-red-500 border-b-2 border-red-500'
                                    : 'text-gray-500 hover:text-black'
                                }
                            `}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* --- Contenido de la Pestaña Activa --- */}
        <div className='mt-12'>
          <AnimatePresence mode='wait'>
            <motion.div
              // La 'key' es crucial para que AnimatePresence detecte el cambio de contenido
              key={activeTab}
              variants={tabContentVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'
            >
              {/* Columna de Texto */}
              <div className='text-left'>
                <h3 className='text-3xl font-bold text-gray-900'>
                  {services[activeTab].title}
                </h3>
                <p className='mt-4 text-gray-700 leading-relaxed'>
                  {services[activeTab].description}
                </p>
              </div>

              {/* Columna de Imagen */}
              <div className='w-full aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden'>
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
