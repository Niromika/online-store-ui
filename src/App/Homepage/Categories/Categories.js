import React from 'react';
import CategoryService from '../../services/category.service';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CategoriesStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;

    .category {
        width: 250px;
        height: 300px;
        box-shadow: ${({theme}) => theme.box_shadow.category};
        background: ${({theme}) => theme.main.background_secondery};
        border-radius: 5px;
        color: ${({theme}) => theme.label.primary};
        font-size: 30px;
        margin: 20px;
        opacity: 0.7;

        &:hover {
            box-shadow: 0px 0px 14px 5px rgba(0,0,0,0.75);
            font-size: 36px;
            transition: all 0.4s ease;
        }
    }
`;


class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    CategoryService
      .getAll()
      .then( res => res.json())
      .then(categories => {
        this.setState({categories});
      });

  }

    render() {
      return (
        <CategoriesStyled className="Categories">
            {this.state.categories.map( (category, i) => {
              return <Link to={'/category/' + category.id} 
                            key={i}
                            className="category">{category.name}</Link>
            })}
        </CategoriesStyled>
      );
    }
  }
   
export default Categories;