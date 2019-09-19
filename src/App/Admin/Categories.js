import React from 'react';
import {Link} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const CategoriesStyled = styled.div``;

class Categories extends React.Component {

    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <CategoriesStyled>
               <h1>Categories</h1>
            </CategoriesStyled>
        );
    }
}

export default Categories;