import { useState } from 'react'

import './App.css'
import { Divider } from './components/Item'
import Garage from './components/Garage'
import { cars } from './data/cars'

function App() {
  const [garage1, setGarage1] = useState(cars)
  const [garage2, setGarage2] = useState([])
  const [toggle, setToggle] = useState(true)

  const moveCar = () => {
    if (toggle) setGarage2([...garage2, garage1.pop()])
    else setGarage1([...garage1, garage2.pop()])
    if (garage1 <= 0) setToggle(false)
    if (garage2 <= 0) setToggle(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={moveCar}>move car</button>
        <Garage title="garage1" carList={garage1} />
        <Divider />
        <Garage title="garage2" carList={garage2} />
      </header>
    </div>
  )
}

export default App
