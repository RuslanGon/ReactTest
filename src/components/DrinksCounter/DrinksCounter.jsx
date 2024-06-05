import { useEffect } from "react"

const DrinksCounter = ({handleLogDrink}) => {

  useEffect(() => {
    console.log('hello');
    return () => {
      console.log('bay');
    }
  }, [])

  return (
    <div>
        <button onClick={() => handleLogDrink('beer')}>Beer 🍺</button>
        <button onClick={() => handleLogDrink('whisky')}>whisky 🥃</button>
        <button onClick={() => handleLogDrink('wine')}>Wine 🍷</button>
    </div>
  )
}

export default DrinksCounter