import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from '../models/user';
import './Register.scss';
import UserService from '../services/user.service';

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
            <div className="Register">
                <Formik 
                    initialValues={{name:'', email: '', password: '', age: ''}}
                    validationSchema={User}
                    onSubmit={this.send.bind(this)}>   
                    <Form className="container">
                        <div className="h1">Sign up</div>
                        <div className="form-group">
                            <Field type="text" name="first_name" className="form-control"  placeholder="first name"/>
                            <ErrorMessage name="first_name" component="div" className="alret"/>
                        </div>
                        <div className="form-group">
                            <Field type="text" name="last_name" className="form-control"  placeholder="last name"/>
                            <ErrorMessage name="last_name" component="div" className="alret"/>
                        </div>
                        <div className="form-group">
                            <Field type="text" name="email" className="form-control" placeholder="email"/>
                            <ErrorMessage name="email" component="div" className="alret"/>
                        </div>
                        <div className="form-group">
                            <Field type="password" name="password" className="form-control" placeholder="password"/>
                            <ErrorMessage name="password" component="div" className="alret"/>
                        </div>
                        <div className="form-group"> 
                            <Field type="date" name="bday" className="form-control bday"/>
                            <ErrorMessage name="bday" component="div" className="alret"/>
                        </div>
                        <div>
                            <Field type="submit" value="Register" className="btn register-btn" disabled={this.state.submitting}/>
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }
}

export default Register;