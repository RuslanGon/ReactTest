import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/mailbox/selector";
import { setLocalFilter } from '../../pages/MailBoxPage'


const MailBoxFilter = () => {

  const localFilter = useSelector(selectFilter);
  

  const dispatch = useDispatch
  const onChangeFilter = (event) => {
    dispatch(setLocalFilter (event.target.value));
  };
  
  return (
    <div>
        <h2>Search by name or email</h2>
        <input
          type="text"
          placeholder='Search'
          value={localFilter}
          onChange={onChangeFilter}
        />
      </div>
  )
}

export default MailBoxFilter