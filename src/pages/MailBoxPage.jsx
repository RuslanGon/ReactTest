import '../App.css';
import MailBox from '../components/MailBox/MailBox';
import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import MailBoxForm from '../components/MailBoxForm/MailBoxForm';
import { useDispatch, useSelector } from 'react-redux';

function MailBoxPage() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.mailbox.users);
  const filter = useSelector(state => state.mailbox.filter);
  
  // Add state for filter
  const [localFilter, setLocalFilter] = useState(filter);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };

    const action = { type: 'mailbox/ADD_USER', payload: finalUser };
    dispatch(action);
  };

  const onDeleteUser = (userId) => {
    const action = { type: 'mailbox/DELETE_USER', payload: userId };
    dispatch(action);
  };

  const onChangeFilter = (event) => {
    const newFilter = event.target.value;
    setLocalFilter(newFilter);
    const action = { type: 'mailbox/SET_FILTER', payload: newFilter };
    dispatch(action);
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
