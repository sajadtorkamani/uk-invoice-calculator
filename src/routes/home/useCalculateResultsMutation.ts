import { useMutation } from '@tanstack/react-query'

import invoiceService from '../../lib/services/invoiceService'
import { InvoiceFormValues, InvoiceResults } from './Home'

export function useCalculateResultsMutation() {
  return useMutation({
    mutationFn: async (values: InvoiceFormValues): Promise<InvoiceResults> => {
      return invoiceService.getResults(values)
    },
  })
}
