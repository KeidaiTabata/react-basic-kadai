interface Props {
    buttonLabel:string,
    onClick: () => void
}

export default function CounterButton(props: Props) {
  return (
    <div>
        <button onClick={props.onClick}>{props.buttonLabel}</button>
    </div>
  )
}
