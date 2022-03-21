import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='container__footer'>
            <p>Copyright &copy; 2022</p>
            <Link style={{ color: '#fff', cursor: 'pointer', textDecoration: 'none' }} to='/about'>About</Link>
        </footer>
    )
}

export default Footer