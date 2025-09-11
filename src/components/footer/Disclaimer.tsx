import { MasterConfig } from '@/types/master'

interface DisclaimerProps {
  masterData?: MasterConfig | null
}

export default function Disclaimer({ masterData }: DisclaimerProps) {
  const masterName = masterData?.personal.name || '[ФИО мастера]'
  
  return (
    <div className="mt-8 pt-8 border-t border-white/20">
      <div className="text-center">
        <p className="text-sm text-white/70 leading-relaxed max-w-4xl mx-auto">
          <strong>Дисклеймер:</strong> GoManic — маркетинговая платформа. Услугу оказывает независимый мастер {masterName}. 
          Оплата и ответственность за качество услуги — у мастера. Изображения могут носить иллюстративный характер. 
          GoManic предоставляет клиентам поддержку по методике обучения: мы можем оценить работу мастера и дать рекомендации.
        </p>
      </div>
    </div>
  )
}
