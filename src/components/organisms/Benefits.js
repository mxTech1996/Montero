// components/BenefitsSection.js
import { motion } from 'framer-motion';
// Iconos relevantes para consultoría de retail
import { FiTrendingUp, FiSettings, FiStar } from 'react-icons/fi';

// Datos para las tarjetas de beneficios (enfocados en la consultoría de limpieza)
const benefits = [
  {
    icon: <FiTrendingUp size={28} />,
    title: 'Boost Sales & Profitability',
    description:
      'We provide data-driven strategies to optimize pricing, promotions, and product placement, driving your revenue growth.',
    href: '/services/sales-profitability',
  },
  {
    icon: <FiSettings size={28} />,
    title: 'Operational & Supply Chain Harmony',
    description:
      'Achieve a state of operational excellence. We help you streamline your supply chain and inventory for a seamless business flow.',
    href: '/services/operations-harmony',
  },
  {
    icon: <FiStar size={28} />,
    title: 'Enhanced Brand & Customer Loyalty',
    description:
      'Build a brand that resonates. We help you craft superior customer experiences that foster loyalty and repeat business.',
    href: '/services/brand-loyalty',
  },
];

const BenefitsSection = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id='benefits' className='bg-emerald-50/60 py-20 lg:py-28'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* CAMBIO: Tipografía del pre-título ajustada */}
          <p className='text-xs font-bold uppercase tracking-[0.3em] text-gray-500'>
            THE BENEFITS
          </p>

          {/* CAMBIO: Tipografía del título principal ajustada para ser más fiel */}
          <h2 className='text-3xl md:text-4xl font-semibold text-gray-900 mt-4 max-w-3xl mx-auto uppercase tracking-wider'>
            WE CAN STRATEGICALLY ENHANCE YOUR RETAIL BUSINESS TOGETHER
          </h2>
        </motion.div>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          variants={gridContainerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              // CAMBIO: Se eliminó bg-white. El borde es más oscuro. El padding es mayor.
              className='border border-gray-800/50 p-10 text-center'
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: 'rgb(239 68 68)' }} // Usando el color rojo de la marca
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className='flex justify-center text-gray-800 mb-6'>
                {benefit.icon}
              </div>

              {/* CAMBIO: Título de la tarjeta ajustado a mayúsculas, más pequeño y con más espaciado */}
              <h3 className='text-base font-semibold text-gray-900 uppercase tracking-[0.2em]'>
                {benefit.title}
              </h3>

              {/* CAMBIO: Descripción con más interlineado. Se eliminó la altura fija. */}
              <p className='text-gray-600 mt-4 leading-relaxed'>
                {benefit.description}
              </p>

              {/* CAMBIO: 'Read More' con un estilo de subrayado más sutil */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
