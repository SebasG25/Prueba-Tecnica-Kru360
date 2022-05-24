import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './SearchBar.module.css'

export const SearchBar = () => {

    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = e => {
        setSearch(e.target.value)
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
                    onChange={handleChange}
                />
                <FaSearch size={20} color='#5b98b6' className={styles.searchIcon} />
            </div>
        </form>
    )
}