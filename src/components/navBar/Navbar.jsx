import './navbar.css'
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
            <div className="badgeContainer">
                <img src="./images/cart.png" alt="Cart" className='cart'/>
                <span className="badge">11</span>
            </div>
        </nav>
    )
}

export default Navbar