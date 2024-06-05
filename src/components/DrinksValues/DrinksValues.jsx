
const DrinksValues = ({drinks, total}) => {
  return (
    <div>
        <ul>
            <li>Beer: {drinks.beer} </li>
            <li>Whisky: {drinks.whisky}</li>
            <li>Wine: {drinks.wine}</li>
            <li>Total: {total}</li>
        </ul>
    </div>
  )
}

export default DrinksValues