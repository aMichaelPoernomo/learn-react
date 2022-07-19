import MyItem from './Item'

function Garage(props) {
  const { title, carList } = props
  return (
    <div>
      {title && <div>this is {title}</div>}
      {carList.length > 0 ? carList.map(car => <MyItem key={`${title}.${car}`} name={car} />) : <div>empty</div>}
    </div>
  )
}

export default Garage
