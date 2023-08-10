import { Link } from 'react-router-dom'
import '../../styles/header-style/header.css'

function Header() {
    return (
        <header>
            <div className='header__logo' alt='error'>Kasaa</div>
            <nav className='nav'>
                <Link to={'/'}>Accueil</Link>
                <Link to={'/about'}>A Propos</Link>
            </nav>
        </header>

    )
}

export default Header