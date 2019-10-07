import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from '../models/user';
import UserService from '../services/user.service';
import styled from 'styled-components';

const RegisterStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .register-container {
        position: absolute;
        background: ${({theme}) => theme.main.background_secondery};
        width: 320px;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 14px;
        box-shadow: ${({theme}) => theme.box_shadow.form};
        margin: 50px 0;

        .h1 {
            margin-bottom: 50px;
            letter-spacing: 3px;
            color: #444;
        }

        .register-btn {
            border: 1px solid #000;
            border-radius: 8px;
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
            color: #999;
            text-align: center;

            &:focus {
                color: #444;
            }
        }

        
        .error-messgae {
            background: transparent;
            margin: 3px;
            color: red;

            &:focus {
                color: #444;
            }
        }

        .bday {
            text-align: center;
            color: #999;
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

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            submitting: false
        };
    }

    send(values) {
        this.setState({submitting:true});
        UserService
            .register(values)
            .then( () => {
                this.setState({submitting: false});
                this.props.history.push('/login');
        });
    }  

    render() {
        return (
            <RegisterStyled className="Register">
                <Formik 
                    initialValues={{name:'', email: '', password: '', age: ''}}
                    validationSchema={User}
                    onSubmit={this.send.bind(this)}>   
                    <Form className="register-container">
                        <div className="h1">Sign up</div>
                        <div className="form-group">
                            <Field type="text" name="first_name" className="form-control"  placeholder="first name"/>
                            <ErrorMessage name="first_name" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group">
                            <Field type="text" name="last_name" className="form-control"  placeholder="last name"/>
                            <ErrorMessage name="last_name" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group">
                            <Field type="text" name="email" className="form-control" placeholder="email"/>
                            <ErrorMessage name="email" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" className="form-control" placeholder="password"/>
                            <ErrorMessage name="password" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group"> 
                            <Field type="date" name="bday" className="form-control bday"/>
                            <ErrorMessage name="bday" component="div" className="alret error-messgae"/>
                        </div>
                        <div>
                            <Field type="submit" value="Register" className="btn register-btn" disabled={this.state.submitting}/>
                        </div>
                    </Form>
                </Formik>
            </RegisterStyled>
        );
    }
}

export default Register;