import css from '../MailBox/MailBox.module.css'


const MailBox = ({boxtitle, mailBoxCount, boxUsers}) => {
  return (
    <div className={css.mailbox}>
      <h2 className={css.title}>{boxtitle}</h2>
      {mailBoxCount === 0 ? <p>Сейчас нет активных ячеек</p> : <p>Количество активных ячеек: {mailBoxCount}</p> }
      <ul>
        {Array.isArray(boxUsers) && boxUsers.map(user => {
        return <li key={user.id}>{user.userEmail}</li>
        })}
      </ul>
    </div>
  )
}

export default MailBox