import React from 'react';
import {Link} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import Product from '../models/product';
import categoryService from '../services/category.service';
import productService from '../services/product.service';

const ProductsStyled = styled.div`
`;

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            submitting: false
        };
    }

    componentDidMount() {
        categoryService
            .getAll()
            .then(res => res.json())
            .then(categories => {
                this.setState({categories});
            });
    }

    send(values) {
        this.setState({submitting: true});
        productService.create(values)
            .then(() => this.setState({submitting: false}));
    }


    render() {
        return (
            <ProductsStyled>
               <Formik 
                    initialValues={{name:'', brand: '', price: '', categoryId: '', image: ''}}
                    validationSchema={Product}
                    onSubmit={this.send.bind(this)}  
                    render={({setFieldValue}) => {
                       return <Form className="products-container col-sm-6">
                        <div className="form-group">
                            <label>category:</label>
                            <Field component="select" name="categoryId" className="form-control">
                                <option defaultValue>-Choose category</option>
                                {this.state.categories.map((category, index)=>{
                                    return <option key={index} value={category.id}>{category.name}</option>
                                })}
                            </Field>
                            <ErrorMessage name="category" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group">
                            <Field type="text" name="name" className="form-control"  placeholder="name"/>
                            <ErrorMessage name="name" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group">
                            <Field type="text" name="brand" className="form-control"  placeholder="brand"/>
                            <ErrorMessage name="brand" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group">
                            <Field type="number" name="price" className="form-control"  placeholder="price"/>
                            <ErrorMessage name="price" component="div" className="alret error-messgae"/>
                        </div>
                        <div className="form-group">
                            <label>image:</label><br/>
                            <input type="file" name="image" onChange={(event) => {
                                setFieldValue('image', event.currentTarget.files[0]);
                            }} />
                        </div>
                        <div>
                            <Field type="submit" value="send" className="btn btn-primary send-btn" disabled={this.state.submitting}/>
                        </div>
                    </Form>
                    }}>
                </Formik>
            </ProductsStyled>
        );
    }
}

export default Products;