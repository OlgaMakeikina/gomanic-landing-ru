import { socialLinks } from './data'
import ContactIcon from './ContactIcon'

export default function SocialLinks() {
  return (
    <div className="lg:col-span-3">
      <div className="text-xs uppercase tracking-wider mb-8 text-center" style={{color: '#FEFEFE', letterSpacing: '0.15em'}}>
        CONTATOS E REDES SOCIAIS
      </div>
      <div className="w-16 h-px mb-8 mx-auto" style={{backgroundColor: '#FEFEFE', opacity: 0.3}}></div>
      
      <div className="flex items-center gap-4 justify-center">
        {socialLinks.map((link, index) => (
          <ContactIcon key={index} link={link} />
        ))}
      </div>
    </div>
  )
}
