export interface ServiceItem {
  titulo: string
  precoNormal: string
  precoVIP: string
  inclui: string[]
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    titulo: "Гель-лак + снятие + маникюр",
    precoNormal: "2000 ₽",
    precoVIP: "999 ₽",
    inclui: [
      "Классическое покрытие гель-лаком",
      "Профессиональный маникюр",
      "Снятие старого покрытия",
    ],
  },
  {
    titulo: "Гель-лак + архитектура гелем + маникюр + снятие",
    precoNormal: "2700 ₽",
    precoVIP: "1299 ₽",
    inclui: [
      "Покрытие с укреплением",
      "Выравнивание ногтевой пластины",
      "Долговечное покрытие",
    ],
  },
  {
    titulo: "Наращивание ногтей + маникюр + снятие лака",
    precoNormal: "3500 ₽",
    precoVIP: "1799 ₽",
    inclui: [
      "Наращивание ногтей",
      "Профессиональный маникюр",
      "Снятие предыдущего покрытия",
    ],
  },
]