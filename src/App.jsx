
import './App.css'
import MailBox from './components/MailBox/MailBox'
import MeestExpressUsers from '../meest.json'
import NovaPoshta from '../nova.json'
import UkrPoshta from '../Ukr.json'
import DrinksCounter from './components/DrinksCounter/DrinksCounter'
import DrinksValues from './components/DrinksValues/DrinksValues'
import { useState } from 'react'


function App() {

  // const initialDrinks = {beer: 3, whisky: 2, wine: 1}

  const [counter, setCounter] = useState(0)
  const [drinks, setDrinks] = useState({beer: 0, whisky: 0, wine: 0})

  const handleIncrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleDecrementCounter = () => {
    if(counter === 0)return
    setCounter(counter -1)
  }

  const handleLogDrink = (drinkName) => {
    if(drinks[drinkName] === 4 && drinkName === 'beer')return
setDrinks({ ...drinks, [drinkName] : drinks[drinkName] + 1 })
  }

  const drinksTotal = drinks.beer + drinks.whisky + drinks.wine

  const [isVisibleBar, setIsVisibleBar] = useState(false);
  const toglleBarViseble = () => {
    setIsVisibleBar(!isVisibleBar);
  };

  return (
    
    <div>
      <MailBox boxtitle='Meest Express' mailBoxCount={5} users={MeestExpressUsers} />
      <MailBox boxtitle='Nova Poshta' mailBoxCount={3} users={NovaPoshta} />
      <MailBox boxtitle='Ukr Poshta' mailBoxCount={0} users={UkrPoshta} />

      <button onClick={toglleBarViseble}>{isVisibleBar ? 'Hide' : 'Show'}Show mini-bar</button>

      {isVisibleBar && <>
      <button onClick={handleIncrementCounter}>increment {counter}</button>
      <button onClick={handleDecrementCounter}>decrement</button>
      <DrinksValues drinks={drinks} drinksTotal={drinksTotal}  />
      <DrinksCounter handleLogDrink={handleLogDrink} />
      </>}
      
    </div>
  )
}

export default App
