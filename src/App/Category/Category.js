import React from 'react';
import ProductService from '../services/product.service';
import styled from 'styled-components';

const CategoryStyled = styled.div`

`;


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
        <CategoryStyled className="Category">
            {this.state.products.map((product, i)  => {
                return <div key={i}>{product.name}</div>
            })}
        </CategoryStyled>
      );
    }
  }
   
export default Category;