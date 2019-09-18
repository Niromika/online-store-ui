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
        width: 200px;
        height: 250px;
        box-shadow: ${({theme}) => theme.box_shadow.category};
        background: ${({theme}) => theme.main.background_secondery};
        font-size: 22px;
        letter-spacing: 1px;
        margin: 30px;

        &:hover {
            text-decoration: ${({theme}) => theme.main.text_decoration};
            border: ${({theme}) => theme.main.border};
        }

        .category-title {
          background: #1E90FF;
          color: #fff;
        }

        .category-img {
          height: 200px;
          width: 100%;
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
                <img src={category.url} className="category-img"></img>
                <div className="category-title">{category.name}</div>
              </Link>
            })}
        </CategoriesStyled>
      );
    }
  }
   
export default Categories;