import { RouteProps } from 'react-router-dom'
import Example from 'pages/example'
import Game from 'pages/game'

const routes: RouteProps[] = [
  {
    path: '/',
    component: Example,
    exact: true,
  },
  {
    path: '/game',
    component: Game,
    exact: true,
  },
]

export default routes
