export default function GalleryHeader() {
  return (
    <header className="text-center mb-16">
      <p className="text-[#444e55] font-[Manrope] text-sm font-normal tracking-[0.22em] uppercase opacity-85 mb-3">РЕЗУЛЬТАТЫ</p>
      <h2 id="gallery-heading" className="text-2xl lg:text-4xl text-[#444e55] mb-6 font-medium font-[DrukWideCyr-Super] tracking-[0.12em] uppercase leading-tight">
        ПОРТФОЛИО<br className="md:hidden" /> МАСТЕРА</h2>
      <p className="text-base text-[#444e55] max-w-2xl mx-auto leading-relaxed font-[Manrope] md:whitespace-nowrap">
        Мастер воспроизведёт тот же уровень <br className="md:hidden" /><strong>блеска и совершенства</strong> на ваших руках.
      </p>
    </header>
  )
}
