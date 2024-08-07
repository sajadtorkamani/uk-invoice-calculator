import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from "./Footer";

const Root: React.FC = () => (
  <>
    <Header />
    <main className="site-content">
      <Outlet />
    </main>
    <Footer />
  </>
)

export default Root
