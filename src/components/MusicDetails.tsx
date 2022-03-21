import { useState, useEffect } from 'react'
import { useParams, useNavigate/*, useLocation */ } from 'react-router-dom'
import { IMusic } from '../interfaces/MusicInterface'
import Button from './Button'

const MusicDetails = () => {
    const [loading, setLoading] = useState(true)
    const [music, setMusic] = useState<IMusic>()
    // const [error, setError] = useState(null)

    const params = useParams()
    const navigate = useNavigate()
    // const { pathname } = useLocation()

    useEffect(() => {
        const fetchMusic = async () => {
            const res = await fetch(`http://localhost:5000/musicList/${params.id}`)
            const data = await res.json()

            if (res.status === 404) {
                navigate('/')
            }

            setMusic(data)
            setLoading(false)
        }

        fetchMusic()
    }, [])

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            {/* <p>{pathname}</p> */}
            <h3>{music?.title}</h3>
            <p>{music?.artist}</p>
            <Button onClick={() => {
                navigate(-1)
            }} text='Go Back' />
        </div>
    )
}

export default MusicDetails