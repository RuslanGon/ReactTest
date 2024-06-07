
import './App.css'
import MailBox from './components/MailBox/MailBox'
import MeestExpressUsers from '../meest.json'
// import NovaPoshta from '../nova.json'
// import UkrPoshta from '../Ukr.json'
import DrinksCounter from './components/DrinksCounter/DrinksCounter'
import DrinksValues from './components/DrinksValues/DrinksValues'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import MailBoxForm from './components/MailBoxForm/MailBoxForm'


function App() {

  const initialDrinks = {beer: 0, whisky: 0, wine: 0}
  
  const [users, setUsers] = useState(() => {
    const stringiUsers = localStorage.getItem('users')
    if(!stringiUsers) return MeestExpressUsers
    const parseUsers = JSON.parse(stringiUsers)
    return parseUsers
  })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  },[users])

const onAddUser = (formData) => {
  const finalUser = {
    ...formData,
    id: nanoid(),
  };

  // setUsers([...users, finalUser])
  setUsers((prevState) => [...prevState, finalUser]);
};

const onDeleteUser = (userId) => {
setUsers(prevUsers => prevUsers.filter(user => user.id !==  userId))
}

  const [counter, setCounter] = useState(0)
  const [drinks, setDrinks] = useState(() => {
  const stringyDrinks = localStorage.getItem('drinksValues')
  const parseDrinks = JSON.parse(stringyDrinks) ?? initialDrinks
  return parseDrinks
  })
  

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

  const handleReset = () => {
    setDrinks({beer: 0, whisky: 0, wine: 0})
  }

  const [isVisibleBar, setIsVisibleBar] = useState(false);
  const toglleBarViseble = () => {
    setIsVisibleBar(!isVisibleBar);
  };

  const [filter, setFilter] = useState('')

  const onChangeFilter = (event) => {
setFilter(event.target.value)
  }

  const filterUsers = users.filter((user) =>
    user.userName.toLowerCase().includes(filter.toLowerCase()) ||
    user.userEmail.toLowerCase().includes(filter.toLowerCase())
  );


 useEffect(() => {
localStorage.setItem('drinksValues', JSON.stringify(drinks))
 }, [drinks])

  return (
    <div>
      {/* <MailBox boxtitle='Meest Express' mailBoxCount={5} users={MeestExpressUsers} /> */}
      {/* <MailBox boxtitle='Nova Poshta' mailBoxCount={3} users={NovaPoshta}  /> */}
      {/* <MailBox boxtitle='Ukr Poshta' mailBoxCount={0} users={UkrPoshta} /> */}

      <button onClick={toglleBarViseble}>{isVisibleBar ? 'Hide' : 'Show'} mini-bar</button>
      <br />
      {isVisibleBar && <>
      <button onClick={handleIncrementCounter}>increment {counter}</button>
      <button onClick={handleDecrementCounter}>decrement</button>
      <DrinksValues drinks={drinks} total={drinksTotal}  />
      <DrinksCounter handleLogDrink={handleLogDrink} toglleBarViseble={toglleBarViseble}          handleReset={handleReset} drinksTotal={drinksTotal} />
      </>}
      <br />
      <MailBoxForm onAddUser={onAddUser} />
      <section>
        <h2>Search by name or email</h2>
        <input type="text" name="" placeholder='Search' value={filter} onChange={onChangeFilter} />
      </section>
      <MailBox boxtitle='Meest Express' mailBoxCount={3} users={filterUsers} onDeleteUser={onDeleteUser} />
    </div>
  )
}

export default App
