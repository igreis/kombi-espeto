"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Phone, MoreVertical, X } from 'lucide-react';
import kombi from '../../assets/image/hero/kombi.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById("pedido");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { label: '🏠 Início', href: '#inicio' },
    { label: '⭐ Destaques', href: '#destaques' },
    { label: '🍡 Cardápio', href: '#cardapio' },
    { label: 'ℹ️ Sobre', href: '#sobre' },
    { label: '📞 Contato', href: '#contato' },
  ];

  const handleScroll = () => {
    const element = document.getElementById("pedido");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white backdrop-blur-md shadow-sm">
        <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:max-w-[60dvw]">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#inicio">
              <img src={kombi} alt="Logo" className="h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            {menuItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-red-600 transition-colors"
              >
                {item.label.replace(/^[^a-zA-Z]*/, '')}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+553484320119">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                <Phone className="h-4 w-4" />
                Ligar Agora
              </button>
            </a>
            <button onClick={handleScroll} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium transition-colors">
              Fazer Pedido
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
              onClick={closeMobileMenu}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden"
            >
              <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                    <button
                      onClick={closeMobileMenu}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                      aria-label="Fechar menu"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <nav className="space-y-2">
                    {menuItems.map((item) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={closeMobileMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="block py-4 px-4 text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full flex items-center justify-center gap-3 py-4 px-4 border-2 border-red-600 text-red-600 rounded-xl text-base font-semibold hover:bg-red-600 hover:text-white transition-all mb-3"
                      onClick={closeMobileMenu}
                    >
                      <Phone className="h-5 w-5" />
                      <a href="tel:+553484320119">Ligar Agora</a>
                    </motion.button>

                    <motion.button
                      
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-4 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl font-semibold transition-all shadow-lg"
                      onClick={closeMobileMenu}
                    >
                      🍡 Fazer Pedido
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
