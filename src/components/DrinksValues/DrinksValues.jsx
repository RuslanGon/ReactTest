
// drinks = {beer: 3, whisky: 2, wine: 1}

const DrinksValues = ({drinks, drinksTotal}) => {

  return (
    <div>
        <ul>
            <li>Beer: {drinks.beer} </li>
            <li>Whisky: {drinks.whisky}</li>
            <li>Wine: {drinks.wine}</li>
            <li>Total: {drinksTotal}</li>
        </ul>
    </div>
  )
}

export default DrinksValues