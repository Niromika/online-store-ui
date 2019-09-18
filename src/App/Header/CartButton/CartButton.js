import React from 'react';
import cartService from '../../services/cart.service';
import styled from 'styled-components';

const CartBtnStyled = styled.div`

`;

class CartButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCartEmpty: true
        }
    }

    cartBadge() {
        if (cartService.getAll().length > 0) {
            return cartService.getAll().length;
        }
    }

    cartEmpty() {
        if (cartService.getAll().length > 0)
            return "show";
        else
            return "hide";
    }

    render() {
        return (
            // <div className="number">
            <div className={`number  ${this.cartEmpty()}`}>
                <h4>{this.cartBadge()}</h4>
            </div>
        )
    }
 }

 export default CartButton;