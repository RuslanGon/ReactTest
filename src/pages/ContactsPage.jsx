import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { apiGetContacts } from "../redux/contacts/contactsSlice"
import { selectPhonebookIsError, selectPhonebookIsLoading } from "../redux/contacts/selectors"

const ContactsPage = () => {
  const dispatch = useDispatch
  const isLoading = useSelector(selectPhonebookIsLoading)
  const isError = useSelector(selectPhonebookIsError)


  useEffect(() => {
    dispatch(apiGetContacts())
  }, [dispatch])




  return (
    <div>ContactsPage</div>
  )
}

export default ContactsPage