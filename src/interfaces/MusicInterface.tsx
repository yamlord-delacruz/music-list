export interface IMusic {
    id: number
    artist: string
    album: string
    title: string
    art: string
    favorite: boolean
}

export interface IPropsMusicList {
    musicList: IMusic[]
    onDelete: (id: number) => Promise<void>
    onToggle: (id: number) => Promise<void>
}

export interface IPropsMusic {
    music: IMusic
    onDelete: (id: number) => Promise<void>
    onToggle: (id: number) => Promise<void>
}

export interface IPropsHeader {
    title?: string
    onAdd: () => void
    showAdd: boolean
}

export interface IPropsButton {
    color?: string
    text: string
    onClick: () => void
}

const MusicInterface = () => {
    return (<></>)
}

export default MusicInterface