export default function VipBadge() {
  return (
    <div className="ml-4 text-xs px-4 py-2 relative backdrop-blur-xl rounded-full border border-white border-opacity-40"
         style={{
           background: 'linear-gradient(135deg, rgba(245, 228, 230, 0.95) 0%, rgba(245, 228, 230, 0.8) 100%)',
           color: '#3B3B3A',
           boxShadow: '0 8px 32px rgba(245, 228, 230, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
           fontWeight: 700,
           letterSpacing: '0.1em',
           animation: 'pulse 2s ease-in-out infinite'
         }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/15 to-transparent rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-black/5 via-transparent to-black/3 rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 rounded-full"
           style={{
             background: 'linear-gradient(135deg, rgba(245, 228, 230, 0.3) 0%, rgba(245, 228, 230, 0.1) 100%)',
             animation: 'glow 1.5s ease-in-out infinite alternate'
           }}></div>
      <span className="relative z-10">3 МЕСТА</span>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes glow {
          0% { opacity: 0.8; box-shadow: 0 0 20px rgba(245, 228, 230, 0.5); }
          100% { opacity: 1; box-shadow: 0 0 30px rgba(245, 228, 230, 0.8), 0 0 40px rgba(245, 228, 230, 0.3); }
        }
      `}</style>
    </div>
  )
}
