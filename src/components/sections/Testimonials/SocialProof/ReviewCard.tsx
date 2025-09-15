interface ReviewCardProps {
  screenshot: string;
  index: number;
}

export default function ReviewCard({ screenshot, index }: ReviewCardProps) {
  return (
    <div 
      className="relative group cursor-pointer w-full max-w-md"
      style={{
        background: 'rgba(59, 59, 58, 0.08)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(59, 59, 58, 0.15)',
        borderRadius: '16px',
        boxShadow: '0 20px 40px rgba(59, 59, 58, 0.1)',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.boxShadow = '0 32px 64px rgba(59, 59, 58, 0.15)'
        e.currentTarget.style.borderColor = 'rgba(59, 59, 58, 0.25)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 59, 58, 0.1)'
        e.currentTarget.style.borderColor = 'rgba(59, 59, 58, 0.15)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-gray-500/2 to-transparent rounded-2xl"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-gray-600/8 via-transparent to-gray-600/5 rounded-2xl"></div>
      
      <div className="relative z-10">
        <img 
          src={screenshot} 
          alt={`Скриншот отзыва ${index + 1}`}
          className="w-full h-full object-cover rounded-lg"
          style={{ 
            transition: 'transform 0.3s ease'
          }}
        />
      </div>
    </div>
  );
}
