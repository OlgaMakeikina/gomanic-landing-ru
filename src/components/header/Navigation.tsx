import { NavigationProps } from './types'

export default function Navigation({ items, className = '' }: NavigationProps) {
  return (
    <nav className={`hidden lg:flex items-center space-x-6 ${className}`}>
      {items.map((item, index) => (
        <a 
          key={index}
          href={item.href} 
          className="vogue-caption hover:opacity-70 transition-opacity px-3 py-2 text-xs whitespace-nowrap" 
          style={{color: '#3B3B3A', fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600}}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
