import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

export function Counter() {

    const [count, setCount] = useState<number>(0);

    const hundleIncrement = () => {
        setCount(prev => prev + 1);
    }
    const hundleDecrement = () => {
        setCount(prev => prev - 1);
    }
  return (
    <div>
        <h2>カウンターアプリ</h2>
        <CounterDisplay count={count}/>
        <CounterButton buttonLabel="+" onClick={hundleIncrement}/>
        <CounterButton buttonLabel="-" onClick={hundleDecrement}/>
    </div>
  )
}
