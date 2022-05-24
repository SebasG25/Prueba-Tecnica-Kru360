import { FaSearch } from 'react-icons/fa'
import styles from './SearchBar.module.css'

export const SearchBar = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type='text'
                    value={''}
                    autoFocus
                    placeholder='Buscar'
                    aria-label='Search Bar'
                />
                <FaSearch size={20} color='#5b98b6' className={styles.searchIcon} />
            </div>
        </form>
    )
}