import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Header } from './components/Header'
import SectionOne from './components/SectionOne/SectionOne'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SectionOne />
    </>
  )
}

export default App
