import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Checkbox from '../ui/Checkbox';

export default function ContactForm() {
  const [acceptContact, setAcceptContact] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isFormEnabled = acceptContact && acceptTerms;

  const handleContactClick = () => {
    if (isFormEnabled) {
      window.location.href = 'https://tally.so/r/w4P5gk';
    }
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-lg p-8">
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
      
      <div className="space-y-4">
        <button
          onClick={handleContactClick}
          disabled={!isFormEnabled}
          className={`w-full btn-primary transition-all duration-300 ${
            !isFormEnabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
          }`}
        >
          Ir al Formulario de Contacto
        </button>
        
        <a
          href="http://wa.me/56932515438"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-primary bg-green-600 hover:bg-green-700 inline-flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat Directo WhatsApp</span>
        </a>
      </div>
    </div>
  );
}