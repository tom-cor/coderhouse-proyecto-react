import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'
const Navbar = () => {
    return(
        <nav className="navbarContainer">
            <a href="/" className="link">Pepo</a>
            <div className="linksContainer">
                <a href="/" className="link">Lamparas</a>
                <a href="/" className="link">Apliques</a>
                <a href="/" className="link">Controladoras</a>
                <a href="/" className="link">Sensores</a>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar