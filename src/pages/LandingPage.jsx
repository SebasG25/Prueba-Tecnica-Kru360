import { SearchBar } from '../components/SearchBar/SearchBar'
import { Contacts } from '../components/ContactsList/Contacts'
import { Button } from '../components/Button/Button'
import { MdOutlineAddCircle } from 'react-icons/md'

export const LandingPage = () => {
    return (
        <div>
            <SearchBar />
            <Contacts />
            <Button style={{
                position: 'absolute',
                right: '50%',
                marginRight: -65
            }}>
                Agregar
                {' '}
                <MdOutlineAddCircle size={20} color='white' className='addIcon' />
            </Button>
        </div>
    )
}