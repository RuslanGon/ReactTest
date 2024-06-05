

const MailBoxForm = () => {
  return (
    <div>
        <form>
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
        </form>
        <button type="submit">Add user</button>
    </div>
  )
}

export default MailBoxForm