import Layout from 'common/components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routes from 'routes'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((routeProps, index) => (
            <Route key={`route-${index}`} {...routeProps} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
