interface ServiceDetailsProps {
  name: string;
  description: string;
}

const serviceDetails: Record<string, ServiceDetailsProps> = {
  'Herencias': {
    name: 'Herencias y Sucesiones',
    description: `Nuestro equipo de abogados especialistas en derecho sucesorio te guiará en todo el proceso de herencia, desde la tramitación de la posesión efectiva hasta la partición de bienes.

    Servicios específicos:
    • Tramitación de posesión efectiva testada e intestada
    • Redacción y modificación de testamentos
    • Partición de bienes hereditarios
    • Defensa de derechos hereditarios
    • Gestión de conflictos entre herederos
    
    De acuerdo con la legislación chilena, te ayudamos a proteger tus derechos como heredero y a gestionar eficientemente el proceso sucesorio.`
  },
  'Divorcios': {
    name: 'Divorcios y Derecho de Familia',
    description: `Brindamos asesoría integral en procesos de divorcio, velando por tus derechos y los de tu familia según la Ley de Matrimonio Civil chilena.

    Servicios específicos:
    • Divorcio de mutuo acuerdo
    • Divorcio por cese de convivencia
    • Separación judicial
    • Acuerdos de división de bienes
    • Mediación familiar
    
    Nuestro enfoque se centra en lograr acuerdos beneficiosos y proteger el bienestar de todos los involucrados.`
  },
  'Deudas': {
    name: 'Gestión y Negociación de Deudas',
    description: `Ofrecemos soluciones efectivas para manejar situaciones de endeudamiento, trabajando con la Ley de Reorganización y Liquidación de Empresas y Personas.

    Servicios específicos:
    • Renegociación de deudas bancarias
    • Defensa en juicios ejecutivos
    • Asesoría en Ley de Insolvencia y Reemprendimiento
    • Acuerdos con acreedores
    • Levantamiento de embargos
    
    Te ayudamos a encontrar la mejor solución para tu situación financiera.`
  },
  'Pensión de Alimentos': {
    name: 'Pensión de Alimentos',
    description: `Especialistas en derecho de familia, gestionamos todo lo relacionado con pensiones alimenticias según la legislación chilena vigente.

    Servicios específicos:
    • Demanda de pensión de alimentos
    • Aumento o rebaja de pensión
    • Cumplimiento de pensiones atrasadas
    • Retención judicial
    • Medidas de apremio
    
    Protegemos el derecho de los menores a recibir el apoyo económico que necesitan.`
  },
  'Régimen de Relación Directa': {
    name: 'Régimen de Relación Directa y Regular',
    description: `Facilitamos acuerdos de visitas y relación con los hijos, priorizando siempre el interés superior del niño según la legislación chilena.

    Servicios específicos:
    • Establecimiento de régimen comunicacional
    • Modificación de régimen de visitas
    • Cumplimiento de régimen establecido
    • Mediación familiar
    • Resolución de conflictos
    
    Trabajamos para mantener vínculos saludables entre padres e hijos.`
  },
  'Civil': {
    name: 'Derecho Civil',
    description: `Amplia experiencia en todas las áreas del derecho civil, ofreciendo soluciones integrales para personas y empresas.

    Servicios específicos:
    • Contratos civiles y comerciales
    • Responsabilidad civil
    • Juicios ordinarios y ejecutivos
    • Derechos reales
    • Obligaciones
    
    Protegemos tus derechos y intereses en todo tipo de relaciones civiles.`
  },
  'Bienes Raíces': {
    name: 'Derecho Inmobiliario',
    description: `Asesoramiento completo en transacciones inmobiliarias y gestión de propiedades según la normativa chilena.

    Servicios específicos:
    • Compraventa de inmuebles
    • Arrendamientos
    • Estudios de títulos
    • Hipotecas y gravámenes
    • Regularización de propiedades
    
    Te acompañamos en cada paso de tus operaciones inmobiliarias.`
  },
  'Empresas': {
    name: 'Derecho Corporativo',
    description: `Soporte legal integral para empresas, desde su constitución hasta su operación diaria según la legislación comercial chilena.

    Servicios específicos:
    • Constitución de sociedades
    • Modificaciones societarias
    • Contratos comerciales
    • Asesoría tributaria
    • Cumplimiento normativo
    
    Apoyamos el desarrollo y crecimiento de tu negocio con sólido respaldo legal.`
  }
};

export default serviceDetails;