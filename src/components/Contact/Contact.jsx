import styles from './Contact.module.css'
import { MdModeEditOutline, MdCheckCircle } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

export const Contact = ({ contact }) => {
    const { name, number, prefix } = contact

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <h3 className={styles.contactName}>{name}</h3>
                <h3 className={styles.contactNumber}>{`(${prefix}) ${number}`}</h3>
            </div>
            <div className={styles.contactActions}>
                <MdModeEditOutline color='#066493' size={20} className={styles.actionIcon} />
                <MdCheckCircle color='#066493' size={20} className={styles.actionIcon} />
                <IoMdTrash color='#066493' size={20} className={styles.actionIcon} />
            </div>
        </div>
    )
}