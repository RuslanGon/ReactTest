import css from '../MailBoxItem/MailBoxItem.module.css'

const MailBoxItem = ({user, onDeleteUser}) => {
  return (
    <>
    <p>email: {user.userEmail}</p>
    <p className={css.name}>name: <div style={{
      backgroundColor: user.favColor
    }} className={css.color}/> {user.userName}</p>
    <button type="button" onClick={() => onDeleteUser(user.id)}>delet user</button>
    </>
  )
}


export default MailBoxItem