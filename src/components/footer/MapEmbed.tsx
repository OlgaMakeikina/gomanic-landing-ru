import { mapEmbedUrl } from './data'

interface MapEmbedProps {
  isVisible: boolean
}

export default function MapEmbed({ isVisible }: MapEmbedProps) {
  if (!isVisible) return null

  return (
    <div className="w-full h-48 rounded-lg overflow-hidden mt-4 relative" style={{
      border: '1px solid rgba(254, 254, 254, 0.3)',
      backgroundColor: 'rgba(254, 254, 254, 0.05)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
    }}>
      <iframe 
        src={mapEmbedUrl}
        width="100%" 
        height="100%" 
        style={{border: 0, borderRadius: '8px'}} 
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
