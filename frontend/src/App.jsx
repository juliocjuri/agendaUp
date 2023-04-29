import { useState } from 'react'
import './App.css'
import MySchedules from './pages/Private/MySchedules'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MySchedules />
    </>
  )
}

export default App
