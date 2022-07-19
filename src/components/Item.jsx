const myStyle = {
  width: '100%',
}

export function Divider() {
  return <hr style={myStyle} />
}

function Item(props) {
  return <li>{props.name}</li>
}

export default Item
