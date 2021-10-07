import { RouteProps } from 'react-router-dom'
import ComponentsDemo from 'pages/componentsDemo'
import PixiTesting from 'pages/game'
import Home from 'pages/home'
import Exhibition from 'pages/exhibition'

const routes: RouteProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/componentsDemo',
    component: ComponentsDemo,
    exact: true,
  },
  {
    path: '/game',
    component: PixiTesting,
    exact: true,
  },
  {
    path: '/exhibition',
    component: Exhibition,
    exact: true,
  },
]

export default routes
