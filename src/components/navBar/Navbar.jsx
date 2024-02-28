import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'
const Navbar = () => {
    return(
        <nav className="navbarContainer">
            <a href="/" className="link">
                <img src='./images/logo.png' alt="" className='logo'/>
            </a>
            <div className="linksContainer">
                <a href="/">Lamparas</a>
                <a href="/">Apliques</a>
                <a href="/">Controladoras</a>
                <a href="/">Sensores</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar