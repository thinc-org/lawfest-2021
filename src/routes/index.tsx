import { RouteProps } from 'react-router-dom'
import Game from 'pages/game'
import Home from 'pages/home'
import ExhibitionContent from 'pages/exhibition/exhibitionContent'
import ExhibitionMenu from 'pages/exhibition/exhibitionMenu'

const routes: RouteProps[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/exhibition',
    element: <ExhibitionMenu />,
  },
  {
    path: '/exhibition/:pageType',
    element: <ExhibitionContent />,
  },
]

export default routes
