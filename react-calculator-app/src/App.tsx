import { useState } from 'react'
import './App.css'
import { Calculator } from './Calculator'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Calculator />   
    </div>
  )
}