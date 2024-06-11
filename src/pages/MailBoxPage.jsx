import '../App.css';
import MailBox from '../components/MailBox/MailBox';
import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import MailBoxForm from '../components/MailBoxForm/MailBoxForm';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser } from '../redux/mailbox/mailboxReduser';

function MailBoxPage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.mailbox.users);
  const filter = useSelector(state => state.mailbox.filter);
  

  const [localFilter, setLocalFilter] = useState(filter);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addUser(finalUser));
  };

  const onDeleteUser = (userId) => {
    dispatch(deleteUser(userId));
  };

  const onChangeFilter = (event) => {
    dispatch(setLocalFilter(event.target.value));
  };

  const filterUsers = useMemo(
    () =>
      users.filter(
        (user) =>
          user.userName.toLowerCase().includes(localFilter.toLowerCase()) ||
          user.userEmail.toLowerCase().includes(localFilter.toLowerCase())
      ),
    [localFilter, users]
  );

  return (
    <div>
      <MailBoxForm onAddUser={onAddUser} />
      <section>
        <h2>Search by name or email</h2>
        <input
          type="text"
          placeholder='Search'
          value={localFilter}
          onChange={onChangeFilter}
        />
      </section>
      <MailBox
        boxtitle='Meest Express'
        mailBoxCount={3}
        users={filterUsers}
        onDeleteUser={onDeleteUser}
      />
    </div>
  );
}

export default MailBoxPage;
