import React from 'react';
import categoryService from '../../services/category.service';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const CategoriesStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .category {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 250px;
        font-size: 22px;
        letter-spacing: 1px;
        margin: 60px;

        &:hover {
            text-decoration: ${({theme}) => theme.main.text_decoration};
        }

        .category-title {
          color: ${({theme}) => theme.color.secondery};
        }

        .category-img {
          height: 200px;
          width: 200px;
          border-radius: 50%;
          background: ${({theme}) => theme.main.background_secondery};
          box-shadow: ${({theme}) => theme.box_shadow.category};

          &:hover {
            box-shadow: 14px 14px 50px -10px rgba(0, 0, 0, 0.95);
          }
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
    categoryService
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
              return <Link to={'/category/' + category.id} key={i} className="category">
                <img src={category.image} className="category-img"></img>
                <div className="category-title">{category.name}</div>
              </Link>
            })}
        </CategoriesStyled>
      );
    }
  }
   
export default Categories;