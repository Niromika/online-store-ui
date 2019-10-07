import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from '../../services/user.service';
import User from '../../models/user';
import styled from 'styled-components';

const EditStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .edit-container {
        background: ${({theme}) => theme.main.background_secondery};
        width: 320px;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 14px;
        box-shadow: ${({theme}) => theme.box_shadow.form};
        margin: 50px 0;
    }
`;


class EditDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {}
        }
    }

    componentDidMount() {
        UserService
            .me()
            .then( response => response.json())
            .then( user => {
                this.setState({
                    profile: user
                });
            });
    }
    send() {

    }


    render() {
        return (
            <EditStyled>
               <Formik 
                    initialValues={{name:'', email: '', password: '', age: ''}}
                    validationSchema={User}
                    onSubmit={this.send.bind(this)}>   
                    <Form className="edit-container">
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
                            <Field type="submit" value="Edit" className="btn btn-primary" disabled={this.state.submitting}/>
                        </div>
                    </Form>
                </Formik>
            </EditStyled>
        );
    }
}

export default EditDetails;