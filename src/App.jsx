import './App.css'
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage'
import { EditPage } from './pages/EditPage';
import { AddContactPage } from './pages/AddContactPage'
import { Navbar } from './components/BottomNavbar/Navbar';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/edit/:idContact' element={<EditPage />} />
        <Route path='/addcontact' element={<AddContactPage />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
