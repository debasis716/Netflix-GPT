import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Component/Body'
import Header from './Component/Header'
import { Provider } from 'react-redux'
import appStore from './Utility/appStore'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={appStore}>
        <Body />
        </Provider>
    </>
  )
}

export default App
