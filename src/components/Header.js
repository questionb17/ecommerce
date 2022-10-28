import React from 'react'
import '../styles/header.css'

const Header = ({size}) => {
    return(
        <nav>
            <div className="nav_box">
                <span className="my_store" >
                    ShoppingMall
                </span>
                <div className="cart">
                    <span>
                    <i className="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}
export default Header