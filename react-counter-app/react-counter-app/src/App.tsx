import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
    </>
  )
}
