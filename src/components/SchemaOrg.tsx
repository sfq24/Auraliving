import { Helmet } from 'react-helmet-async';

const PHONE = '(800) 490-1990';
const EMAIL = 'aura@auralivingcare.com';
const SITE_URL = 'https://www.auralivingcare.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aura Living',
  url: SITE_URL,
  logo: `${SITE_URL}/images/Aura Living Logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: PHONE,
    contactType: 'customer service',
    availableLanguage: ['English', 'Chinese'],
    hoursAvailable: 'Mo-Su 09:00-18:00',
  },
  sameAs: [],
};

const magnoliaSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aura Living - Magnolia',
  description:
    'Premium adult family home in the Magnolia neighborhood of Seattle, WA. 24/7 professional nursing care, luxury environment, Chinese-friendly services.',
  url: `${SITE_URL}/homes/magnolia`,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Seattle',
    addressRegion: 'WA',
    addressCountry: 'US',
    streetAddress: '[TODO: Magnolia street address]',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '[TODO]',
    longitude: '[TODO]',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$$$',
  image: `${SITE_URL}/images/magnolia_living_room.png`,
};

const kentSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aura Living - Kent',
  description:
    'Chinese-friendly adult family home in Kent, WA. Mandarin and Cantonese speaking staff, authentic Chinese cuisine, swimming pool, hot tub, and huge backyard.',
  url: `${SITE_URL}/homes/kent`,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kent',
    addressRegion: 'WA',
    addressCountry: 'US',
    streetAddress: '[TODO: Kent street address]',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '[TODO]',
    longitude: '[TODO]',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$$$',
  image: `${SITE_URL}/images/Kent_Sunroom.png`,
};

const shorelineSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aura Living - Shoreline',
  description:
    'Tranquil adult family home in Shoreline, WA. Private garden, serene environment, 24/7 professional care, memory care programs.',
  url: `${SITE_URL}/homes/shoreline`,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Shoreline',
    addressRegion: 'WA',
    addressCountry: 'US',
    streetAddress: '[TODO: Shoreline street address]',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '[TODO]',
    longitude: '[TODO]',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '$$$$',
  image: `${SITE_URL}/images/Shoreline_exterior.png`,
};

const breadcrumbFor = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Our Homes', item: `${SITE_URL}/#our-homes` },
    { '@type': 'ListItem', position: 3, name: name, item: `${SITE_URL}${path}` },
  ],
});

type SchemaType = 'organization' | 'magnolia' | 'kent' | 'shoreline';

interface SchemaOrgProps {
  type: SchemaType;
}

export const SchemaOrg = ({ type }: SchemaOrgProps) => {
  const schemas: Record<SchemaType, object[]> = {
    organization: [organizationSchema],
    magnolia: [magnoliaSchema, breadcrumbFor('Magnolia', '/homes/magnolia')],
    kent: [kentSchema, breadcrumbFor('Kent', '/homes/kent')],
    shoreline: [shorelineSchema, breadcrumbFor('Shoreline', '/homes/shoreline')],
  };

  return (
    <>
      {schemas[type].map((schema, i) => (
        <Helmet key={i}>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      ))}
    </>
  );
};
