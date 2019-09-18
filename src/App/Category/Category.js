import React from 'react';
import ProductService from '../services/product.service';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const CategoryStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
  
    .product {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 200px;
      height: 250px;
      margin: 30px;
      font-size: 22px;
      box-shadow: ${({theme}) => theme.box_shadow.category};
      background: ${({theme}) => theme.main.background_secondery};
      color: ${({theme}) => theme.color.primary};

      &:hover {
            border: ${({theme}) => theme.main.border};
            transition: all 0.2s ease;
            text-decoration: ${({theme}) => theme.main.text_decoration};
        }
        .product-title {
          background: #1E90FF;
          color: #fff;
        }

        .product-img {
          height: 260px;
          width: 100%;
          padding: 10px;
        }   
    }
`;


class Category extends React.Component {

    constructor(props) {
        super(props);
        this.categoryId = this.props.match.params.id;
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
        <CategoryStyled>
            {this.state.products.map((product, i)  => {
                return <Link to={`/category/${this.categoryId}/product/${product.id}`} className="product" key={i}>
                  <div className="product-img"></div>
                  <div className="product-title">{product.name}</div>
                </Link>
            })}
        </CategoryStyled>
      );
    }
  }
   
export default Category;