import React from 'react';
import './Category.scss'
import ProductService from '../services/product.service';

class Category extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          products: []
        }
    }

    componentDidMount() {
        ProductService.getByCategoryId(this.props.match.params.id)
            .then(res => res.json())
            .then(products => this.setState({products}));
    }
    

    render() {
      return (
        <div className="Category">
            {this.state.products.map((product, i)  => {
                return <div key={i}>{product.name}</div>
            })}
        </div>
      );
    }
  }
   
export default Category;