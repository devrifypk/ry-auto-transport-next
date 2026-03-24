export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "R&Y Auto Transport LLC",
    "image": "https://ryautotransport.com/hero-bg.png",
    "@id": "https://ryautotransport.com",
    "url": "https://ryautotransport.com",
    "telephone": "+18005550199",
    "email": "quotes@ryautotransport.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "description": "Reliable auto transport brokerage working with licensed and insured carriers nationwide.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
