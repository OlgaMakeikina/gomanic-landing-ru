export interface ProcessStep {
  number: string
  title: string
  description: string
  details: string
  security: string
  image: string
}

export interface ProcessStepCardProps {
  step: ProcessStep
  index: number
}

export interface ProcessTimelineProps {
  steps: ProcessStep[]
}
