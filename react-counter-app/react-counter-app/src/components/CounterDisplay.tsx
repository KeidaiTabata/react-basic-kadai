interface props {
    count: number
}

export default function CounterDisplay(props: props) {
  return (
    <div>
        <p>現在のカウント:{props.count}</p>        
    </div>
  )
}
