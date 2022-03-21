import { useEffect, useState } from 'react'
import { IMusic } from '../interfaces/MusicInterface'

const AddMusic = ( props: {onAdd: (music: IMusic) => Promise<void>} ) => {
  let newId: number
  const [artist, setArtist] = useState('')
  const [album, setAlbum] = useState('')
  const [title, setTitle] = useState('')
  const [art, setArt] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [musicList, setMusicList] = useState<IMusic[]>([])

  useEffect(() => {
    const getMusicList = async () => {
      const musicListFromServer = await fetchMusicList()
      setMusicList(musicListFromServer)
    }

    getMusicList()
  }, [musicList.length])

  // Fetch Music List
  const fetchMusicList = async () => {
    const res = await fetch('http://localhost:5000/musicList')
    const data = await res.json()

    return data
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!artist) {
      alert('Please add an artist')
      return
    }
    else if (!album && !title) {
      alert('Please add an album/title')
      return
    }
    else if (!art) {
      alert('Please add an album art link')
      return
    }

    newId = musicList.length + 1

    let newMusic: (IMusic) = {
      id: newId,
      artist: artist,
      album: album,
      title: title,
      art: art,
      favorite: favorite
    }

    props.onAdd(newMusic)

    setArtist('')
    setAlbum('')
    setTitle('')
    setArt('')
    setFavorite(false)
  }

  return (
    <form className='container__add-form' onSubmit={onSubmit}>
      <label><h2>Add Music</h2></label>
      <div className='container__form-control'>
        <label>Artist Name</label>
        <input type='text' placeholder='Add Artist Name' value={artist} onChange={(e) => setArtist(e.target.value)} />
      </div>
      <div className='container__form-control'>
        <label>Album Name</label>
        <input type='text' placeholder='Add Album Name' value={album} onChange={(e) => setAlbum(e.target.value)} />
      </div>
      <div className='container__form-control'>
        <label>Title</label>
        <input type='text' placeholder='Add Title' value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='container__form-control'>
        <label>Album Art Link</label>
        <input type='text' placeholder='Add Album Art Link' value={art} onChange={(e) => setArt(e.target.value)} />
      </div>
      <div className='container__form-control container__form-control-check'>
        <label>Set Favorite</label>
        <input type='checkbox' checked={favorite} value={`${favorite}`} onChange={(e) => setFavorite(e.currentTarget.checked)} />
      </div>
      <input type='submit' value='Save Music' className='container__btn container__btn-block' />
    </form>
  )
}

export default AddMusic