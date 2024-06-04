
import './App.css'
import MailBox from './components/MailBox/MailBox'
import MeestExpressUsers from '../meest.json'
import NovaPoshta from '../nova.json'
import UkrPoshta from '../Ukr.json'


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
