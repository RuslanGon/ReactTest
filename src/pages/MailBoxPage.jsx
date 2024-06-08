
import '../App.css'
import MailBox from '../components/MailBox/MailBox'
import MeestExpressUsers from '../../meest.json'
import { useEffect, useMemo, useState } from 'react'
import { nanoid } from 'nanoid'
import MailBoxForm from '../components/MailBoxForm/MailBoxForm'

function MailBoxPage() {
  const [users, setUsers] = useState(() => {
    const stringiUsers = localStorage.getItem('users')
    if(!stringiUsers) return MeestExpressUsers
    const parseUsers = JSON.parse(stringiUsers)
    return parseUsers
  })

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  },[users])

const onAddUser = (formData) => {
  const finalUser = {
    ...formData,
    id: nanoid(),
  };

  // setUsers([...users, finalUser])
  setUsers((prevState) => [...prevState, finalUser]);
};

const onDeleteUser = (userId) => {
setUsers(prevUsers => prevUsers.filter(user => user.id !==  userId))
}
  const [filter, setFilter] = useState('')

  const onChangeFilter = (event) => {
setFilter(event.target.value)
  }

  // const filterUsers = users.filter((user) =>
  //   user.userName.toLowerCase().includes(filter.toLowerCase()) ||
  //   user.userEmail.toLowerCase().includes(filter.toLowerCase())
  // );

  const filterUsers = useMemo(() => 
    users.filter((user) =>
        user.userName.toLowerCase().includes(filter.toLowerCase()) ||
        user.userEmail.toLowerCase().includes(filter.toLowerCase())
    ), [filter, users]);


  return (
    <div>
      <MailBoxForm onAddUser={onAddUser} />
      <section>
        <h2>Search by name or email</h2>
        <input type="text" name="" placeholder='Search' value={filter} onChange={onChangeFilter} />
      </section>
      <MailBox boxtitle='Meest Express' mailBoxCount={3} users={filterUsers} onDeleteUser={onDeleteUser} />
    </div>
  )
}

export default MailBoxPage
