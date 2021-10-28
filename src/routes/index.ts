import { RouteProps } from 'react-router-dom'
import ComponentsDemo from 'pages/componentsDemo'
import PixiTesting from 'pages/game'
import Home from 'pages/home'
import ExhibitionContent from 'pages/exhibition/exhibitionContent'
import ExhibitionMenu from 'pages/exhibition/exhibitionMenu'

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
    component: ExhibitionMenu,
    exact: true,
  },
  {
    path: '/exhibition/:pageType',
    component: ExhibitionContent,
    exact: true,
  },
]

export default routes
