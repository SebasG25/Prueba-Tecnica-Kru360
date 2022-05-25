import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export const EditPage = () => {
    const { idContact } = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data: response} = await axios.get(`http://localhost:3001/api/contacts/${idContact}`)
                setUserData(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [idContact])

    return (
        <div>
            <h1>{userData.name} {userData.lastname}</h1>
        </div>
    )
}