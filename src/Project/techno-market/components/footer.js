import React, { Component } from 'react';
import cart from './../icons/cart.png';

class Footer extends Component {
    state = {

    }

    render() {
        return (
            <footer className="footer row justify-content-center align-items-center text-white text-center">
                <div className="col-4">
                    <span>تومان</span>
                    <strong className="h6 me-2 m-0">0</strong>
                </div>
                <div className="col-4">
                    <h6>Basket</h6>
                </div>
                <div className="col-4 cart">
                    <div className="count">0</div>
                    <div className="hidden-box">
                        <img src={cart} alt="cart" className="cart-image" />
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;