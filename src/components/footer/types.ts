export interface SocialLink {
  href: string
  icon: string
  alt: string
  bgColor?: string
  bgGradient?: string
}

export interface FooterProps {
  showMap: boolean
  onToggleMap: () => void
}

export interface ContactIconProps {
  link: SocialLink
}

export interface FooterLogoProps {
  onCtaClick: () => void
}
