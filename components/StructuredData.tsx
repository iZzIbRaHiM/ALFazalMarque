export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    '@id': 'https://alfazalpalacemarquee.com',
    name: 'Al Fazal Palace Marquee',
    url: 'https://alfazalpalacemarquee.com',
    logo: 'https://alfazalpalacemarquee.com/images/m2.JPG',
    image: [
      'https://alfazalpalacemarquee.com/images/m2.JPG',
      'https://alfazalpalacemarquee.com/images/m4.JPG',
      'https://alfazalpalacemarquee.com/images/Walima.JPG',
    ],
    description: 'Premier wedding and events venue in Dina with 2000+ guest capacity, offering world-class facilities, exceptional service, and unforgettable celebrations.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'G.T Road',
      addressLocality: 'Dina',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.654321',
      longitude: '72.123456',
    },
    telephone: '+923005451991',
    email: 'info@alfazalmarquee.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '22:00',
      },
    ],
    priceRange: '$$$$',
    servesCuisine: ['Pakistani', 'International'],
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Guest Capacity',
        value: '2000+',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Event Types',
        value: 'Weddings, Corporate Events, Social Gatherings',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Catering Services',
        value: 'Available',
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Event Management',
        value: 'Available',
      },
    ],
    sameAs: [
      'https://www.instagram.com/al_fazal_palace_marquee',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Al Fazal Palace Marquee',
    image: 'https://alfazalpalacemarquee.com/images/m2.JPG',
    '@id': 'https://alfazalpalacemarquee.com',
    url: 'https://alfazalpalacemarquee.com',
    telephone: '+923005451991',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'G.T Road',
      addressLocality: 'Dina',
      addressRegion: 'Punjab',
      addressCountry: 'PK',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '32.654321',
      longitude: '72.123456',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '22:00',
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://alfazalpalacemarquee.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://alfazalpalacemarquee.com/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Gallery',
        item: 'https://alfazalpalacemarquee.com/gallery',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Services',
        item: 'https://alfazalpalacemarquee.com/services',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
