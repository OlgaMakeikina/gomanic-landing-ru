import { socialLinks, contactsInfo } from './data'
import ContactIcon from './ContactIcon'

export default function SocialLinks() {
  return (
    <div className="lg:col-span-6 text-center">
      <div className="mb-8">
        <h3 className="text-xs uppercase tracking-wider mb-6 font-bold" 
            style={{color: '#FEFEFE', letterSpacing: '0.15em'}}>
          {contactsInfo.subtitle}
        </h3>
        <div className="w-24 h-px mx-auto mb-6" 
             style={{backgroundColor: '#FEFEFE', opacity: 0.3}}>
        </div>
        <p className="text-sm leading-relaxed mb-8 max-w-md mx-auto" 
           style={{color: '#FEFEFE', lineHeight: '1.6'}}>
          {contactsInfo.title}
        </p>
        
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link, index) => (
            <ContactIcon key={index} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}
