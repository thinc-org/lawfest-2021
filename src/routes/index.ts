import { RouteProps } from 'react-router-dom'
import Example from 'pages/example'
import Game from 'pages/game'
import ComponentsDemo from 'pages/componentsDemo'
import PixiTesting from 'pages/pixi'

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
  {
    path: '/componentsDemo',
    component: ComponentsDemo,
    exact: true,
  },
  {
    path: '/pixi',
    component: PixiTesting,
    exact: true,
  },
]

export default routes
