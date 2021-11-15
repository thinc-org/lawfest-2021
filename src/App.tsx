import Layout from 'common/components/Layout'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  )
}

export default App
