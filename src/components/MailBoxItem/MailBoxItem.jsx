

const MailBoxItem = ({user}) => {
  return (
    <>
    <li>email: {user.userEmail}</li>
    <li>name: {user.userName}</li>
    </>
  )
}

export default MailBoxItem