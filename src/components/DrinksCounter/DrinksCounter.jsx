import { useEffect } from "react"

const DrinksCounter = ({handleLogDrink, toglleBarViseble, handleReset, drinksTotal}) => {

  useEffect(() => {

const onKeyDown = (event) => {
if(event.code === 'Escape')
  toglleBarViseble()
}
window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [toglleBarViseble])

  return (
    <div>
        <button onClick={() => handleLogDrink('beer')}>Beer 🍺</button>
        <button onClick={() => handleLogDrink('whisky')}>whisky 🥃</button>
        <button onClick={() => handleLogDrink('wine')}>Wine 🍷</button>
        {drinksTotal !== 0 && <button onClick={handleReset}>Reset</button> }
        
    </div>
  )
}

export default DrinksCounter