import { InvoiceFormValues, InvoiceResults } from '../../routes/home/Home'

class InvoiceService {
  getResults(values: InvoiceFormValues): InvoiceResults {
    const subtotal = values.dayRate * values.numberOfDays
    const vatValue = values.vat ? subtotal * 0.2 : 0

    return {
      subtotal,
      vat: vatValue,
      total: subtotal + vatValue,
    }
  }
}

const invoiceService = new InvoiceService()

export default invoiceService
