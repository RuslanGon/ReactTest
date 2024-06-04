
import './App.css'
import MailBox from './components/MailBox/MailBox'

const MeestExpressUsers = [
  {id:'1', userEmail: 'Ruslan@Gmail.com', userName: 'Ruslan'},
  {id:'2', userEmail: 'Ira@gmail.com', userName: 'Ira'},
  {id:'3', userEmail: 'Lena@gmail.com', userName: 'Lena'},
]

const NovaPoshta =[
  {id:'4', userEmail: 'Roma@Gmail.com', userName: 'Roma'},
  {id:'5', userEmail: 'Igor@gmail.com', userName: 'Igor'},
  {id:'6', userEmail: 'Lena@gmail.com', userName: 'Lena'},
]

const UkrPoshta = [
  {id:'7', userEmail: 'Ola@Gmail.com', userName: 'Ola'},
  {id:'8', userEmail: 'Marina@gmail.com', userName: 'Marina'},
  {id:'9', userEmail: 'Gena@gmail.com', userName: 'Gena'},
]


function App() {

  return (
    <div>
      <MailBox boxtitle='Meest Express' mailBoxCount={5} boxUsers={MeestExpressUsers} />
      <MailBox boxtitle='Nova Poshta' mailBoxCount={3} boxUsers={NovaPoshta} />
      <MailBox boxtitle='Ukr Poshta' mailBoxCount={0} boxUsers={UkrPoshta} />
    </div>
  )
}

export default App
