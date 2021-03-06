import { Contact } from '../Contact/Contact'
import styles from './Contacts.module.css'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

export const Contacts = ({ search }) => {
  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])

  const getContacts = async () => {
    const { data: response } = await axios.get('http://localhost:3001/api/contacts')
    setFilteredContacts([...response.data])
    setContacts([...response.data])
  }

  const updateComponent = useCallback(() => {
    getContacts()
  }, [])

  useEffect(() => {
    const fetchData = () => {
      try {
        getContacts()
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (search) {
        const filteredArray = contacts.filter(contact =>
          contact?.name.toLowerCase().includes(search?.toLowerCase())
          || contact?.cel.includes(search)
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
              <Contact key={contact._id} contact={contact} updateComponent={updateComponent} />
            ))
            }
          </ul>
          :
          <h3>No se encontraron contactos</h3>
      }
    </div>
  )
}