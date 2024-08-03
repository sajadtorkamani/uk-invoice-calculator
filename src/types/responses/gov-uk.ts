export interface BankHolidaysResponse {
  'england-and-wales': {
    events: Event[]
  }
}

export interface Event {
  title: string
  date: string
  notes: string
  bunting: boolean
}
