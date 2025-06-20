// components/RetailConsultingIntro.js
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

// Componente reutilizable para el contador animado
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

const ConsultingIntro = () => {
  // Datos para la sección
  const coreServices = [
    { number: '01.', title: 'Merchandising Strategy' },
    { number: '02.', title: 'Supply Chain Efficiency' },
  ];

  const stats = [
    { number: 12, label: 'Projects' },
    { number: 2, label: 'Years' },
    { number: 15, label: 'Clients' },
    { number: 20, label: 'Strategies' },
  ];

  return (
    <section id='intro' className='bg-white py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* --- Fila Superior --- */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Columna Izquierda: Imagen con superposición */}
          <motion.div
            className='relative w-full aspect-[4/3]'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <Image
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
                We Develop Customized Retail Strategies.
              </p>
            </motion.div>
          </motion.div>

          {/* Columna Derecha: Texto y Servicios */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className='text-sm font-bold text-gray-500 uppercase tracking-wider'>
              Retail Excellence
            </p>
            <h2 className='text-3xl md:text-4xl font-serif text-gray-900 mt-2'>
              Your Business & Brand Deserve the Best
            </h2>
            <p className='mt-4 text-gray-600'>
              Taking care of both your operational and brand health is
              essential. We help retailers make choices and engage in strategies
              that contribute positively to their overall growth and customer
              satisfaction.
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

        {/* --- Fila Inferior: Estadísticas --- */}
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

export default ConsultingIntro;
