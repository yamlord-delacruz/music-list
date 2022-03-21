import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { IPropsHeader } from '../interfaces/MusicInterface'
import Button from './Button'

const Header: React.FC<IPropsHeader> = ({ title, onAdd, showAdd }) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}{location.pathname === '/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}</h1>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Music List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header