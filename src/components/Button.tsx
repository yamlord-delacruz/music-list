import {IPropsButton} from '../interfaces/MusicInterface'

const Button: React.FC<IPropsButton> = ({ color = 'steelblue', text, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className='container__btn'>
            {text}
        </button>
    )
}
export default Button