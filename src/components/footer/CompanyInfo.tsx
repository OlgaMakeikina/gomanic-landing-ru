import { companyData } from './data'

export default function CompanyInfo() {
  return (
    <div className="mt-16 pt-8 border-t" style={{borderTopColor: 'rgba(254, 254, 254, 0.2)'}}>
      <div className="text-xs uppercase tracking-wider mb-8 text-center" style={{color: '#FEFEFE', letterSpacing: '0.15em'}}>ДАННЫЕ КОМПАНИИ</div>
      <div className="w-16 h-px mb-8 mx-auto" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {companyData.map((item, index) => (
          <div key={index}>
            <div className="text-xs uppercase tracking-wider mb-2" style={{color: '#FEFEFE', opacity: 0.7}}>
              {item.label}
            </div>
            <div style={{
              color: '#FEFEFE',
              fontFamily: 'Garet, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 1.4
            }}>
              {item.value.split('\n').map((line, lineIndex) => (
                lineIndex === 0 ? line : <><br key={lineIndex} />{line}</>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
