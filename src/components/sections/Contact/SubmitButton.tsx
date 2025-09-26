export default function SubmitButton() {
  return (
    <div className="text-center pt-8">
      <button
        type="submit"
        className="px-16 py-6 transition-all duration-300 vogue-btn"
        style={{
          backgroundColor: '#FEFEFE',
          color: '#444e55',
          border: 'none',
          fontFamily: 'Manrope, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = '#FEFEFE'
          e.currentTarget.style.border = '1px solid #FEFEFE'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FEFEFE'
          e.currentTarget.style.color = '#444e55'
          e.currentTarget.style.border = 'none'
        }}
      >
        ЗАПИСАТЬСЯ
      </button>
    </div>
  )
}
