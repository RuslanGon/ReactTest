
const MailBoxForm = ({onAddUser}) => {

const handleSubmit = (event) => {
    event.preventDefault()
    const userEmail = event.currentTarget.elements.userEmail.value
    const userName = event.currentTarget.elements.userName.value

    const formData = {
      userEmail,
      userName,
    };
    // console.log(formData);

    onAddUser(formData)
    
    event.currentTarget.reset()
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Add new email user</h2>
            <label>
            <span>User email</span>
            <br />
            <input type="email" name="userEmail" placeholder="enter your email" />
            </label>
            <br />
            <label>
            <span>User name</span>
            <br />
            <input type="text" name="userName" placeholder="enter your name" />
            </label>
            <br />
            <button type="submit">Add user</button>
        </form>
    </div>
  )
}

export default MailBoxForm