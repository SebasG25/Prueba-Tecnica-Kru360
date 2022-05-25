import styles from '../styles/AddContactPage.module.css'
import { Button } from '../components/Button/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddContactPage = () => {
  const [userData, setUserData] = useState({
    prefix: '+57',
    type: 'tipo1',
    origin: 'origen1'
  })

  const navigate = useNavigate()

  const handleInputChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.addPageContainer}>
      <h1 className={styles.addPageTitle}>Nuevo contacto</h1>
      <div className={styles.form}>
        <input className={styles.formInput} name='name' type="text" placeholder='Nombres' onChange={handleInputChange} value={userData?.name} />
        <input className={styles.formInput} name='lastname' type="text" placeholder='Apellidos' onChange={handleInputChange} value={userData?.lastname} />
        <input className={styles.formInput} name='email' type="email" placeholder='E-mail' onChange={handleInputChange} value={userData?.email} />
        <input className={styles.formInput} name='cel' type="tel" placeholder='Cel/Tel' onChange={handleInputChange} value={userData?.cel} />
        <input className={styles.formInput} name='birth' type="date" placeholder='Fecha de nacimiento' onChange={handleInputChange} value={userData?.birth} />
        <input className={styles.formInput} name='address' type="text" placeholder='Dirección' onChange={handleInputChange} value={userData?.address} />
        <select className={styles.formInput} name='type' type="text" onChange={handleInputChange} value={userData.type ?? 'Tipo de contacto'}>
          <option value="default" disabled hidden>Tipo de contacto</option>
          <option value="tipo1">Tipo 1</option>
          <option value="tipo2">Tipo 2</option>
        </select>
        <select className={styles.formInput} name='origin' type="text" onChange={handleInputChange} value={userData.origin ?? 'Origen'}>
          <option value="default" disabled hidden>Origen</option>
          <option value="origen1">Origen 1</option>
          <option value="origen2">Origen 2</option>
        </select>
        <div className={styles.formButtons}>
          <Button
            style={{
              width: '70%',
              height: 40,
              padding: '5px 55px 5px 55px',
              fontSize: 18,
              color: '#ebebeb',
              backgroundColor: '#d1d1d1',
              marginRight: 15
            }}
            action={() => navigate('/')}>
            Cancelar
          </Button>
          <Button
            style={{
              width: '70%',
              height: 40,
              padding: '5px 55px 5px 55px',
              fontSize: 18,
              color: '#ebebeb',
              backgroundColor: '#64cd98'
            }}
            action={() => navigate('/')}>
            Aceptar
          </Button>
        </div>
      </div>
    </div >
  )
}