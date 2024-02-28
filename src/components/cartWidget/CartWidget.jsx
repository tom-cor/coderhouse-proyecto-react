import './cartWidget.css'
 const CartWidget = () => {
    return(
        <div className="badgeContainer">
            <img src="./images/cart.png" alt="Cart" className='cart'/>
            <span className="badge">11</span>
        </div>
    )
}

export default CartWidget