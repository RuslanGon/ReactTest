

const MailBoxItem = ({user, onDeleteUser}) => {
  return (
    <>
    <li>email: {user.userEmail}</li>
    <li>name: {user.userName}</li>
    <button type="button" onClick={() => onDeleteUser(user.id)}>delet user</button>
    </>
  )
}


export default MailBoxItem