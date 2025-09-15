export const serviceOptions = [
  { value: '', label: 'Выберите услугу' },
  { value: 'manicure-basic', label: 'Маникюр без покрытия + снятие геля-лака', price: '600 ₽' },
  { value: 'manicure-gel', label: 'Маникюр + гель-лак + снятие', price: '1200 ₽' },
  { value: 'manicure-gel-strengthening', label: 'Маникюр + гель-лак + укрепление гелем + снятие', price: '1600 ₽' },
  { value: 'extension-manicure-gel', label: 'Наращивание/коррекция + маникюр + гель-лак', price: '1800 ₽' }
]

export const timeOptions = [
  { value: '', label: 'Выберите время' },
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
