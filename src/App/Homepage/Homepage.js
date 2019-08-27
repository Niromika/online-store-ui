import React from 'react';
import CategoryService from '../services/category.service';
import categoryService from '../services/category.service';
import './Homepage.scss';
import Categories from './Categories/Categories';

class Homepage extends React.Component {

    render() {
      return (
        <div className="Homepage">
            <Categories />
        </div>
      );
    }
  }
   
export default Homepage;