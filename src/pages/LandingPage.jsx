import { SearchBar } from '../components/SearchBar/SearchBar'
import { Contacts } from '../components/ContactsList/Contacts'
import { Button } from '../components/Button/Button'
import { MdOutlineAddCircle } from 'react-icons/md'
import { useDebounce } from '../hooks/useDebounce'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from '../styles/LandingPage.module.css'

export const LandingPage = () => {
    const [query] = useSearchParams()
    const search = query.get('search')
    const navigate = useNavigate()

    const debouncedSearch = useDebounce(search, 300)

    return (
        <div className={styles.landingPageContainer}>
            <SearchBar />
            <h1 className={styles.listTitle}>Lista de contactos</h1>
            <div className={styles.mainContainer}>
                <Contacts key={debouncedSearch} search={debouncedSearch} />
                <Button
                    action={() => navigate('/addcontact')}>
                    Agregar
                    {' '}
                    <MdOutlineAddCircle size={20} color='white' className={styles.addIcon} />
                </Button>
            </div>
        </div>
    )
}