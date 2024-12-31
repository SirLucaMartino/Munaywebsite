import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import FadeInOnScroll from './animations/FadeInOnScroll';
import Checkbox from './ui/Checkbox';

export default function Contact() {
  const [acceptContact, setAcceptContact] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isFormEnabled = acceptContact && acceptTerms;

  return (
    <section id="contact" className="section-padding bg-dark-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeInOnScroll>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Contáctanos
              </h2>
              <p className="text-cream/90 mb-8">
                Estamos aquí para ayudarte. Agenda una consulta o escríbenos directamente.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:+56932515438"
                  className="flex items-center group hover:translate-x-2 transition-transform cursor-pointer"
                >
                  <Phone className="w-6 h-6 text-orange mr-4 group-hover:scale-110 transition-transform" />
                  <span>+56 9 3251 5438</span>
                </a>
                <a 
                  href="mailto:info@munaylegal.cl"
                  className="flex items-center group hover:translate-x-2 transition-transform cursor-pointer"
                >
                  <Mail className="w-6 h-6 text-orange mr-4 group-hover:scale-110 transition-transform" />
                  <span>info@munaylegal.cl</span>
                </a>
                <div className="flex items-center group hover:translate-x-2 transition-transform cursor-pointer">
                  <MapPin className="w-6 h-6 text-orange mr-4 group-hover:scale-110 transition-transform" />
                  <span>Av. Providencia 1208, Of. 1603, Providencia</span>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div className="space-y-6 mb-6">
                <Checkbox
                  id="accept-contact"
                  label="Acepto ser contactado por el equipo de Munay"
                  checked={acceptContact}
                  onChange={setAcceptContact}
                />
                <Checkbox
                  id="accept-terms"
                  label="Acepto los términos y condiciones y las políticas de privacidad"
                  checked={acceptTerms}
                  onChange={setAcceptTerms}
                />
              </div>
              
              <div className={`transition-opacity duration-300 ${isFormEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                <iframe
                  data-tally-src="https://tally.so/embed/w4P5gk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Registration form"
                />
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}