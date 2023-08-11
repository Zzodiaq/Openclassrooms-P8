// import { Link } from 'react-router-dom'
import '../../styles/header-style/header.css'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.PNG'

function Header() {
    return (
        <header>
            <img className='header__logo' src={logo} alt='error'/>
            <nav className='nav'>
                <NavLink className='link' to={'/'} activeclassname='active'>Accueil</NavLink>
                <NavLink className='link' to={'/about'} activeclassname='active'>A Propos</NavLink>
            </nav>
        </header>

    )
}

export default Header