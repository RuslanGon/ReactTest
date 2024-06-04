
import './App.css'
import MailBox from './components/MailBox/MailBox'

function App() {

  return (
    <div>
      <MailBox boxtitle='Meest Express' mailBoxCount={5} />
      <MailBox boxtitle='Nova Poshta' mailBoxCount={3} />
      <MailBox boxtitle='Ukr Poshta' mailBoxCount={0} />
    </div>
  )
}

export default App
