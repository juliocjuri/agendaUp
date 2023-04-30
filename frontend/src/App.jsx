import { useState } from 'react'
import './App.css'

import Login from './pages/Login'
import Home from './pages/Private/Home'
import MySchedules from './pages/Private/MySchedules'

import { Routes, Route, BrowserRouter, } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<MySchedules />} path="/myschedules" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
