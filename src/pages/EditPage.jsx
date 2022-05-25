import { useParams } from 'react-router';

export const EditPage = () => {
    const { contactName } = useParams()

    return (
        <div>
            <h1>{contactName}</h1>
        </div>
    )
}