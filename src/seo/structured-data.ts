export const legalOfficeSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Munay Legal",
  "image": "https://splendorous-panda-b8b513.netlify.app/images/logo-dark.png",
  "description": "Estudio jurídico especializado en resolución de deudas, derecho de familia, herencias y asesoría legal integral en Chile.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Badajoz 100, of 523",
    "addressLocality": "Las Condes",
    "addressRegion": "Santiago",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.4172,
    "longitude": -70.6014
  },
  "url": "https://splendorous-panda-b8b513.netlify.app",
  "telephone": "+56932515438",
  "email": "info@munaylegal.cl",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/munaylegal",
    "https://www.instagram.com/munaylegal"
  ],
  "priceRange": "$$",
  "serviceType": [
    "Gestión de Deudas",
    "Derecho de Familia",
    "Herencias",
    "Derecho Civil",
    "Derecho Corporativo"
  ]
}