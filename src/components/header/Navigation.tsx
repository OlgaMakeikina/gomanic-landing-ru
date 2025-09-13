import { NavigationProps } from './types'

export default function Navigation({ items, className = '' }: NavigationProps) {
  return (
    <ul className={`hidden lg:flex items-center space-x-6 ${className}`} role="list">
      {items.map((item, index) => (
        <li key={index} role="listitem">
          <a 
            href={item.href} 
            className="hover:opacity-70 transition-opacity px-3 py-2 text-xs whitespace-nowrap" 
            style={{color: '#3B3B3A', fontSize: '13px', letterSpacing: '0.1em', fontWeight: 600, fontFamily: 'Manrope, sans-serif', textTransform: 'uppercase'}}
            aria-label={item.ariaLabel || item.label}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
