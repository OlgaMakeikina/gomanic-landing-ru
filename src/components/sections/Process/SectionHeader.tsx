import { HorizonText } from '@/components/common/ui'

export default function SectionHeader() {
  return (
    <div className="text-center mb-20">
      <div className="vogue-caption mb-4" style={{ color: '#FEFEFE', fontFamily: "Manrope, sans-serif", fontSize: 14, opacity: 0.85 }}>ПРОЦЕСС</div>
      <HorizonText as="h2" id="process-heading" className="vogue-subhead mb-8" style={{color: '#FEFEFE'}}>КАК ЭТО РАБОТАЕТ</HorizonText>
      <div className="w-20 h-px mx-auto mb-8" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
      <p className="vogue-body max-w-3xl mx-auto text-lg" style={{color: '#FEFEFE', opacity: 0.9}}>
        3 простых шага для получения идеального маникюра 
      </p>
    </div>
  )
}
