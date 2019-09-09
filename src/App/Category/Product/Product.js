import React from 'react';
import styled from 'styled-components';
import productService from '../../services/product.service';
import cartServise from '../../services/cart.service';

const ProductStyled = styled.div`
    width: ${({theme}) => theme.main.width};
    margin: ${({theme}) => theme.main.margin};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .btn-add-to-cart {
        background: blue;
        border-radius: 20px;
        border: 0;
        color: #fff;
    }

`;

class Product extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            product: {}
        };
    }

    componentDidMount() {
        productService.getById(this.props.match.params.id)
            .then(res => res.json())
            .then(product => this.setState({product}));
    }

    addToCart() {
        cartServise.add(this.state.product.id, 1);
    }

    render() {
        return (
            <ProductStyled>
                <div className="product-data">{this.state.product.name}</div>
                <div className="product-data">{this.state.product.brand}</div>
                <div className="product-data">{this.state.product.price}</div>
                <button className="btn-add-to-cart" onClick={this.addToCart.bind(this)}>Add To Cart</button>
            </ProductStyled>
        );
    }

}

export default Product;