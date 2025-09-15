import { FormFieldProps } from './types'

export default function FormField({ label, type, value, onChange, placeholder, options, required = false }: FormFieldProps) {
  const fieldStyle = {
    color: '#FEFEFE',
    borderBottomColor: '#FEFEFE'
  }

  const selectStyle = {
    ...fieldStyle,
    backgroundColor: '#444e55'
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderBottomColor = '#FEFEFE'
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.borderBottomColor = '#FEFEFE'
  }

  if (type === 'select' && options) {
    return (
      <div>
        <label className="block vogue-caption mb-4" style={{color: '#FEFEFE'}}>{label}</label>
        <select
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-0 py-4 bg-transparent border-0 border-b focus:outline-none transition-colors vogue-body"
          style={selectStyle}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          {options.map((option, index) => (
            <option 
              key={index} 
              value={option.value} 
              style={{backgroundColor: '#444e55', color: '#FEFEFE'}}
            >
              {option.label} {option.price ? `- ${option.price}` : ''}
            </option>
          ))}
        </select>
      </div>
    )
  }

  return (
    <div>
      <label className="block vogue-caption mb-4" style={{color: '#FEFEFE'}}>{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-0 py-4 bg-transparent border-0 border-b focus:outline-none transition-colors vogue-body"
        style={fieldStyle}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  )
}
