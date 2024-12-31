import FadeInOnScroll from './animations/FadeInOnScroll';
import { IMAGES } from '../constants/images';

const team = [
  {
    name: 'Francisco Herrera Klarian',
    role: 'Abogado Consultor',
    specialty: 'Derecho Civil y Comercial',
    image: IMAGES.team.francisco,
    description: 'Especialista en derecho civil y comercial con amplia experiencia en resolución de conflictos empresariales y gestión de deudas.'
  },
  {
    name: 'Catalina Gutiérrez Ocaranza',
    role: 'Abogado Consultor',
    specialty: 'Derecho de Familia',
    image: IMAGES.team.catalina,
    description: 'Experta en derecho familiar con enfoque en mediación y resolución pacífica de conflictos familiares.'
  },
  {
    name: 'Tomás Jorquera Guzmán',
    role: 'Abogado Consultor',
    specialty: 'Derecho Corporativo',
    image: IMAGES.team.tomas,
    description: 'Especializado en derecho corporativo y asesoría empresarial, con experiencia en restructuración y optimización de negocios.'
  }
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-soft-green text-lg max-w-2xl mx-auto">
              Profesionales comprometidos con tu bienestar legal
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <FadeInOnScroll key={member.name} delay={index * 100}>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mb-6 relative">
                  <div className="w-40 h-40 mx-auto rounded-full bg-orange p-1 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-cream/50 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-orange font-semibold mb-2">{member.role}</p>
                  <p className="text-soft-green mb-3">{member.specialty}</p>
                  <p className="text-gray-600 text-sm max-w-sm mx-auto">
                    {member.description}
                  </p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}