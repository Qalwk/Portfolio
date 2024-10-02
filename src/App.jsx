import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero/Hero'
import Stack from './Components/Stack/Stack'
import Help from './Components/Help/Help'
import Portfolio from './Components/Portfolio/Portfolio'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Hero/>
      <Stack />
      <Help />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
