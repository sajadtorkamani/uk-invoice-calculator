import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import FormGroup from '../components/FormGroup'
import PageTitle from '../components/PageTitle'
import { APP_NAME } from '../lib/constants'

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>{APP_NAME} - About</title>
    </Helmet>

    <Container>
      <PageTitle>Generate UK invoice</PageTitle>

      <form action="" css={{ maxWidth: '400px' }}>
        <FormGroup>
          <label htmlFor="dayRate" className="form-label">
            Day rate
          </label>

          <input type="number" id="dayRate" className="form-control" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="dayRate" className="form-label">
            Number of days worked
          </label>

          <input type="number" id="dayRate" className="form-control" />
        </FormGroup>

        <FormGroup className="d-flex gap-2 align-items-center">
          <input type="checkbox" id="vat" className="form-check" />
          <label htmlFor="vat" className="form-check-label">
            Add 20% VAT?
          </label>
        </FormGroup>

        <hr className="my-4" />

        <Table striped className="mb-4">
          <tbody>
            <tr>
              <td>Subtotal</td>

              <td>TODO</td>
            </tr>

            <tr>
              <td>VAT (20%</td>
              <td>TODO</td>
            </tr>

            <tr>
              <td className="fw-bold">Total</td>
              <td className="fw-bold">TODO</td>
            </tr>
          </tbody>
        </Table>

        <Button size="lg">Generate</Button>
      </form>
    </Container>
  </>
)

export default Home
