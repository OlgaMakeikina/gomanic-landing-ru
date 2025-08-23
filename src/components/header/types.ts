export interface MenuItem {
  href: string
  label: string
  ariaLabel?: string
}

export interface LogoProps {
  className?: string
}

export interface NavigationProps {
  items: MenuItem[]
  className?: string
}

export interface MobileMenuProps {
  isOpen: boolean
  items: MenuItem[]
  onClose: () => void
}
