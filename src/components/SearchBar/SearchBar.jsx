import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'
import styles from './SearchBar.module.css'

export const SearchBar = () => {
    const [query, setQuery] = useSearchParams()
    const search = query.get('search') ?? ''

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChangeInput = e => {
        const text = e.target.value
        setQuery({search: text})
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type='text'
                    value={search}
                    autoFocus
                    placeholder='Buscar'
                    aria-label='Search Bar'
                    onChange={handleChangeInput}
                />
                <FaSearch size={20} color='#5b98b6' className={styles.searchIcon} />
            </div>
        </form>
    )
}