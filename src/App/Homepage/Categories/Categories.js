import React from 'react';
import CategoryService from '../../services/category.service';
import './Categories.scss';
import {Link} from 'react-router-dom';

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
        <div className="Categories">
            {this.state.categories.map( (category, i) => {
              return <Link to={'/category/' + category.id} 
                            key={i}
                            className="category">{category.name}</Link>
            })}
        </div>
      );
    }
  }
   
export default Categories;