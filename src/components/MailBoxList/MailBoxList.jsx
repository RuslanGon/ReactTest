import MailBoxItem from '../MailBoxItem/MailBoxItem'
import css from '../MailBoxList/MailBoxList.module.css'

const MailBoxList = ({users}) => {
  return (
    <ul className={css.list}>
        {Array.isArray(users) && users.map(user => {
        return <MailBoxItem user={user} key={user.id} />
        })}
      </ul>
  )
}

export default MailBoxList