'use client';
import { useCart } from 'ecommerce-mxtech';
// components/LifeNavbar.js
import { FiShoppingCart, FiMenu } from 'react-icons/fi';

const LifeNavbar = () => {
  const { products } = useCart();
  // Array para generar los enlaces de navegación, ahora con la propiedad 'href'
  const navLinks = [
    { name: 'Products', href: '/#products', hasPlus: false },
    { name: 'About Us', href: '/#about', hasPlus: false },
    { name: 'Services', href: '/#services', hasPlus: false },
    { name: 'Benefits', href: '/#benefits', hasPlus: false },
    { name: 'All Pages', href: '/pages', hasPlus: true },
  ];

  return (
    // Usamos un color de fondo verde menta muy pálido, como en la imagen
    <header className='w-full bg-emerald-50/50'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between py-5'>
          {/* --- Logo --- */}
          <a href='/' className='text-4xl font-bold text-black'>
            Montero
          </a>

          {/* --- Enlaces de Navegación para Escritorio --- */}
          <div className='hidden lg:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.name}
                // Usamos la nueva propiedad href del objeto link
                href={link.href}
                className='text-sm text-gray-800 hover:text-black transition-colors'
              >
                {link.name}
                {link.hasPlus && <span className='ml-1'>+</span>}
              </a>
            ))}
          </div>

          {/* --- Iconos y Botón --- */}
          <div className='flex items-center space-x-6'>
            {/* --- Icono del Carrito con contador --- */}
            <a href='/cart' className='relative'>
              <FiShoppingCart size={24} className='text-gray-800' />
              <span className='absolute -top-3 -right-3 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
                {products.length}
              </span>
            </a>
            <a
              href='/more-information'
              className='hidden sm:block bg-black text-white text-sm font-semibold uppercase tracking-wider px-8 py-4 hover:bg-gray-800 transition-colors'
            >
              Contact Us
            </a>

            {/* --- Botón de Menú para Móvil --- */}
            <div className='lg:hidden'>
              <button type='button' aria-label='Open menu'>
                <FiMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LifeNavbar;
