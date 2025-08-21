interface HeroTitleProps {
  title: string
  subtitle: string
  content?: string
}

export default function HeroTitle({ title, subtitle, content }: HeroTitleProps) {
  const titleParts = title.split(' × ')
  
  return (
    <>
      <div className="mb-8 lg:mb-12">
        {titleParts.length > 1 ? (
          <>
            <h1 style={{
              fontFamily: 'Horizon, Arial, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 'normal',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              color: '#FEFEFE',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              marginBottom: '0'
            }}>
              {titleParts[0]}
            </h1>
            <div style={{
              fontFamily: 'Horizon, Arial, sans-serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 'normal',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              lineHeight: '0.9',
              color: '#FEFEFE',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              marginTop: '-0.5rem'
            }}>
              {titleParts[1]}
            </div>
          </>
        ) : (
          <h1 style={{
            fontFamily: 'Horizon, Arial, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 'normal',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            lineHeight: '0.9',
            color: '#FEFEFE',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}>
            {title}
          </h1>
        )}
      </div>
      
      <div className="mb-6 lg:mb-8">
        <p style={{
          fontFamily: 'Garet, sans-serif',
          fontSize: 'clamp(1.2rem, 3vw, 2.25rem)',
          fontWeight: 600,
          color: '#FEFEFE',
          textShadow: '0 2px 10px rgba(0,0,0,0.4)',
          lineHeight: '1.2',
          marginBottom: '0'
        }}>
          {subtitle}
        </p>
      </div>
      
      {content && (
        <div className="mb-8 lg:mb-12">
          <p style={{
            fontFamily: 'Garet, sans-serif',
            fontSize: 'clamp(1rem, 2vw, 1.375rem)',
            fontWeight: 400,
            color: '#FEFEFE',
            opacity: 0.85,
            textShadow: '0 1px 5px rgba(0,0,0,0.3)',
            lineHeight: '1.5',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            {content}
          </p>
        </div>
      )}
    </>
  )
}
