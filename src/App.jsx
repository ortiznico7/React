import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <Card 
      image="https://static.wikia.nocookie.net/p__/images/2/25/Om_Nom.png/revision/latest?cb=20210907011744&path-prefix=protagonist"
      name="Nico Ortiz"
      city="Stamford"
      job="Synchrony DAE Member"
      />

      <Card 
      image="https://static.wikia.nocookie.net/p__/images/2/25/Om_Nom.png/revision/latest?cb=20210907011744&path-prefix=protagonist"
      name="Nico Ortiz"
      city="Stamford"
      job="Synchrony DAE Member"
      />
    </>
  )
}

export default App
