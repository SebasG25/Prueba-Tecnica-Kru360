import styles from './Contact.module.css'
import { MdModeEditOutline, MdCheckCircle } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Contact = ({ contact, updateComponent }) => {
    const { _id, name, lastname, cel, prefix } = contact
    const navigate = useNavigate()

    const handleClickOnDelete = async (_id) => {
        try {
            await axios.delete(`http://localhost:3001/api/contacts/${_id}`)
            updateComponent()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <h3 className={styles.contactName}>{name} {lastname}</h3>
                <h3 className={styles.contactNumber}>{`(${prefix}) ${cel}`}</h3>
            </div>
            <div className={styles.contactActions}>
                <MdModeEditOutline onClick={() => navigate(`/edit/${_id}`)} color='#066493' size={20} className={styles.actionIcon} />
                <MdCheckCircle color='#066493' size={20} className={styles.actionIcon} />
                <IoMdTrash onClick={() => handleClickOnDelete(_id)} color='#066493' size={20} className={styles.actionIcon} />
            </div>
        </div>
    )
}