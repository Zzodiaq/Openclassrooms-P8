import '../../styles/card-style/card.css'
import { Link } from 'react-router-dom';

function Card({id, title, backgroundImage}) {
    const divBgImage = {
        backgroundImage : `url(${backgroundImage})`,
    }
    return (
        <Link to={`/logement/${id}`} className='card' style={divBgImage}>
            <p>{title}</p>
        </Link>
    )
}

export default Card