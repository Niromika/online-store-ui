import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';
import Products from './Products';
import Categories from './Categories';
import Users from './Users';
import UserService from '../services/user.service';
const AdminStyled = styled.div``;

class Admin extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        UserService
            .me()
            .then( response => response.json())
            .then( user => {
                if (!user.isAdmin) {
                    this.props.history.push('/');
                }
            });
    }


    render() {
        return (
            <Router>
                <AdminStyled>
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/admin/products">Product</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/admin/categories">Categories</Link>
                                </li>
                                <li className="list-group-item">
                                <Link to="/admin/users">Users</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <Route path="/admin/products" component={Products} />
                            <Route path="/admin/categories" component={Categories} />
                            <Route path="/admin/users" component={Users} />
                        </div>
                    </div>
                </AdminStyled>
            </Router>
        );
    }
}

export default Admin;