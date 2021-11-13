import { RouteProps } from 'react-router-dom'
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
