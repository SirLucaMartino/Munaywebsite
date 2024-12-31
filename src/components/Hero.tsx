import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { IMAGES } from '../constants/images';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${IMAGES.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Capa de superposición con más transparencia y efecto de desenfoque */}
        <div className="absolute inset-0 bg-dark-green/40 backdrop-blur-[2px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32">
        <div className="max-w-3xl backdrop-blur-sm bg-dark-green/10 p-8 rounded-3xl border border-white/10">
          {/* Título con sombra mejorada */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
            Resolviendo tus deudas, juntos
          </h1>
          {/* Párrafo con mejor legibilidad */}
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] leading-relaxed">
            En Munay Legal, nos especializamos en brindar soluciones legales efectivas 
            para tus problemas financieros. Nuestro equipo de expertos está aquí para 
            ayudarte a recuperar tu tranquilidad financiera.
          </p>
          {/* Botón con efectos mejorados */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="btn-hero group cursor-pointer text-lg inline-flex items-center"
          >
            Agenda una Consulta
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}