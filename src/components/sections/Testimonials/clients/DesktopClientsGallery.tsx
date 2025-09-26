'use client'

interface DesktopClientsGalleryProps {
  colors: {
    dark: string;
    white: string;
  };
}

export default function DesktopClientsGallery({ colors }: DesktopClientsGalleryProps) {
  const clientImages = [
    '/images/clients/0_0_4_1.jpeg',
    '/images/clients/0_1_13.jpeg', 
    '/images/clients/0_2_3_1.jpeg',
    '/images/clients/0_2_4.jpeg',
    '/images/clients/0_2_6_1.jpeg',
    '/images/clients/0_3_23.jpeg',
    '/images/clients/0_3_24.jpeg',
    '/images/clients/0_3_25_1.jpeg',
    '/images/clients/0_3_3_1.jpeg',
    '/images/clients/client1.jpeg',
    '/images/clients/client2.jpeg',
    '/images/clients/client2.jpeg',
    '/images/clients/13.jpeg'
  ]

  return (
    <div className="mx-auto max-w-6xl px-5 hidden md:block">
      <div className="grid gap-3 grid-cols-3 auto-rows-min">
        
        {/* Row 1 - три больших фото */}
        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[0]}
            alt="Довольная клиентка"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05) saturate(1.2)'}}
          />
        </figure>

        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[1]}
            alt="Клиентка"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05)'}}
          />
        </figure>

        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[2]}
            alt="Маникюр"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05)'}}
          />
        </figure>

        {/* Row 2 - большое фото, 4 малых фото, видео */}
        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[3]}
            alt="Результат"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05)'}}
          />
        </figure>

        <div className="aspect-square grid grid-cols-2 grid-rows-2 gap-3">
          <figure className="aspect-square overflow-hidden rounded-lg group">
            <img
              src={clientImages[4]}
              alt="Клиентка"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{filter: 'brightness(1.1) contrast(1.05)'}}
            />
          </figure>

          <figure className="aspect-square overflow-hidden rounded-lg group">
            <img
              src={clientImages[5]}
              alt="Процесс"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{filter: 'brightness(1.1) contrast(1.05)'}}
            />
          </figure>

          <figure className="aspect-square overflow-hidden rounded-lg group">
            <img
              src={clientImages[6]}
              alt="Красота"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{filter: 'brightness(1.1) contrast(1.05)'}}
            />
          </figure>

          <figure className="aspect-square overflow-hidden rounded-lg group">
            <img
              src={clientImages[7]}
              alt="Мастерство"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{filter: 'brightness(1.1) contrast(1.05)'}}
            />
          </figure>
        </div>

        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[11]}
            alt="Клиентка GOMANIC"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05)'}}
          />
        </figure>

        {/* Row 3 - три больших фото */}
        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[8]}
            alt="Довольная"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05)'}}
          />
        </figure>

        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[9]}
            alt="Стиль"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05)'}}
          />
        </figure>

        <figure className="aspect-square overflow-hidden rounded-lg group">
          <img
            src={clientImages[12]}
            alt="Результат работы"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{filter: 'brightness(1.1) contrast(1.05)'}}
          />
        </figure>

      </div>

      {/* CTA блок под сеткой */}
      <div className="mt-8 rounded-lg border shadow-2xl p-8 text-center relative overflow-hidden backdrop-blur-xl"
           style={{ 
             background:"rgba(68,78,85,.85)", 
             borderColor:"rgba(254,254,254,.4)",
             boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)"
           }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-transparent rounded-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-transparent to-black/10 rounded-lg"></div>
        
        <div className="relative z-10">
          <h4 className="uppercase tracking-[0.1em] mb-4"
              style={{ 
                color: colors.white, 
                fontFamily:"DrukWideCyr-Super, sans-serif", 
                fontWeight:700, 
                fontSize:20,
                textShadow: "0 2px 8px rgba(0,0,0,0.3)"
              }}>
            СТАНЬ СЛЕДУЮЩЕЙ ДОВОЛЬНОЙ КЛИЕНТКОЙ
          </h4>
          <button
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior:'smooth' })}
            className="rounded-lg px-8 py-4 font-semibold uppercase tracking-wider text-sm transition-all duration-300 transform hover:scale-110 shadow-xl"
            style={{ 
              background: "linear-gradient(135deg, rgba(254,254,254,0.95) 0%, rgba(254,254,254,0.85) 100%)", 
              color: colors.dark,
              border: "1px solid rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)"
            }}
          >
            ХОЧУ ПРИСОЕДИНИТЬСЯ
          </button>
        </div>
      </div>

    </div>
  );
}
