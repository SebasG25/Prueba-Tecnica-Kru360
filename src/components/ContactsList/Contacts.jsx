import { Contact } from '../Contact/Contact'
import { contactsList } from '../../utils/contacts'
import styles from './Contacts.module.css'
import { useEffect, useState } from 'react'

export const Contacts = ({ search }) => {
  const [contacts] = useState(contactsList)
  const [filteredContacts, setFilteredContacts] = useState(contactsList)

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        const filteredArray = contacts.filter(contact =>
          contact?.name.toLowerCase().includes(search?.toLowerCase())
          || contact?.number.includes(search)
          || contact?.lastname.toLowerCase().includes(search?.toLowerCase())
        )
        setFilteredContacts(filteredArray)
      }
    }

    fetchData()
  }, [search, contacts])

  return (
    <div className={styles.contactsContainer}>
      {
        filteredContacts.length !== 0 ?
          <ul className={styles.listOfContacts}>
            {filteredContacts.map(contact => (
              <Contact key={contact.name} contact={contact} />
            ))
            }
          </ul>
          :
          <h3>No se encontraron contactos</h3>
      }
    </div>
  )
}