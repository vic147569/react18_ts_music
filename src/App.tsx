import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'

import routes from './router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import '@/service2/modules/home'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
