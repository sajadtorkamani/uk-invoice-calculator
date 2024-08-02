import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'

import PageTitle from '../components/PageTitle'
import { APP_NAME } from '../lib/constants'

const About: React.FC = () => (
  <>
    <Helmet>
      <title>{APP_NAME} - About</title>
    </Helmet>

    <Container>
      <PageTitle>About</PageTitle>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, est
        facere fugiat harum incidunt inventore laborum magnam, magni numquam
        odio possimus quas quidem quisquam quo ratione repellendus sequi
        voluptatem voluptates.
      </p>
    </Container>
  </>
)

export default About
