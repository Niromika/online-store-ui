import React from 'react';
import styled, {ThemeProvider } from 'styled-components';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from './Register/Register';
import Header from './Header/Header';
import Login from './Login/Login';
import Homepage from './Homepage/Homepage';
import Profile from './Profile/Profile';
import EditDetails from './Profile/EditDetails/EditDetails';
import Category from './Category/Category';
import Product from './Category/Product/Product';
import Cart from './Cart/Cart';
import Admin from './Admin/Admin';
import theme from '../theme';


const AppStyled = styled.div`
  height: 100%;
  color: ${({theme}) => theme.color.primary};
  font-family: Arial, Helvetica, sans-serif;
    ol, ul, dl {
      margin-bottom: 0;
    }

    .background {
      background-image: url('https://media.wired.com/photos/5c01dbc43028102cdb865eab/2:1/w_2400,h_1200,c_limit/Dog-gift-guide-955715252.jpg');
      background-size: cover
      min-height: 370px;
    }
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <AppStyled className="App">
            
            <div className="background">
              <Header />
            </div>

            <Route path="/" exact component={Homepage} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/profile/edit" component={EditDetails} />
            <Route path="/category/:id" exact component={Category} />
            <Route path="/category/:categoryId/product/:id" component={Product} />

            <Route path="/admin" component={Admin} />



          </AppStyled>
        </ThemeProvider>
      </Router>
    )
  }
}
 
  export default App;
