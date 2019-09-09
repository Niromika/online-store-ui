import React from 'react';
import CategoryService from '../services/category.service';
import categoryService from '../services/category.service';
import Categories from './Categories/Categories';
import styled from 'styled-components';

const HomepageStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;



class Homepage extends React.Component {

    render() {
      return (
        <HomepageStyled className="Homepage">
            <Categories />
        </HomepageStyled>
      );
    }
  }
   
export default Homepage;