class CalendarService {
  getNumWorkingDaysInCurrentMonth(): number {
    const today = new Date()
    let numWorkingDays = 0
    const numDaysInMonth = this.getNumDaysInCurrentMonth()

    for (let day = 1; day <= numDaysInMonth; day++) {
      const date = new Date(today.getFullYear(), today.getMonth(), day)
      const isWeekend = date.getDay() === 0 || date.getDay() === 6

      if (!isWeekend) {
        numWorkingDays++
      }
    }

    return numWorkingDays
  }

  getNumDaysInCurrentMonth(): number {
    const today = new Date()
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0,
    )

    return lastDayOfMonth.getDate()
  }
}

const calendarService = new CalendarService()

export default calendarService
