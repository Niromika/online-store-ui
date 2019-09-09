import React from 'react';
import styled, {ThemeProvider } from 'styled-components';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './Register/Register';
import Header from './Header/Header';
import Login from './Login/Login';
import Homepage from './Homepage/Homepage';
import Profile from './Profile/Profile';
import Category from './Category/Category';
import Product from './Category/Product/Product';
import Cart from './Cart/Cart';
import theme from '../theme';

const AppStyled = styled.div`
  height: 100%;
  color: ${({theme}) => theme.color.primary};
  font-family: Arial, Helvetica, sans-serif;
    ol, ul, dl {
      margin-bottom: 0;
    }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppStyled className="App">
            <Header />

            <Route path="/" exact component={Homepage} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/category/:id" exact component={Category} />
            <Route path="/category/:categoryId/product/:id" component={Product} />

          </AppStyled>
        </ThemeProvider>
      </Router>
    )
  }
}
 
  export default App;
