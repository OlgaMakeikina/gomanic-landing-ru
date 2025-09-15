import { ContactIconProps } from './types'

export default function ContactIcon({ link }: ContactIconProps) {
  return (
    <a 
      href={link.href} 
      target={link.href.startsWith('http') ? "_blank" : undefined}
      rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
      className="hover:opacity-70 transition-all duration-300 transform hover:scale-110 w-14 h-14 flex items-center justify-center rounded-full flex-shrink-0" 
      style={{
        backgroundColor: 'rgba(254, 254, 254, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(254, 254, 254, 0.2)'
      }}
    >
      <img 
        src={link.icon} 
        alt={link.alt} 
        className="w-7 h-7" 
        style={{filter: 'brightness(0) invert(1)'}} 
      />
    </a>
  )
}
