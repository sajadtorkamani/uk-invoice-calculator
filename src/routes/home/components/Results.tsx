import React from 'react'
import { Table } from 'react-bootstrap'

import { formatMoney } from '../../../lib/helpers'
import { InvoiceResults } from '../Home'

interface Props {
  results: InvoiceResults
}

const Results: React.FC<Props> = ({ results }) => {
  return (
    <Table striped className="mb-4">
      <tbody>
        <tr>
          <td>Hours worked</td>

          <td>{results.hoursWorked}</td>
        </tr>

        <tr>
          <td>Subtotal</td>

          <td>{formatMoney(results.subtotal)}</td>
        </tr>

        <tr>
          <td>VAT (20%)</td>
          <td>{formatMoney(results.vat)}</td>
        </tr>

        <tr>
          <td className="fw-bold">Total</td>
          <td className="fw-bold">{formatMoney(results.total)}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default Results
