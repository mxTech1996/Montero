// components/ServicesShowcase.js
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = dataSite.products;

const ProductsShowcase = () => {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id='products' className='bg-white py-20 lg:py-28'>
      <h1 className='text-4xl md:text-5xl font-serif text-gray-900 text-center mb-12'>
        Our Featured Products
      </h1>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* --- Cuadrícula de Productos/Servicios --- */}
        <motion.div
          className='grid grid-cols-1 lg:grid-cols-2 gap-8'
          variants={gridVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Usamos .slice(0, 4) para mostrar 4 productos como en la imagen */}
          {products.map((service) => {
            const isInCart = validateProductInCart(service.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(service.id);
            };

            return (
              <motion.div
                key={service.id}
                className='grid grid-cols-1 md:grid-cols-2 bg-stone-100/70'
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Columna Izquierda: Imagen y Precio */}
                <div className='relative aspect-w-1 aspect-h-1'>
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout='fill'
                    objectFit='cover'
                  />
                  <div className='absolute top-4 left-4 bg-black/80 text-white px-3 py-1.5 rounded-md text-sm font-semibold'>
                    $ {parseFloat(service.price).toFixed(2)} USD
                  </div>
                </div>

                {/* Columna Derecha: Información y Botón */}
                <div className='p-8 flex flex-col'>
                  <div className='flex-grow'>
                    <h3 className='font-semibold uppercase text-lg text-gray-900'>
                      {service.name}
                    </h3>
                    <p className='mt-2 text-sm text-gray-600 line-clamp-3'>
                      {service.description}
                    </p>
                  </div>
                  <div className='mt-6'>
                    <button
                      onClick={handleClick}
                      style={{
                        backgroundColor: isInCart ? '#DF3E3EFF' : '#000',
                      }}
                      className='w-full bg-black text-white uppercase font-semibold text-sm py-3 hover:bg-gray-800 transition-colors'
                    >
                      {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
