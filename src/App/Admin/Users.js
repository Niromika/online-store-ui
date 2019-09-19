import React from 'react';
import {Link} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const UsersStyled = styled.div``;

class Users extends React.Component {

    constructor(props) {
        super(props);
        
    }


    render() {
        return (
            <UsersStyled>
               <h1>Users</h1>
            </UsersStyled>
        );
    }
}

export default Users;