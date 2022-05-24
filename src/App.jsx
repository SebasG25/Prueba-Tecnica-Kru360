import './App.css'
import { SearchBar } from './components/SearchBar/SearchBar'
import { Contacts } from './components/ContactsList/Contacts'
import { Button } from './components/Button/Button'
import { MdOutlineAddCircle } from 'react-icons/md'
import { LandingPage } from './pages/LandingPage'

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
