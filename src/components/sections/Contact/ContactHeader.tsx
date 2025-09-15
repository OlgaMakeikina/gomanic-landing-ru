import { HorizonText } from '@/components/common/ui'

export default function ContactHeader() {
  return (
    <header className="text-center mb-20">
      <p className="vogue-caption mb-4" style={{ color: '#FEFEFE', fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.85 }}>БРОНИРОВАНИЕ</p>
      <HorizonText as="h2" id="contact-heading" className="vogue-subhead mb-8" style={{color: '#FEFEFE'}}>ЗАБРОНИРУЙТЕ ВРЕМЯ</HorizonText>
      <div className="vogue-divider-long mx-auto mb-8" style={{backgroundColor: '#FEFEFE', opacity: 0.3}} aria-hidden="true"></div>
      <p className="vogue-body" style={{color: '#FEFEFE'}}>Заполните форму и гарантируйте себе место со скидкой 50%</p>
    </header>
  )
}
