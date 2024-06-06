import clsx from 'clsx'
import css from '../MailBox/MailBox.module.css'
import MailBoxList from '../MailBoxList/MailBoxList'



const MailBox = ({boxtitle, mailBoxCount, users, onDeleteUser}) => {

  const isMailBoxIsFull = mailBoxCount === 0

  return (
      <div
        className={clsx(css.mailbox, {
          [css.full]: isMailBoxIsFull,
        })}
      >
        <h2 className={css.title}>{boxtitle}</h2>
        {mailBoxCount === 0 ? (
          <p>Сейчас нет активных ячеек</p>
        ) : (
          <p>Количество активных ячеек: {mailBoxCount}</p>
        )}
        <MailBoxList users={users} onDeleteUser={onDeleteUser} />
      </div>
  );
}

export default MailBox