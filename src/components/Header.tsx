import React from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from 'react-router-dom'

import { APP_NAME, ROUTES } from '../lib/constants'

const Header: React.FC = () => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Link to={ROUTES.home} className="navbar-brand">
        {APP_NAME}
      </Link>
    </Container>
  </Navbar>
)

export default Header
