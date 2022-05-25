import styles from './Navbar.module.css'
import { FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    return (
        <nav className={styles.navbarContainer}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? styles.navbarIcon : undefined
                }
                to='/'>
                <FaUser
                    size={25}
                    color='#fff'
                />
            </NavLink>
        </nav>
    )
}