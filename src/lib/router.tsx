import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import Root from '../components/Root'
import Home from '../routes/home/Home'
import { ROUTES } from './constants'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path={ROUTES.home} index element={<Home />} />
    </Route>,
  ),
)
