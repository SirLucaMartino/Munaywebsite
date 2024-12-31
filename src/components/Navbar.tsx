import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../constants/images';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', to: 'home' },
    { name: 'Servicios', to: 'services' },
    { name: 'Equipo', to: 'team' },
    { name: 'Contacto', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-dark-green/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <img 
              src={IMAGES.logo.light}
              alt="Munay Legal" 
              className="h-20 md:h-24 transition-all duration-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link cursor-pointer text-white hover:text-orange font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-dark-green/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="block py-3 text-center text-white hover:text-orange transition-colors font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}