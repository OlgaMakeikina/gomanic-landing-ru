interface StructuredDataProps {
  siteUrl?: string;
}

export default function StructuredData({ siteUrl }: StructuredDataProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Gomanic Россия",
    "description": "Профессиональный маникюр с независимыми специалистами",
    "url": siteUrl,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "serviceType": ["Маникюр", "Педикюр", "Nail Art", "Обучение маникюру"],
    "priceRange": "$$",
    "sameAs": ["https://t.me/gomanicteam"],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}#agendamento`
      },
      "result": {
        "@type": "Reservation",
        "name": "Бронирование маникюра"
      }
    }
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
