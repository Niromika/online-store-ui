import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from '../models/user';
import './Login.scss';
import userService from '../services/user.service';
import cookie from 'react-cookies'


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            submitting: false
        }
        
    }

    send(values) {
        this.setState({submitting:true});
        userService
            .login(values.email, values.password)
            .then( response => response.json())
            .then( response => {
                const twoWeeksTime = 60 * 60 * 24 * 14;
                cookie.save('user', response.token, { path: '/', maxAge: twoWeeksTime});
                this.setState({submitting: false});
                this.props.history.push('/');
            });
    }  

    render() {
        return (
            <div className="Login">
                <Formik 
                    initialValues={{email: '', password: ''}}
                    onSubmit={this.send.bind(this)}>   
                    <Form className="container">
                        <div className="h1">Login</div>
                        <div className="form-group">
                            <Field type="text" name="email" className="form-control" placeholder="email"/>
                            <ErrorMessage name="email" component="div" className="alret alert-danger"/>
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" className="form-control" placeholder="password"/>
                            <ErrorMessage name="password" component="div" className="alret alert-danger"/>
                        </div>
                        <div>
                            <Field  type="submit" 
                                    value={this.state.submitting ? 'Logging...' : 'Login'} 
                                    className="btn login-btn" 
                                    disabled={this.state.submitting}/>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }

}

export default Login;