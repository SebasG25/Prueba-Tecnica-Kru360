import { Contact } from '../Contact/Contact'
import { contactsList } from '../../utils/contacts'
import styles from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div>
      <h1 className={styles.listTitle}>Lista de contactos</h1>
      <ul className={styles.listOfContacts}>
        {contactsList.map(contact => (
          <Contact key={contact.name} contact={contact} />
        ))
        }
      </ul>
    </div>
  )
}