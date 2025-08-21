import { ContactFormProps } from './types'
import { serviceOptions, timeOptions } from './data'
import FormField from './FormField'
import SubmitButton from './SubmitButton'

export default function ContactForm({ formData, onFormDataChange, onSubmit }: ContactFormProps) {
  const updateFormData = (field: keyof typeof formData, value: string) => {
    onFormDataChange({ ...formData, [field]: value })
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <FormField
        label="NOME COMPLETO"
        type="text"
        value={formData.name}
        onChange={(value) => updateFormData('name', value)}
        placeholder="Seu nome completo"
        required
      />
      
      <FormField
        label="TELEFONE/WHATSAPP"
        type="tel"
        value={formData.phone}
        onChange={(value) => updateFormData('phone', value)}
        placeholder="(11) 99999-9999"
        required
      />
      
      <FormField
        label="SERVIÇO DESEJADO"
        type="select"
        value={formData.service}
        onChange={(value) => updateFormData('service', value)}
        options={serviceOptions}
        required
      />
      
      <div className="grid md:grid-cols-2 gap-8">
        <FormField
          label="DATA PREFERIDA"
          type="date"
          value={formData.date}
          onChange={(value) => updateFormData('date', value)}
          required
        />
        
        <FormField
          label="HORÁRIO PREFERIDO"
          type="select"
          value={formData.time}
          onChange={(value) => updateFormData('time', value)}
          options={timeOptions}
          required
        />
      </div>
      
      <SubmitButton />
    </form>
  )
}
