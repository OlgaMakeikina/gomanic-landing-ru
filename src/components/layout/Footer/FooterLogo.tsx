import { companyInfo } from './data'

export default function FooterLogo() {
  return (
    <div className="lg:col-span-6 text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-wider mb-6" 
            style={{
              fontFamily: 'DrukWideCyr-Super', 
              color: '#FEFEFE'
            }}>
          {companyInfo.name}
        </h2>
        <div className="w-24 h-px mx-auto mb-6" 
             style={{backgroundColor: '#FEFEFE', opacity: 0.3}}>
        </div>
        <p className="text-sm leading-relaxed max-w-2xl mx-auto" 
           style={{color: '#FEFEFE', lineHeight: '1.6'}}>
          {companyInfo.description}
        </p>
      </div>
    </div>
  )
}
