import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { apiGetContacts } from "../redux/contacts/contactsSlice"
import { selectPhonebookContacts, selectPhonebookIsError, selectPhonebookIsLoading } from "../redux/contacts/selectors"
import Loader from "../components/Loader/Loader"
import Error from "../components/Error/Error"

const ContactsPage = () => {
  const dispatch = useDispatch
  const isLoader = useSelector(selectPhonebookIsLoading)
  const isError = useSelector(selectPhonebookIsError)
  const contacts = useSelector(selectPhonebookContacts)

  useEffect(() => {
    dispatch(apiGetContacts())
  }, [dispatch])

  return (
    <div>
       {isLoader && <Loader />}
      {isError && <Error />}
      <ul>
      {Array.isArray(contacts) === 0 && <li>now not contacts</li>}
      {Array.isArray(contacts) && contacts.map(item => <li key={item.id}>
        <h3>name: {item.name}</h3>
        <p>number: {item.number}</p>
      </li> )}
      </ul>
     
    </div>
  )
}

export default ContactsPage