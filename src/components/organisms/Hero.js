// components/HeroSection.js

import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  // Variantes para animar la aparición de los elementos
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4, // Iniciar después de que el contenedor principal aparezca
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className='w-full grid grid-cols-1 lg:grid-cols-2'>
      {/* --- Columna Izquierda (Imagen Grande) --- */}
      <motion.div
        className='bg-white flex items-center justify-center p-8 lg:p-12 order-last lg:order-first'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className='w-full max-w-md aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg'>
          <Image
            src={dataSite.image_hero}
            alt='Woman holding fresh vegetables in a kitchen'
            layout='fill'
            objectFit='cover'
            priority
          />
        </div>
      </motion.div>

      {/* --- Columna Derecha (Texto e Imágenes Pequeñas) --- */}
      <motion.div
        className='bg-emerald-50/60 flex items-center'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className='w-full p-8 py-20 lg:p-20'
          variants={textContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className='text-4xl md:text-5xl text-gray-900 font-bold uppercase tracking-wider'
            variants={textItemVariants}
          >
            {dataSite.subtitle}
          </motion.h1>
          <motion.p
            className='mt-4 text-gray-700 max-w-lg'
            variants={textItemVariants}
          >
            {dataSite.description}
          </motion.p>

          {/* Collage de imágenes pequeñas */}
          <motion.div
            className='relative h-48 md:h-64 mt-8'
            variants={textItemVariants}
          >
            <motion.div
              className='absolute top-0 left-0 w-2/3 md:w-1/2 h-full rounded-2xl overflow-hidden shadow-lg'
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <Image
                src={dataSite.image_hero2}
                alt='Woman doing yoga outdoors'
                layout='fill'
                objectFit='cover'
              />
            </motion.div>
            <motion.div
              className='absolute bottom-0 right-0 w-2/3 md:w-1/2 h-4/5 rounded-2xl overflow-hidden shadow-xl border-4 border-emerald-50/60'
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
            >
              <Image
                src={dataSite.services[0].image}
                alt='Woman in a wellness pose on a cliff'
                layout='fill'
                objectFit='cover'
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
