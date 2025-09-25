import { GLASS_STYLES } from './bookingData';

export default function SuccessMessage() {
  return (
    <div 
      className="relative backdrop-blur-xl rounded-2xl border overflow-hidden text-center"
      style={{ 
        background: GLASS_STYLES.cardBg, 
        borderColor: GLASS_STYLES.cardBorder, 
        boxShadow: GLASS_STYLES.cardShadow 
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/2 to-transparent rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tl from-black/30 via-transparent to-black/15 rounded-2xl" />
      
      <div className="relative z-10 p-8">
        <div className="text-green-400 mb-4" style={{
          fontFamily: 'Garet, sans-serif', 
          fontSize: 14,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontWeight: 600
        }}>
          ✅ ДАННЫЕ УСПЕШНО ОТПРАВЛЕНЫ!
        </div>
        <p style={{
          color: '#FEFEFE',
          fontFamily: 'Garet, sans-serif',
          fontSize: 16,
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Спасибо! Через несколько секунд вы будете перенаправлены на страницу онлайн-записи к мастеру.
        </p>
      </div>
    </div>
  );
}
