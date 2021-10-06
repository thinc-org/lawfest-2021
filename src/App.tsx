import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((routeProps, index) => (
          <Route
            key={`route-${index}`}
            exact
            path={routeProps.path}
            component={routeProps.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
