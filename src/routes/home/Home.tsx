import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import CheckboxInput from '../../components/form/CheckboxInput'
import FormGroup from '../../components/form/FormGroup'
import MoneyInput from '../../components/form/MoneyInput'
import TextInput from '../../components/form/TextInput'
import PageTitle from '../../components/PageTitle'
import { APP_NAME } from '../../lib/constants'
import calendarService from '../../lib/services/calendarService'
import invoiceService from '../../lib/services/invoiceService'
import Results from './components/Results'

export interface InvoiceFormValues {
  dayRate: number
  hoursPerDay: number
  numberOfDays: number
  vat: boolean
}

export interface InvoiceResults {
  hoursWorked: number
  subtotal: number
  vat: number
  total: number
}

const InvoiceFormFields: Record<keyof InvoiceFormValues, string> = {
  dayRate: 'dayRate',
  hoursPerDay: 'hoursPerDay',
  numberOfDays: 'numberOfDays',
  vat: 'vat',
}

const Home: React.FC = () => {
  const [results, setResults] = useState<InvoiceResults | undefined>()
  const numDaysInCurrentMonth =
    calendarService.getNumWorkingDaysInCurrentMonth()

  const initialValues: InvoiceFormValues = {
    dayRate: 400,
    hoursPerDay: 7.5,
    numberOfDays: numDaysInCurrentMonth,
    vat: false,
  }

  function handleSubmit(values: InvoiceFormValues) {
    setResults(invoiceService.getResults(values))
  }

  return (
    <>
      <Helmet>
        <title>{APP_NAME} - About</title>
      </Helmet>

      <Container>
        <PageTitle>UK Invoice calculator</PageTitle>

        <p className="mb-4">
          Enter your details below to get a summary of how much you should
          invoice your clients for.
        </p>

        <div css={{ maxWidth: '400px' }}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <FormGroup>
                <MoneyInput label="Day rate" name={InvoiceFormFields.dayRate} />
              </FormGroup>

              <FormGroup>
                <TextInput
                  label="Hours per day"
                  name={InvoiceFormFields.hoursPerDay}
                  type="number"
                />
              </FormGroup>

              <FormGroup>
                <TextInput
                  label="Days worked"
                  name={InvoiceFormFields.numberOfDays}
                  type="number"
                />
              </FormGroup>

              <FormGroup className="d-flex gap-2 align-items-center">
                <CheckboxInput
                  name={InvoiceFormFields.vat}
                  label="Add 20% VAT?"
                />
              </FormGroup>

              <hr className="my-4" />

              <Button size="lg" type="submit">
                Generate
              </Button>
            </Form>
          </Formik>

          {results && (
            <>
              <hr className="my-4" />
              <Results results={results} />
            </>
          )}
        </div>
      </Container>
    </>
  )
}

export default Home
