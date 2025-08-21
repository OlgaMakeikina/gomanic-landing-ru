export interface ProcessStep {
  numero: string
  titulo: string
  descricao: string
  detalhes: string
  seguranca: string
  imagem: string
}

export interface ProcessStepCardProps {
  passo: ProcessStep
  index: number
}

export interface ProcessTimelineProps {
  passos: ProcessStep[]
}
