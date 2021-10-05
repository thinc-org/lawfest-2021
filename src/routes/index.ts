import { RouteProps } from 'react-router-dom'
import Example from 'pages/example'

const routes: RouteProps[] = [
  {
    path: '/',
    component: Example,
    exact: true,
  },
]

export default routes
