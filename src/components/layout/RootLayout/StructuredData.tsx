interface StructuredDataProps {
  siteUrl?: string;
}

export default function StructuredData({ siteUrl }: StructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Gomanic Россия",
    "description": "Профессиональный маникюр с независимыми специалистами",
    "url": siteUrl
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
