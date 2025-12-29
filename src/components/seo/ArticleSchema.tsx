interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export default function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    image: image || 'https://ecocatlitters.com/og-image.png',
    author: {
      '@type': 'Organization',
      name: 'EcoCatLitters',
      url: 'https://ecocatlitters.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EcoCatLitters',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ecocatlitters.com/logo.png',
      },
    },
    about: {
      '@type': 'Thing',
      name: 'Environmental Sustainability',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
