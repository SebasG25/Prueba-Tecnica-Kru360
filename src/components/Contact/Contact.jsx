import styles from './Contact.module.css'
import { MdModeEditOutline, MdCheckCircle } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export const Contact = ({ contact }) => {
    const { name, lastname, number, prefix } = contact
    const navigate = useNavigate()

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <h3 className={styles.contactName}>{name} {lastname}</h3>
                <h3 className={styles.contactNumber}>{`(${prefix}) ${number}`}</h3>
            </div>
            <div className={styles.contactActions}>
                <MdModeEditOutline onClick={() => navigate(`/edit/${name} ${lastname}`)} color='#066493' size={20} className={styles.actionIcon} />
                <MdCheckCircle color='#066493' size={20} className={styles.actionIcon} />
                <IoMdTrash color='#066493' size={20} className={styles.actionIcon} />
            </div>
        </div>
    )
}