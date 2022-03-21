import Music from './Music'
import { IPropsMusicList } from '../interfaces/MusicInterface'

const MusicList: React.FC<IPropsMusicList> = ({ musicList, onDelete, onToggle }) => {
    return (
        <div className='container__music-list'>
            {musicList.map((music) => (
                <Music key={music.id} music={music} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default MusicList