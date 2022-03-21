import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { IMusic } from './interfaces/MusicInterface'
import Header from './components/Header'
import Footer from './components/Footer'
import MusicList from './components/MusicList'
import AddMusic from './components/AddMusic'
import About from './components/About'
import MusicDetails from './components/MusicDetails'

const App = () => {
  const [showAddMusic, setShowAddMusic] = useState(false)
  const [musicList, setMusicList] = useState<IMusic[]>([])

  useEffect(() => {
    const getMusicList = async () => {
      const musicListFromServer = await fetchMusicList()
      setMusicList(musicListFromServer)
    }

    getMusicList()
  }, [])

  // Debugging showAddMusic
  // useEffect(() => {
  //   alert(showAddMusic)
  // }, [showAddMusic])

  // Code for Unmounting using useEffect()
  // useEffect(() => {
  //   setInterval(() => { console.log('Goood Bye') }, 1000)

  //   return () => { }
  // }, [musicList,])

  // Fetch Music List
  const fetchMusicList = async () => {
    const res = await fetch('http://localhost:5000/musicList')
    const data = await res.json()

    return data
  }

  // Fetch Music
  const fetchMusic = async (id: number) => {
    const res = await fetch(`http://localhost:5000/musicList/${id}`)
    const data = await res.json()

    return data
  }

  // Add Music
  const addMusic = async (music: IMusic): Promise<void> => {
    const res = await fetch('http://localhost:5000/musicList', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(music),
    })

    const data = await res.json()

    setMusicList([...musicList, data])
  }

  // Delete Music
  const deleteMusic = async (id: number): Promise<void> => {
    await fetch(`http://localhost:5000/musicList/${id}`, {
      method: 'DELETE',
    })

    setMusicList(musicList.filter((music) => music.id !== id))
  }

  // Toggle Favorite
  const toggleFavorite = async (id: number): Promise<void> => {
    const musicToToggle = await fetchMusic(id)
    const updMusic = { ...musicToToggle, favorite: !musicToToggle.favorite }

    const res = await fetch(`http://localhost:5000/musicList/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updMusic)
    })

    const data = await res.json()

    setMusicList(musicList.map((music) => music.id === id ? { ...music, favorite: data.favorite } : music))
  }

  return (
    <Router>
      <div className='container'>
        <Header onAdd={() => setShowAddMusic(!showAddMusic)} showAdd={showAddMusic} />
        <Routes>
          <Route path='/' element={
            <>
              {showAddMusic && <AddMusic onAdd={addMusic} />}
              {musicList.length > 0 ? <MusicList musicList={musicList} onDelete={deleteMusic} onToggle={toggleFavorite} /> : 'No Music to Show'}
            </>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/music/:id' element={<MusicDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App