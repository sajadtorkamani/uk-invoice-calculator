import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import PageTitle from '../components/PageTitle'

const Home: React.FC = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <Container>
      <PageTitle>Home</PageTitle>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, est
        facere fugiat harum incidunt inventore laborum magnam, magni numquam
        odio possimus quas quidem quisquam quo ratione repellendus sequi
        voluptatem voluptates.
      </p>
    </Container>
  </>
)

export default Home
