import { Link, useRoutes } from 'react-router-dom'
import { Suspense } from 'react'

import routes from './router'
import { appShallowEqual, useAppDispatch, useAppSelector } from './store'
import { changeMessageAction } from './store/modules/counter'

function App() {
  const { count, message, address } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      address: state.counter.address
    }),
    appShallowEqual
  )

  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    dispatch(changeMessageAction('AlohaAlohaAlohaAloha'))
  }

  return (
    <div className="App">
      <nav className="text-3xl">
        <Link to="/discover">Discover</Link>
        <Link to="/focus">Focus</Link>
        <Link to="/mine">Mine</Link>
        <Link to="/download">Download</Link>
      </nav>

      <h2>
        count: {count} message: {message} address: {address}
      </h2>
      <button onClick={handleChangeMessage}>Change Message</button>

      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
