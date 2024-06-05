
import './App.css'
import MailBox from './components/MailBox/MailBox'
import MeestExpressUsers from '../meest.json'
import NovaPoshta from '../nova.json'
import UkrPoshta from '../Ukr.json'
import DrinksCounter from './components/DrinksCounter/DrinksCounter'
import DrinksValues from './components/DrinksValues/DrinksValues'


function App() {

  const handleClick = () => {
    console.log('hello word');
  }

  const handleLogDrink = (drinkName) => {
console.log(drinkName);
  }

  return (
    
    <div>
      {/* <MailBox boxtitle='Meest Express' mailBoxCount={5} users={MeestExpressUsers} />
      <MailBox boxtitle='Nova Poshta' mailBoxCount={3} users={NovaPoshta} />
      <MailBox boxtitle='Ukr Poshta' mailBoxCount={0} users={UkrPoshta} /> */}
      <DrinksValues drinks={{beer: 3, whisky: 2, wine: 1}} />
      <DrinksCounter handleLogDrink={handleLogDrink} />
    </div>
  )
}

export default App
