import React from 'react';
import styled from 'styled-components';
import cartServise from '../services/cart.service';
import productService from '../services/product.service';

const CartStyled = styled.div`
    width: ${({theme}) => theme.main.width};
    margin: ${({theme}) => theme.main.margin};
    display: flex;
    justify-content: center;
    align-items: center;
`;

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    let ids = cartServise.getAll().map(product => product.id);
    productService.getByIds(ids)
        .then(res => res.json())
        .then(products => this.setState({products}))
        .catch(error => console.log(error));

    this.setState({
      products: cartServise.getAll()
    });
  }

    render() {
      return (
        <CartStyled className="Categories">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product, i) => {
                  return <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.qty}</td>
                  </tr>
                })}
              </tbody>
            </table>
        </CartStyled>
      );
    }
  }
   
export default Cart;