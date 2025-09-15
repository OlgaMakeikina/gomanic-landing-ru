export interface FormData {
  name: string
  phone: string
  service: string
  date: string
  time: string
}

export interface FormFieldProps {
  label: string
  type: 'text' | 'tel' | 'date' | 'select'
  value: string
  onChange: (value: string) => void
  placeholder?: string
  options?: Array<{ value: string; label: string; price?: string }>
  required?: boolean
}

export interface ContactFormProps {
  formData: FormData
  onFormDataChange: (data: FormData) => void
  onSubmit: (e: React.FormEvent) => void
}
