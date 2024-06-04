
const MailBox = ({boxtitle, mailBoxCount}) => {
  return (
    <div>
      <h2>{boxtitle}</h2>
      {mailBoxCount === 0 ? <p>Сейчас нет активных ячеек</p> : <p>Количество активных ячеек: {mailBoxCount}</p> }
      <ul>
        <li>Ruslan@Gmail.com</li>
        <li>Ira@gmail.com</li>
        <li>Lena@gmail.com</li>
      </ul>
    </div>
  )
}

export default MailBox