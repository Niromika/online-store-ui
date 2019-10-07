import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from '../models/user';
import userService from '../services/user.service';
import cookie from 'react-cookies';
import styled from 'styled-components';

const LoginStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;    

    .login-container {
        background: ${({theme}) => theme.main.background_secondery};
        width: 320px;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 14px;
        box-shadow: ${({theme}) => theme.box_shadow.form};
        position: absolute;

        .h1 {
            margin-bottom: 50px;
            letter-spacing: 3px;
            color: #444;
        }

        .login-btn {
            border: 1px solid #000;
            font-weight: 600;
            color: 	#444;
            letter-spacing: 1px;
            width: 100%;
            margin-top: 12px;

            &:hover {
                background: #008000;
                color: #ffffff;
                border-radius: 30px;
                transition: all 1s;
            }
        }

        .form-control {
            background: transparent;
            border: 0 solid;
            border-bottom: 1px solid #000000;
            font-weight: 500;
            font-size: 18px;
            text-align: center;
            color: #999;

            &:focus {
                color: #444;
            }
        }

        .alert {
            background: transparent;
            margin: 3px;
        }

        .bday {
            text-align: center;
            color: #000;
        }

        input::-webkit-inner-spin-button,
        input::-webkit-clear-button {
          display: none;
        }

        input::-webkit-calendar-picker-indicator {
            color: rgba(0, 0, 0, 0);
            opacity: 1
        }
    }
`;


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
            <LoginStyled className="Login">
                <Formik 
                    initialValues={{email: '', password: ''}}
                    onSubmit={this.send.bind(this)}>   
                    <Form className="login-container">
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
            </LoginStyled>
        );
    }

}

export default Login;