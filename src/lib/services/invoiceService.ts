import { InvoiceFormValues, InvoiceResults } from '../../routes/home/Home'

class InvoiceService {
  getResults(values: InvoiceFormValues): InvoiceResults {
    const dayRate = values.dayRate || 0
    const hoursPerDay = values.hoursPerDay || 0
    const numberOfDays = values.numberOfDays || 0

    const subtotal = dayRate * numberOfDays
    const vatValue = values.vat ? subtotal * 0.2 : 0

    return {
      hoursWorked: numberOfDays * hoursPerDay,
      subtotal,
      vat: vatValue,
      total: subtotal + vatValue,
    }
  }
}

const invoiceService = new InvoiceService()

export default invoiceService
