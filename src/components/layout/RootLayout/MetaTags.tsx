interface MetaTagsProps {
  themeColor?: string;
  tileColor?: string;
  appTitle?: string;
}

export default function MetaTags({ 
  themeColor = "#FEFEFE", 
  tileColor = "#FEFEFE",
  appTitle = "Gomanic"
}: MetaTagsProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      <link rel="icon" type="image/x-icon" href="/icons/favicon.ico?v=2" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=2" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=2" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=2" />
      <link rel="manifest" href="/icons/site.webmanifest?v=2" />
      <meta name="theme-color" content={themeColor} />
      <meta name="msapplication-TileColor" content={tileColor} />
      <meta name="msapplication-config" content="/icons/browserconfig.xml" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={appTitle} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
    </>
  );
}
