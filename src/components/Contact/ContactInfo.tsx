import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
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
          <span>Badajoz 100, of 523, Las Condes, Santiago</span>
        </div>
      </div>
    </div>
  );
}