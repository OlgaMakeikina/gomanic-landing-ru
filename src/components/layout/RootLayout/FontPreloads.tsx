export default function FontPreloads() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" 
        rel="stylesheet" 
      />
      <link 
        rel="preload" 
        href="/fonts/drukwidecyr-super.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
      <link 
        rel="preload" 
        href="/fonts/horizon.otf" 
        as="font" 
        type="font/otf" 
        crossOrigin="anonymous"
      />
      <link 
        rel="preload" 
        href="/fonts/druk-wide-super.ttf" 
        as="font" 
        type="font/ttf" 
        crossOrigin="anonymous"
      />
      <link 
        rel="preload" 
        href="/fonts/Garet-Book.otf" 
        as="font" 
        type="font/otf" 
        crossOrigin="anonymous"
      />
      <link 
        rel="preload" 
        href="/fonts/Garet-Heavy.otf" 
        as="font" 
        type="font/otf" 
        crossOrigin="anonymous"
      />
      <script src="/js/font-fallback.js" defer></script>
    </>
  );
}
