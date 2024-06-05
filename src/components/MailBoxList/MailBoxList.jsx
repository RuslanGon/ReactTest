import MailBoxItem from '../MailBoxItem/MailBoxItem'
import css from '../MailBoxList/MailBoxList.module.css'

const MailBoxList = ({users, onDeleteUser}) => {
  return (
    <ul className={css.list}>
        {Array.isArray(users) && users.map(user => {
        return <MailBoxItem user={user} key={user.id} onDeleteUser={onDeleteUser} />
        })}
      </ul>
  )
}

export default MailBoxList