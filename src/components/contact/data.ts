export const serviceOptions = [
  { value: '', label: 'Escolha o serviço' },
  { value: 'manicure', label: 'Manicure sem esmaltação', price: 'R$ 50' },
  { value: 'manicure-gel', label: 'Manicure + gel', price: 'R$ 100' },
  { value: 'manicure-gel-fortalecimento', label: 'Manicure + gel + fortalecimento', price: 'R$ 130' }
]

export const timeOptions = [
  { value: '', label: 'Escolha o horário' },
  { value: '09:00', label: '09:00' },
  { value: '10:00', label: '10:00' },
  { value: '11:00', label: '11:00' },
  { value: '14:00', label: '14:00' },
  { value: '15:00', label: '15:00' },
  { value: '16:00', label: '16:00' },
  { value: '17:00', label: '17:00' }
]

export const initialFormData = {
  name: '',
  phone: '',
  service: '',
  date: '',
  time: ''
}
