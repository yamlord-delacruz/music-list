import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IPropsMusic } from '../interfaces/MusicInterface'

const Music: React.FC<IPropsMusic> = ({ music, onDelete, onToggle }) => {
    const renderMusic = (): JSX.Element => {
        return (
            <div className={`container__music ${music.favorite ? 'favorite' : ''}`} onDoubleClick={() => onToggle(music.id)}>
                
                <div className='container__music-header'>
                    <h3>
                        <span className='container__image'><img className='container__resize' src={music.art} /></span>
                    {music.title}
                    </h3>
                    <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(music.id)} />
                </div>
                <p>{`${music.album} by ${music.artist}`}</p>
                <p><Link style={{ color: '#fff', cursor: 'pointer', textDecoration: 'none' }} to={`/music/${music.id}`}>View Details</Link></p>
            </div>
        )
    }
    return (
        <>{renderMusic()}</>
    )
}

export default Music