import css from '../MailBoxList/MailBoxList.module.css'

const MailBoxList = ({users}) => {
  return (
    <ul className={css.list}>
        {Array.isArray(users) && users.map(user => {
        return <li key={user.id}>{user.userEmail}</li>
        })}
      </ul>
  )
}

export default MailBoxList