import React from 'react';
import styled from 'styled-components';
import cartService from '../services/cart.service';
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
    this.loadCart();
  }

  loadCart() {
      const cartProducts = cartService.getAll();
      const ids = cartProducts.map(product => product.id);
      productService.getByIds(ids)
          .then(res => res.json())
          .then(products => {
              products = this.addQuantities(products, cartProducts);
              this.setState({ products });
          })
          .catch(err => console.log(err));
  }

  addQuantities(products, cartProducts) {
      let cartObj = {};
      cartProducts.forEach(product => cartObj[product.id] = product.qty);
      products.forEach(product => product.qty = cartObj[product.id]);
      return products;
  }

  calcTotal(products) {
      let total = 0;
      products.forEach(product => {
          total += product.price * product.qty;
      });
      return total;
  }

  removeFromCart(productId) {
      cartService.remove(productId);
      this.loadCart();
  }

    render() {
      return (
        <CartStyled className="Cart">
            <table className="table table-striped">
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>Description</th>
                           <th>Quantity</th>
                           <th>Price</th>
                           <th colSpan="2">Sub-total</th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.products.map((product, index) => {
                           return <tr key={index}>
                               <td>{product.title}</td>
                               <td>{product.description}</td>
                               <td>{product.qty}</td>
                               <td>${product.price.toFixed(2)}</td>
                               <td>${(product.qty * product.price).toFixed(2)}</td>
                               <td onClick={this.removeFromCart.bind(this, product.id)}><button>X</button></td>
                           </tr>
                       })}
                   </tbody>
                   <tfoot>
                       <tr>
                           <td colSpan="4"></td>
                           <td colSpan="2"><h4>Total</h4></td>
                       </tr>
                       <tr>
                           <td colSpan="4"></td>
                           <td colSpan="2">${this.calcTotal(this.state.products).toFixed(2)}</td>
                       </tr>
                   </tfoot>
               </table>
               {this.state.cart}
        </CartStyled>
      );
    }
  }
   
export default Cart;