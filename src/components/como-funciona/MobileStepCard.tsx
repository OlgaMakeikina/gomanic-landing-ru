import { ProcessStepCardProps } from './types'

export default function MobileStepCard({ passo, index }: ProcessStepCardProps) {
  return (
    <div className="relative mb-12 last:mb-0 pl-20">
      <div className="absolute left-0 top-4">
        <div className="flex items-center justify-center w-16 h-16 rounded-full text-xl relative backdrop-blur-xl border border-white border-opacity-40"
             style={{
               background: 'rgba(254, 254, 254, 0.25)',
               color: '#444e55',
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
             }}>
          <span className="relative z-10 font-bold text-xl">{passo.numero}</span>
        </div>
      </div>
      
      <div className="backdrop-blur-xl rounded-2xl p-6 border border-white border-opacity-20 relative"
           style={{
             background: 'rgba(254, 254, 254, 0.08)',
             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
           }}>
        <div className="relative z-10">
          <div className="md:flex md:items-start md:gap-6">
            <div className="mb-4 md:mb-0 rounded-xl overflow-hidden md:w-40 md:h-40 md:flex-shrink-0"
                 style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'}}>
              <img src={passo.imagem} alt={passo.titulo} className="w-full h-full object-cover" />
            </div>
            <div className="md:flex-1">
              <h3 className="vogue-caption mb-3" style={{color: '#FEFEFE'}}>{passo.titulo}</h3>
              <p className="vogue-body text-base mb-3" style={{color: '#FEFEFE', fontWeight: 600}}>{passo.descricao}</p>
              <p className="vogue-body text-sm mb-3" style={{color: '#FEFEFE', opacity: 0.9}}>{passo.detalhes}</p>
              {passo.seguranca && (
                <div className="mt-4 p-3 rounded-lg backdrop-blur-sm border border-white border-opacity-20" style={{background: 'rgba(254, 254, 254, 0.12)'}}>
                  <p className="text-xs text-center" style={{color: '#FEFEFE'}}>{passo.seguranca}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
