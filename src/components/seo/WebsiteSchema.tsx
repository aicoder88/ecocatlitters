export default function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EcoCatLitters',
    url: 'https://ecocatlitters.com',
    description: 'Discover eco-friendly, sustainable cat litter options that protect our planet without compromising performance.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
